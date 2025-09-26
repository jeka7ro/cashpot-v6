import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Upload, Database, Trash2, Save, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

export default function Settings() {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  const exportAllData = async () => {
    try {
      setIsExporting(true);
      
      // Get all data from localStorage
      const allData = {
        providers: JSON.parse(localStorage.getItem('providers') || '[]'),
        locations: JSON.parse(localStorage.getItem('locations') || '[]'),
        cabinets: JSON.parse(localStorage.getItem('cabinets') || '[]'),
        gameMixes: JSON.parse(localStorage.getItem('gameMixes') || '[]'),
        platforms: JSON.parse(localStorage.getItem('platforms') || '[]'),
        slotMachines: JSON.parse(localStorage.getItem('slotMachines') || '[]'),
        companies: JSON.parse(localStorage.getItem('companies') || '[]'),
        invoices: JSON.parse(localStorage.getItem('invoices') || '[]'),
        metrology: JSON.parse(localStorage.getItem('metrology') || '[]'),
        metrologyApprovals: JSON.parse(localStorage.getItem('metrologyApprovals') || '[]'),
        metrologyCommissions: JSON.parse(localStorage.getItem('metrologyCommissions') || '[]'),
        metrologyAuthorities: JSON.parse(localStorage.getItem('metrologyAuthorities') || '[]'),
        metrologySoftware: JSON.parse(localStorage.getItem('metrologySoftware') || '[]'),
        jackpots: JSON.parse(localStorage.getItem('jackpots') || '[]'),
        users: JSON.parse(localStorage.getItem('users') || '[]'),
        settings: JSON.parse(localStorage.getItem('settings') || '{}'),
        pageSettings: JSON.parse(localStorage.getItem('pageSettings') || '{}'),
        infoLayout: JSON.parse(localStorage.getItem('infoLayout') || '{}'),
        exportDate: new Date().toISOString(),
        version: '6.0.0'
      };

      // Create and download file
      const dataStr = JSON.stringify(allData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `cashpot-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success('Backup exported successfully!');
    } catch (error) {
      console.error('Error exporting data:', error);
      toast.error('Failed to export backup');
    } finally {
      setIsExporting(false);
    }
  };

  const importData = async (event) => {
    try {
      setIsImporting(true);
      const file = event.target.files[0];
      
      if (!file) return;

      const text = await file.text();
      const data = JSON.parse(text);

      // Validate data structure
      if (!data.version || !data.exportDate) {
        throw new Error('Invalid backup file format');
      }

      // Import all data
      Object.keys(data).forEach(key => {
        if (key !== 'version' && key !== 'exportDate' && typeof data[key] === 'object') {
          localStorage.setItem(key, JSON.stringify(data[key]));
        }
      });

      toast.success('Backup imported successfully! Please refresh the page.');
      
      // Reset file input
      event.target.value = '';
    } catch (error) {
      console.error('Error importing data:', error);
      toast.error('Failed to import backup. Please check the file format.');
    } finally {
      setIsImporting(false);
    }
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear ALL data? This action cannot be undone!')) {
      if (window.confirm('This will delete EVERYTHING. Are you absolutely sure?')) {
        // Clear all localStorage data
        const keysToKeep = ['theme', 'language']; // Keep some settings
        Object.keys(localStorage).forEach(key => {
          if (!keysToKeep.includes(key)) {
            localStorage.removeItem(key);
          }
        });
        
        toast.success('All data cleared! Please refresh the page.');
      }
    }
  };

  const getDataStats = () => {
    const stats = {
      providers: JSON.parse(localStorage.getItem('providers') || '[]').length,
      locations: JSON.parse(localStorage.getItem('locations') || '[]').length,
      cabinets: JSON.parse(localStorage.getItem('cabinets') || '[]').length,
      gameMixes: JSON.parse(localStorage.getItem('gameMixes') || '[]').length,
      platforms: JSON.parse(localStorage.getItem('platforms') || '[]').length,
      slotMachines: JSON.parse(localStorage.getItem('slotMachines') || '[]').length,
      companies: JSON.parse(localStorage.getItem('companies') || '[]').length,
      invoices: JSON.parse(localStorage.getItem('invoices') || '[]').length,
      metrology: JSON.parse(localStorage.getItem('metrology') || '[]').length,
      metrologyApprovals: JSON.parse(localStorage.getItem('metrologyApprovals') || '[]').length,
      metrologyCommissions: JSON.parse(localStorage.getItem('metrologyCommissions') || '[]').length,
      metrologyAuthorities: JSON.parse(localStorage.getItem('metrologyAuthorities') || '[]').length,
      metrologySoftware: JSON.parse(localStorage.getItem('metrologySoftware') || '[]').length,
      jackpots: JSON.parse(localStorage.getItem('jackpots') || '[]').length,
      users: JSON.parse(localStorage.getItem('users') || '[]').length,
    };

    return stats;
  };

  const stats = getDataStats();

  return (
    <div className="p-6 bg-background min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your application settings and data</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Data Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Data Statistics
              </CardTitle>
              <CardDescription>
                Current data in your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Providers:</span>
                    <span className="font-medium">{stats.providers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Locations:</span>
                    <span className="font-medium">{stats.locations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cabinets:</span>
                    <span className="font-medium">{stats.cabinets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Game Mixes:</span>
                    <span className="font-medium">{stats.gameMixes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Platforms:</span>
                    <span className="font-medium">{stats.platforms}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Slot Machines:</span>
                    <span className="font-medium">{stats.slotMachines}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Companies:</span>
                    <span className="font-medium">{stats.companies}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Invoices:</span>
                    <span className="font-medium">{stats.invoices}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Metrology:</span>
                    <span className="font-medium">{stats.metrology}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Users:</span>
                    <span className="font-medium">{stats.users}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Backup & Restore */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Save className="w-5 h-5" />
                Backup & Restore
              </CardTitle>
              <CardDescription>
                Export and import your data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button 
                  onClick={exportAllData} 
                  disabled={isExporting}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isExporting ? 'Exporting...' : 'Export Full Backup'}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Download all your data as a JSON file
                </p>
              </div>

              <div className="space-y-2">
                <label className="block">
                  <input
                    type="file"
                    accept=".json"
                    onChange={importData}
                    disabled={isImporting}
                    className="hidden"
                    id="import-file"
                  />
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full"
                    disabled={isImporting}
                  >
                    <label htmlFor="import-file" className="cursor-pointer">
                      <Upload className="w-4 h-4 mr-2" />
                      {isImporting ? 'Importing...' : 'Import Backup'}
                    </label>
                  </Button>
                </label>
                <p className="text-xs text-muted-foreground">
                  Restore data from a backup file
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                Irreversible actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                  <h4 className="font-medium text-destructive mb-2">Clear All Data</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This will permanently delete all your data. Make sure you have a backup before proceeding.
                  </p>
                  <Button 
                    onClick={clearAllData}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}