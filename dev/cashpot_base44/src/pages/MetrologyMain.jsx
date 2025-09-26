import React, { useState, useEffect } from 'react';
import { SlotMachine, Provider, Cabinet, GameMix, Location, Company, Metrology, MetrologyApproval, MetrologyCommission, MetrologyAuthority, MetrologySoftware } from '@/api/entities';
import { Search, Download, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function MetrologyMain() {
  const [slotMachines, setSlotMachines] = useState([]);
  const [providers, setProviders] = useState([]);
  const [cabinets, setCabinets] = useState([]);
  const [gameMixes, setGameMixes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [metrology, setMetrology] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [commissions, setCommissions] = useState([]);
  const [authorities, setAuthorities] = useState([]);
  const [software, setSoftware] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    provider: '',
    location: '',
    year: '',
    status: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [slots, provs, cabs, mixes, locs, comps, met, appr, comm, auth, soft] = await Promise.all([
        SlotMachine.list(),
        Provider.list(),
        Cabinet.list(),
        GameMix.list(),
        Location.list(),
        Company.list(),
        Metrology.list(),
        MetrologyApproval.list(),
        MetrologyCommission.list(),
        MetrologyAuthority.list(),
        MetrologySoftware.list()
      ]);
      
      setSlotMachines(slots);
      setProviders(provs);
      setCabinets(cabs);
      setGameMixes(mixes);
      setLocations(locs);
      setCompanies(comps);
      setMetrology(met);
      setApprovals(appr);
      setCommissions(comm);
      setAuthorities(auth);
      setSoftware(soft);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProviderName = (id) => providers.find(p => p.id === id)?.name || 'N/A';
  const getCabinetName = (id) => cabinets.find(c => c.id === id)?.name || 'N/A';
  const getGameMixName = (id) => gameMixes.find(g => g.id === id)?.name || 'N/A';
  const getLocationName = (id) => locations.find(l => l.id === id)?.name || 'N/A';
  const getCompanyName = (id) => companies.find(c => c.id === id)?.name || 'N/A';
  const getCabinetModel = (id) => cabinets.find(c => c.id === id)?.model || 'N/A';

  const getMetrologyForSlot = (serialNumber) => {
    return metrology.filter(m => m.serial_numbers && m.serial_numbers.includes(serialNumber));
  };

  const getApprovalForSlot = (serialNumber) => {
    return approvals.find(a => a.serial_numbers && a.serial_numbers.includes(serialNumber));
  };

  const getCommissionForSlot = (serialNumber) => {
    return commissions.find(c => c.serial_numbers && c.serial_numbers.includes(serialNumber));
  };

  const getSoftwareForSlot = (serialNumber) => {
    return software.find(s => s.serial_numbers && s.serial_numbers.includes(serialNumber));
  };

  const getFullAddress = (locationId) => {
    const location = locations.find(l => l.id === locationId);
    if (!location) return 'N/A';
    return `${location.city}, ${location.address}`;
  };

  const getDaysUntilExpiry = (expiryDate) => {
    if (!expiryDate) return 'N/A';
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredData = slotMachines.filter(slot => {
    const matchesSearch = !searchTerm || 
      slot.serial_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getProviderName(slot.provider_id).toLowerCase().includes(searchTerm.toLowerCase()) ||
      getLocationName(slot.location_id).toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProvider = !filters.provider || filters.provider === 'all' || slot.provider_id === filters.provider;
    const matchesLocation = !filters.location || filters.location === 'all' || slot.location_id === filters.location;
    const matchesYear = !filters.year || filters.year === 'all' || slot.production_year?.toString() === filters.year;
    
    return matchesSearch && matchesProvider && matchesLocation && matchesYear;
  });

  const exportData = (type) => {
    const data = filteredData.map((slot, index) => {
      const metrologyData = getMetrologyForSlot(slot.serial_number);
      const approval = getApprovalForSlot(slot.serial_number);
      const commission = getCommissionForSlot(slot.serial_number);
      const softwareData = getSoftwareForSlot(slot.serial_number);
      
      if (type === 'metrologic') {
        return {
          'An Fabricatie': slot.production_year || 'N/A',
          'Serie': slot.serial_number,
          'Aprobare de tip': approval?.name || 'N/A',
          'Invoice': metrologyData[0]?.invoice_number || 'N/A',
          'Adresa Full': getFullAddress(slot.location_id)
        };
      } else {
        return {
          'ID': index + 1,
          'Serie': slot.serial_number,
          'An Fabricatie': slot.production_year || 'N/A',
          'Provider': getProviderName(slot.provider_id),
          'Cabinet Name': getCabinetName(slot.cabinet_id),
          'Cabinet Model': getCabinetModel(slot.cabinet_id),
          'Game Mix': getGameMixName(slot.game_mix_id),
          'Software': softwareData?.name || 'N/A',
          'Aprobare de tip': approval?.name || 'N/A',
          'Invoice': metrologyData[0]?.invoice_number || 'N/A',
          'Adresa Intreaga': getFullAddress(slot.location_id),
          'Data Emiterii': metrologyData[0]?.issue_date || 'N/A',
          'Data Certificatului Metrologic': metrologyData[0]?.certificate_date || 'N/A',
          'Data Expirarii': metrologyData[0]?.expiry_date || 'N/A',
          'Zile Ramase': getDaysUntilExpiry(metrologyData[0]?.expiry_date)
        };
      }
    });

    const csv = [
      Object.keys(data[0] || {}),
      ...data.map(row => Object.values(row))
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `metrology-${type}-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6 ml-4 mr-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Metrology Main</h1>
          <p className="text-gray-600">All slot machines with metrology status</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => exportData('metrologic')} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Metrologic
          </Button>
          <Button onClick={() => exportData('full')} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Full
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Slots</p>
              <p className="text-2xl font-bold text-gray-900">{filteredData.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">With Certificates</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredData.filter(slot => {
                  const metrologyData = metrology.filter(m => m.serial_number === slot.serial_number);
                  return metrologyData.length > 0;
                }).length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <div className="w-6 h-6 bg-yellow-600 rounded"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredData.filter(slot => {
                  const metrologyData = metrology.filter(m => m.serial_number === slot.serial_number);
                  if (metrologyData.length === 0) return false;
                  const days = getDaysUntilExpiry(metrologyData[0]?.expiry_date);
                  return days <= 30 && days > 0;
                }).length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <div className="w-6 h-6 bg-red-600 rounded"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Expired</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredData.filter(slot => {
                  const metrologyData = metrology.filter(m => m.serial_number === slot.serial_number);
                  if (metrologyData.length === 0) return false;
                  const days = getDaysUntilExpiry(metrologyData[0]?.expiry_date);
                  return days <= 0;
                }).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-3 bg-gray-50 rounded-lg">
        <div>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-8 text-sm"
          />
        </div>
        <Select value={filters.provider} onValueChange={(value) => setFilters(prev => ({ ...prev, provider: value }))}>
          <SelectTrigger className="h-8 text-sm">
            <SelectValue placeholder="Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Providers</SelectItem>
            {providers.map(provider => (
              <SelectItem key={provider.id} value={provider.id}>{provider.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
          <SelectTrigger className="h-8 text-sm">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map(location => (
              <SelectItem key={location.id} value={location.id}>{location.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filters.year} onValueChange={(value) => setFilters(prev => ({ ...prev, year: value }))}>
          <SelectTrigger className="h-8 text-sm">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {[...new Set(slotMachines.map(s => s.production_year).filter(Boolean))].sort().map(year => (
              <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={() => setFilters({ provider: '', location: '', year: '', status: '' })} variant="outline" className="h-8 text-sm">
          Clear
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow ml-2 mr-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Serie</TableHead>
              <TableHead>An Fabricatie</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Cabinet Name</TableHead>
              <TableHead>Cabinet Model</TableHead>
              <TableHead>Game Mix</TableHead>
              <TableHead>Software</TableHead>
              <TableHead>Aprobare de tip</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Adresa Intreaga</TableHead>
              <TableHead>Data Emiterii</TableHead>
              <TableHead>Data Certificatului Metrologic</TableHead>
              <TableHead>Data Expirarii</TableHead>
              <TableHead>Zile Ramase</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((slot, index) => {
              const metrologyData = getMetrologyForSlot(slot.serial_number);
              const approval = getApprovalForSlot(slot.serial_number);
              const commission = getCommissionForSlot(slot.serial_number);
              const softwareData = getSoftwareForSlot(slot.serial_number);
              const daysUntilExpiry = getDaysUntilExpiry(metrologyData[0]?.expiry_date);
              
              return (
                <TableRow key={slot.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-medium">{slot.serial_number}</TableCell>
                  <TableCell>{slot.production_year || 'N/A'}</TableCell>
                  <TableCell>{getProviderName(slot.provider_id)}</TableCell>
                  <TableCell>{getCabinetName(slot.cabinet_id)}</TableCell>
                  <TableCell>{getCabinetModel(slot.cabinet_id)}</TableCell>
                  <TableCell>{getGameMixName(slot.game_mix_id)}</TableCell>
                  <TableCell>{softwareData?.name || 'N/A'}</TableCell>
                  <TableCell>{approval?.name || 'N/A'}</TableCell>
                  <TableCell>{metrologyData[0]?.invoice_number || 'N/A'}</TableCell>
                  <TableCell>{getFullAddress(slot.location_id)}</TableCell>
                  <TableCell>{metrologyData[0]?.issue_date || 'N/A'}</TableCell>
                  <TableCell>{metrologyData[0]?.certificate_date || 'N/A'}</TableCell>
                  <TableCell>{metrologyData[0]?.expiry_date || 'N/A'}</TableCell>
                  <TableCell>
                    <Badge variant={daysUntilExpiry < 30 ? 'destructive' : daysUntilExpiry < 90 ? 'secondary' : 'default'}>
                      {daysUntilExpiry}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
