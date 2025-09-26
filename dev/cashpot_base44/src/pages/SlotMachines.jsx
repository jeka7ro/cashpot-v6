import React, { useState, useEffect } from "react";
import { SlotMachine, Cabinet, GameMix, Provider, Location, Company, Invoice, Platform } from "@/api/entities";
import { Coins, Plus, Edit, Trash2, Eye, Search, Filter, Download, Upload, Factory, Settings, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Modal from "../components/common/Modal";
import SlotMachineForm from "../components/forms/SlotMachineForm";
import SlotMachineBulkEditForm from "../components/forms/SlotMachineBulkEditForm";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

export default function SlotMachines() {
  const [slotMachines, setSlotMachines] = useState([]);
  const [cabinets, setCabinets] = useState([]);
  const [gameMixes, setGameMixes] = useState([]);
  const [providers, setProviders] = useState([]);
  const [locations, setLocations] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filters and search
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    provider: '',
    location: '',
    status: '',
    ownership_type: '',
    rtp_min: '',
    rtp_max: ''
  });
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMachine, setEditingMachine] = useState(null);
  const [selectedMachines, setSelectedMachines] = useState([]);
  const [isBulkEditModalOpen, setIsBulkEditModalOpen] = useState(false);
  
  // Settings and Visual Builder states
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isVisualBuilderOpen, setIsVisualBuilderOpen] = useState(false);
  const [viewMode, setViewMode] = useState('full'); // 'full' or 'slim'
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [pageSettings, setPageSettings] = useState({
    fullView: {
      showSerialNumber: true,
      showProvider: true,
      showCabinet: true,
      showGameMix: true,
      showLocation: true,
      showStatus: true,
      showRTP: true,
      showOwnership: true,
      showCommissionDate: true,
      showAvatar: true,
      showPlatformDetails: true,
      showCompanyDetails: true,
      showCabinetModel: true,
      showProductionYear: true,
      showOwnershipInfo: true,
      showLeaseInfo: true,
      showStatusInfo: true,
      showTechnicalSpecs: true,
      showPlatformInfo: true,
      showSoftwareInfo: true,
      showApprovalInfo: true,
      showAuthorityInfo: true,
      showCommissionInfo: true,
      showCertificateInfo: true
    },
    slimView: {
      showSerialNumber: true,
      showProvider: true,
      showCabinet: true,
      showLocation: true,
      showStatus: true,
      showAvatar: true
    }
  });
  const [infoLayout, setInfoLayout] = useState({});
  const [availableInfoTypes] = useState([
    { id: 'platform', name: 'Platform', icon: '🖥️' },
    { id: 'software', name: 'Software', icon: '💾' },
    { id: 'approval', name: 'Approval', icon: '✅' },
    { id: 'authority', name: 'Authority', icon: '🏛️' },
    { id: 'commission', name: 'Commission', icon: '📋' },
    { id: 'certificate', name: 'Certificate', icon: '📜' },
    { id: 'company', name: 'Company', icon: '🏢' },
    { id: 'cabinetModel', name: 'Cabinet Model', icon: '🏗️' },
    { id: 'productionYear', name: 'Production Year', icon: '📅' },
    { id: 'technicalSpecs', name: 'Technical Specs', icon: '⚙️' },
    { id: 'ownershipInfo', name: 'Ownership Info', icon: '👤' },
    { id: 'leaseInfo', name: 'Lease Info', icon: '📄' },
    { id: 'statusInfo', name: 'Status Info', icon: '🔘' }
  ]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [
        machinesData, cabinetsData, gameMixesData, 
        providersData, locationsData, companiesData, invoicesData, platformsData
      ] = await Promise.all([
        SlotMachine.list('-created_date'),
        Cabinet.list(),
        GameMix.list(),
        Provider.list(),
        Location.list(),
        Company.list(),
        Invoice.list(),
        Platform.list()
      ]);

      setSlotMachines(machinesData);
      setCabinets(cabinetsData);
      setGameMixes(gameMixesData);
      setProviders(providersData);
      setLocations(locationsData);
      setCompanies(companiesData);
      setInvoices(invoicesData);
      setPlatforms(platformsData);
    } catch (error) {
      console.error('Error loading slot machines data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper functions
  const getProviderName = (providerId, manufacturer) => {
    const provider = providers.find(p => p.id === providerId);
    if (provider) return provider.name;
    if (manufacturer) return manufacturer;
    return 'N/A';
  };

  const getProviderAvatar = (providerId) => {
    const provider = providers.find(p => p.id === providerId);
    return provider?.avatar || null;
  };
  const getCabinetName = (cabinetId) => cabinets.find(c => c.id === cabinetId)?.name || 'N/A';
  const getGameMixName = (gameMixId) => gameMixes.find(gm => gm.id === gameMixId)?.name || 'N/A';
  const getLocationName = (locationId) => locations.find(l => l.id === locationId)?.name || 'Warehouse';
  const getCompanyName = (locationId) => {
    const loc = locations.find(l => l.id === locationId);
    return companies.find(c => c.id === loc?.company_id)?.name || 'N/A';
  };

  const getInvoiceNumber = (serialNumber) => {
    const invoice = invoices.find(inv => inv.serial_number === serialNumber);
    return invoice?.invoice_number || 'N/A';
  };

  const getPlatformName = (serialNumber) => {
    const platform = platforms.find(p => p.serial_numbers && p.serial_numbers.includes(serialNumber));
    return platform?.name || 'N/A';
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-900/30 text-green-300 border-green-700';
      case 'inactive': return 'bg-yellow-900/30 text-yellow-300 border-yellow-700';
      case 'maintenance': return 'bg-orange-900/30 text-orange-300 border-orange-700';
      case 'storage': return 'bg-blue-900/30 text-blue-300 border-blue-700';
      default: return 'bg-background/30 text-muted-foreground border-border';
    }
  };

  const getOwnershipColor = (ownership) => {
    return ownership === 'property' 
      ? 'bg-purple-900/30 text-purple-300 border-purple-700'
      : 'bg-orange-900/30 text-orange-300 border-orange-700';
  };

  // Event handlers
  const handleAdd = () => {
    setEditingMachine(null);
    setIsModalOpen(true);
  };

  const handleEdit = (machine) => {
    setEditingMachine(machine);
    setIsModalOpen(true);
  };

  const handleDelete = async (machineId) => {
    if (window.confirm('Are you sure you want to delete this slot machine?')) {
      try {
        await SlotMachine.delete(machineId);
        await loadData();
        setSelectedMachines(prev => prev.filter(id => id !== machineId));
      } catch (error) {
        console.error('Error deleting slot machine:', error);
        alert('Failed to delete slot machine.');
      }
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      console.log('Saving slot machine:', formData);
      let result;
      if (editingMachine) {
        console.log('Updating slot machine:', editingMachine.id);
        result = await SlotMachine.update(editingMachine.id, formData);
      } else {
        console.log('Creating new slot machine');
        result = await SlotMachine.create(formData);
      }
      console.log('Slot machine saved successfully:', result);
      await loadData();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving slot machine:', error);
      alert('Failed to save slot machine: ' + error.message);
    }
  };
  
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedMachines(filteredMachines.map(m => m.id));
    } else {
      setSelectedMachines([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedMachines(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = async () => {
    if (selectedMachines.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedMachines.length} slot machines?`)) {
      try {
        setIsLoading(true);
        await Promise.all(selectedMachines.map(id => SlotMachine.delete(id)));
        await loadData();
        setSelectedMachines([]);
      } catch (error) {
        console.error('Error bulk deleting slot machines:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Settings and Visual Builder functions
  const loadPageSettings = () => {
    const saved = localStorage.getItem('slotsPageSettings');
    if (saved) {
      setPageSettings(JSON.parse(saved));
    }
  };

  const savePageSettings = (settings) => {
    setPageSettings(settings);
    localStorage.setItem('slotsPageSettings', JSON.stringify(settings));
  };

  const loadInfoLayout = () => {
    const saved = localStorage.getItem('slotsInfoLayout');
    if (saved) {
      setInfoLayout(JSON.parse(saved));
    }
  };

  const saveInfoLayout = (layout) => {
    setInfoLayout(layout);
    localStorage.setItem('slotsInfoLayout', JSON.stringify(layout));
  };

  const moveInfoToPosition = (infoType, column, row) => {
    const newLayout = { ...infoLayout };
    if (!newLayout[column]) {
      newLayout[column] = {};
    }
    newLayout[column][row] = infoType;
    saveInfoLayout(newLayout);
  };

  const removeInfoFromPosition = (column, row) => {
    const newLayout = { ...infoLayout };
    if (newLayout[column] && newLayout[column][row]) {
      delete newLayout[column][row];
      saveInfoLayout(newLayout);
    }
  };

  const toggleSetting = (view, setting) => {
    const newSettings = { ...pageSettings };
    newSettings[view][setting] = !newSettings[view][setting];
    savePageSettings(newSettings);
  };

  useEffect(() => {
    loadPageSettings();
    loadInfoLayout();
  }, []);

  const handleBulkEditSubmit = async (formData) => {
    const updates = Object.entries(formData).reduce((acc, [key, value]) => {
      if (value !== '' && value !== null) acc[key] = value;
      return acc;
    }, {});

    if (Object.keys(updates).length === 0) {
      setIsBulkEditModalOpen(false);
      return;
    }

    try {
      setIsLoading(true);
      await Promise.all(selectedMachines.map(id => SlotMachine.update(id, updates)));
      await loadData();
      setIsBulkEditModalOpen(false);
      setSelectedMachines([]);
    } catch (error) {
      console.error('Error bulk editing slot machines:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    const csvContent = [
      ['Serial Number', 'Model', 'Provider', 'Cabinet', 'Game Mix', 'Location', 'Status', 'RTP', 'Ownership', 'Commission Date'].join(','),
      ...filteredMachines.map(machine => [
        machine.serial_number,
        machine.model,
        getProviderName(machine.provider_id, machine.manufacturer),
        getCabinetName(machine.cabinet_id),
        getGameMixName(machine.game_mix_id),
        getLocationName(machine.location_id),
        machine.status,
        machine.rtp + '%',
        machine.ownership_type,
        machine.commission_date && machine.commission_date !== '' && !isNaN(new Date(machine.commission_date).getTime()) ? format(new Date(machine.commission_date), 'yyyy-MM-dd') : ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `slot_machines_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
  };

  // Filter machines
  const filteredMachines = slotMachines.filter(machine => {
    const matchesSearch = 
      (machine.serial_number || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (machine.model || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      getProviderName(machine.provider_id, machine.manufacturer).toLowerCase().includes(searchTerm.toLowerCase());

    const matchesProvider = !filters.provider || machine.provider_id === filters.provider;
    const matchesLocation = !filters.location || machine.location_id === filters.location;
    const matchesStatus = !filters.status || machine.status === filters.status;
    const matchesOwnership = !filters.ownership_type || machine.ownership_type === filters.ownership_type;
    
    let matchesRTP = true;
    if (filters.rtp_min && machine.rtp < parseFloat(filters.rtp_min)) matchesRTP = false;
    if (filters.rtp_max && machine.rtp > parseFloat(filters.rtp_max)) matchesRTP = false;

    return matchesSearch && matchesProvider && matchesLocation && matchesStatus && matchesOwnership && matchesRTP;
  });

  // Calculate statistics based on filtered results
  const statistics = {
    total: filteredMachines.length,
    active: filteredMachines.filter(m => m.status === 'active').length,
    inactive: filteredMachines.filter(m => m.status === 'inactive').length,
    maintenance: filteredMachines.filter(m => m.status === 'maintenance').length,
    storage: filteredMachines.filter(m => m.status === 'storage').length,
    owned: filteredMachines.filter(m => m.ownership_type === 'property').length,
    rented: filteredMachines.filter(m => m.ownership_type === 'rent').length,
    avgRTP: filteredMachines.length > 0 ? 
      (filteredMachines.reduce((sum, m) => sum + (m.rtp || 0), 0) / filteredMachines.length).toFixed(2) : 0
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredMachines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMachines = filteredMachines.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <div className="p-3 md:p-6 bg-background min-h-screen text-foreground">
      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Slot Machines</h1>
            <p className="text-muted-foreground text-sm md:text-base">Manage gaming equipment and configurations</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={() => setIsSettingsOpen(true)} variant="outline" className="border-border bg-card hover:bg-muted">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button onClick={() => setIsVisualBuilderOpen(true)} variant="outline" className="border-border bg-card hover:bg-muted">
              <Palette className="w-4 h-4 mr-2" />
              Visual Builder
            </Button>
            <Button onClick={handleExport} variant="outline" className="border-border bg-card hover:bg-muted">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Machine
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-foreground">{statistics.total}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-green-400">{statistics.active}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-yellow-400">{statistics.inactive}</div>
            <div className="text-sm text-muted-foreground">Inactive</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-orange-400">{statistics.maintenance}</div>
            <div className="text-sm text-muted-foreground">Maintenance</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-blue-400">{statistics.storage}</div>
            <div className="text-sm text-muted-foreground">Storage</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-purple-400">{statistics.owned}</div>
            <div className="text-sm text-muted-foreground">Owned</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-orange-400">{statistics.rented}</div>
            <div className="text-sm text-muted-foreground">Rented</div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-cyan-400">{statistics.avgRTP}%</div>
            <div className="text-sm text-muted-foreground">Avg RTP</div>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-4">
          {/* Search and Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search machines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-card border-border pl-10"
              />
            </div>
            <Select value={filters.provider} onValueChange={(value) => setFilters(prev => ({...prev, provider: value}))}>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="All Providers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={null}>All Providers</SelectItem>
                {providers.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({...prev, location: value}))}>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={null}>All Locations</SelectItem>
                <SelectItem value="warehouse">Warehouse</SelectItem>
                {locations.map(l => <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({...prev, status: value}))}>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={null}>All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filters.ownership_type} onValueChange={(value) => setFilters(prev => ({...prev, ownership_type: value}))}>
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="Ownership" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={null}>All Types</SelectItem>
                <SelectItem value="property">Property</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Bulk Actions Row */}
          <div className="flex flex-wrap gap-2 justify-end w-full">
            <Button 
              onClick={() => setIsBulkEditModalOpen(true)}
              disabled={selectedMachines.length === 0}
              variant="outline"
              className="border-border bg-card hover:bg-muted flex-shrink-0"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit ({selectedMachines.length})
            </Button>
            <Button 
              onClick={handleBulkDelete}
              disabled={selectedMachines.length === 0}
              variant="destructive"
              className="bg-red-800/80 hover:bg-red-800 flex-shrink-0"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete ({selectedMachines.length})
            </Button>
          </div>
        </div>
      </header>

      {/* Pagination Controls (Top) */}
      <div className="flex justify-between items-center py-4 mb-4">
        <div className="flex items-center gap-2">
          <label htmlFor="items-per-page" className="text-sm text-muted-foreground">Items per page:</label>
          <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
            <SelectTrigger id="items-per-page" className="w-[80px]">
              <SelectValue placeholder="15" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value={filteredMachines.length.toString()}>All</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
      
      {/* Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="table-row">
              <TableHead className="w-12 text-center">
                <input 
                  type="checkbox" 
                  className="bg-muted border-border rounded"
                  onChange={handleSelectAll}
                  checked={filteredMachines.length > 0 && selectedMachines.length === filteredMachines.length}
                  ref={input => {
                    if (input) input.indeterminate = selectedMachines.length > 0 && selectedMachines.length < filteredMachines.length;
                  }}
                />
              </TableHead>
              <TableHead className="text-muted-foreground">Machine Info</TableHead>
              <TableHead className="text-muted-foreground">Configuration</TableHead>
              <TableHead className="text-muted-foreground">Game Details</TableHead>
              <TableHead className="text-muted-foreground">Location</TableHead>
              <TableHead className="text-muted-foreground">Invoice</TableHead>
              <TableHead className="text-muted-foreground">Financial</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array(5).fill(0).map((_, i) => (
                <TableRow key={i} className="border-border animate-pulse">
                  <TableCell><div className="h-4 bg-muted rounded w-4 mx-auto"></div></TableCell>
                  <TableCell><div className="h-4 bg-muted rounded w-3/4"></div></TableCell>
                  <TableCell><div className="h-4 bg-muted rounded w-1/2"></div></TableCell>
                  <TableCell><div className="h-4 bg-muted rounded w-3/4"></div></TableCell>
                  <TableCell><div className="h-4 bg-muted rounded w-1/2"></div></TableCell>
                  <TableCell><div className="h-4 bg-muted rounded w-16"></div></TableCell>
                  <TableCell><div className="h-4 bg-muted rounded w-16"></div></TableCell>
                  <TableCell><div className="h-8 bg-muted rounded w-24 ml-auto"></div></TableCell>
                </TableRow>
              ))
            ) : (
              currentMachines.map(machine => (
                <TableRow key={machine.id} className="border-border hover:bg-accent">
                  <TableCell className="text-center">
                    <input 
                      type="checkbox" 
                      className="bg-muted border-border rounded"
                      checked={selectedMachines.includes(machine.id)}
                      onChange={() => handleSelectOne(machine.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={getProviderAvatar(machine.provider_id)} alt={getProviderName(machine.provider_id, machine.manufacturer)} />
                        <AvatarFallback className="bg-yellow-900/50 text-yellow-400">
                          <Coins className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-foreground">{machine.serial_number}</div>
                        <div className="text-sm text-muted-foreground">{machine.model}</div>
                        <div className="text-xs text-muted-foreground">
                          {machine.production_year} • {getProviderName(machine.provider_id, machine.manufacturer)}
                        </div>
                        <div className="text-xs text-blue-400">
                          Platform: {getPlatformName(machine.serial_number)}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-foreground">{getCabinetName(machine.cabinet_id)}</div>
                      <div className="text-muted-foreground">Places: {machine.gaming_places}</div>
                      <div className="text-muted-foreground">Denom: €{machine.denomination}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-foreground">{getGameMixName(machine.game_mix_id)}</div>
                      <div className="text-muted-foreground">RTP: {machine.rtp}%</div>
                      <div className="text-muted-foreground">Max Bet: €{machine.max_bet}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-foreground">{getLocationName(machine.location_id)}</div>
                      <div className="text-muted-foreground">{getCompanyName(machine.location_id)}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-mono">
                      <div className="text-foreground">{getInvoiceNumber(machine.serial_number)}</div>
                      <div className="text-muted-foreground text-xs">Invoice #</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Badge className={getOwnershipColor(machine.ownership_type)}>
                        {machine.ownership_type}
                      </Badge>
                      {machine.commission_date && (
                        <div className="text-xs text-muted-foreground">
                          {machine.commission_date && machine.commission_date !== '' && !isNaN(new Date(machine.commission_date).getTime()) ? format(new Date(machine.commission_date), 'MMM yyyy') : 'N/A'}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(machine.status)}>{machine.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link to={createPageUrl(`SlotMachineDetail?id=${machine.id}`)}>
                        <Button variant="ghost" size="icon" className="hover:bg-muted">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(machine)} className="hover:bg-muted">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(machine.id)} className="hover:bg-muted text-red-400 hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {currentMachines.length === 0 && !isLoading && (
          <div className="text-center p-8 text-muted-foreground">
            <Coins className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-muted-foreground mb-2">No slot machines found</h3>
            <p className="text-muted-foreground">Add your first slot machine to get started.</p>
          </div>
        )}
      </div>

      {/* Modals */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMachine ? "Edit Slot Machine" : "Add New Slot Machine"}
      >
        <SlotMachineForm
          slotMachine={editingMachine}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isBulkEditModalOpen}
        onClose={() => setIsBulkEditModalOpen(false)}
        title={`Bulk Edit ${selectedMachines.length} Slot Machines`}
      >
        <SlotMachineBulkEditForm
          onSubmit={handleBulkEditSubmit}
          onCancel={() => setIsBulkEditModalOpen(false)}
          selectionCount={selectedMachines.length}
        />
      </Modal>

      {/* Settings Modal */}
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Slot Machines Settings"
        size="lg"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">View Mode</h3>
            <div className="flex gap-4">
              <Button
                onClick={() => setViewMode('full')}
                variant={viewMode === 'full' ? 'default' : 'outline'}
                className="flex-1"
              >
                Full View
              </Button>
              <Button
                onClick={() => setViewMode('slim')}
                variant={viewMode === 'slim' ? 'default' : 'outline'}
                className="flex-1"
              >
                Slim View
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visible Columns - {viewMode === 'full' ? 'Full View' : 'Slim View'}</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(pageSettings[viewMode === 'full' ? 'fullView' : 'slimView']).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => toggleSetting(viewMode === 'full' ? 'fullView' : 'slimView', key)}
                    className="rounded"
                  />
                  <span className="text-sm capitalize">{key.replace('show', '').replace(/([A-Z])/g, ' $1').trim()}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              savePageSettings(pageSettings);
              setIsSettingsOpen(false);
            }}>
              Save Settings
            </Button>
          </div>
        </div>
      </Modal>

      {/* Visual Builder Modal */}
      <Modal
        isOpen={isVisualBuilderOpen}
        onClose={() => setIsVisualBuilderOpen(false)}
        title="Visual Builder"
        size="xl"
      >
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Smart Visual Builder</h3>
            <p className="text-sm text-muted-foreground">
              Click on information types to add them to your table layout
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Available Information</h4>
              <div className="space-y-2">
                {availableInfoTypes.map((info) => (
                  <Button
                    key={info.id}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => {
                      // Add to layout logic here
                      console.log('Selected info type:', info.id);
                    }}
                  >
                    <span className="mr-2">{info.icon}</span>
                    {info.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Current Layout</h4>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 min-h-[200px]">
                <p className="text-sm text-muted-foreground text-center">
                  Drag information types here to build your layout
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsVisualBuilderOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsVisualBuilderOpen(false)}>
              Apply Layout
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}