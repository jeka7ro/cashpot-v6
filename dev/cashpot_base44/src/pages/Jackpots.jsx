import React, { useState, useEffect } from "react";
import { Jackpot, SlotMachine } from "@/api/entities";
import { Search, Plus, Edit, Eye, Trophy, TrendingUp, DollarSign } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Jackpots() {
  const [jackpots, setJackpots] = useState([]);
  const [slotMachines, setSlotMachines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [jackpotsData, machinesData] = await Promise.all([
        Jackpot.list('-created_date'),
        SlotMachine.list()
      ]);
      setJackpots(jackpotsData);
      setSlotMachines(machinesData);
    } catch (error) {
      console.error('Error loading jackpots data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getMachineModel = (serialNumber) => {
    const machine = slotMachines.find(m => m.serial_number === serialNumber);
    return machine?.model || 'Unknown Machine';
  };

  const filteredJackpots = jackpots.filter(jackpot => 
    (jackpot.serial_number || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (jackpot.jackpot_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (jackpot.jackpot_type || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="p-3 md:p-6 bg-background min-h-screen">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-48 mb-6"></div>
          <div className="space-y-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="h-16 bg-card rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 md:p-6 bg-background min-h-screen text-foreground">
      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Jackpots</h1>
            <p className="text-muted-foreground text-sm md:text-base">Manage jackpot configurations and tracking</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search jackpots..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Jackpot
            </Button>
          </div>
        </div>
      </header>

      {/* Table */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>MACHINE</TableHead>
              <TableHead>JACKPOT NAME</TableHead>
              <TableHead>TYPE</TableHead>
              <TableHead>CURRENT AMOUNT</TableHead>
              <TableHead>PROGRESS</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJackpots.length === 0 ? (
              <TableRow>
                <TableCell colSpan="8" className="text-center py-12">
                  <Trophy className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No jackpots found</h3>
                  <p className="text-muted-foreground">Start by adding your first jackpot configuration.</p>
                </TableCell>
              </TableRow>
            ) : (
              filteredJackpots.map((jackpot, index) => (
                <TableRow key={jackpot.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-foreground">
                          {getMachineModel(jackpot.serial_number)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {jackpot.serial_number}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{jackpot.jackpot_name}</TableCell>
                  <TableCell>
                    <Badge variant={jackpot.jackpot_type === 'progressive' ? 'secondary' : 'default'}>
                      {jackpot.jackpot_type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-600">
                        {jackpot.current_amount?.toLocaleString() || '0'}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${Math.min((jackpot.progress || 0) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {Math.round((jackpot.progress || 0) * 100)}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={jackpot.status === 'active' ? 'default' : 'destructive'}>
                      {jackpot.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}