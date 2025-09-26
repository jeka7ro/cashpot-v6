import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Provider } from "@/api/entities";

export default function PlatformForm({ platform, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    provider_id: '',
    serial_numbers: '',
    status: 'active'
  });
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      const providersData = await Provider.list();
      setProviders(providersData);
    };
    fetchProviders();
  }, []);

  useEffect(() => {
    if (platform) {
      // Handle both array and string formats for serial_numbers
      let serialNumbersString = '';
      if (Array.isArray(platform.serial_numbers)) {
        serialNumbersString = platform.serial_numbers.join('\n');
      } else if (typeof platform.serial_numbers === 'string') {
        serialNumbersString = platform.serial_numbers.replace(/,/g, '\n');
      }
      
      setFormData({
        name: platform.name || '',
        description: platform.description || '',
        provider_id: platform.provider_id || '',
        serial_numbers: serialNumbersString,
        status: platform.status || 'active'
      });
    } else {
      setFormData({
        name: '',
        description: '',
        provider_id: '',
        serial_numbers: '',
        status: 'active'
      });
    }
  }, [platform]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      serial_numbers: formData.serial_numbers.split('\n').map(sn => sn.trim()).filter(sn => sn.length > 0)
    };
    onSubmit(submitData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Platform Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Enter platform name"
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Enter platform description"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="provider_id">Provider</Label>
        <Select value={formData.provider_id} onValueChange={(value) => handleChange('provider_id', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a provider" />
          </SelectTrigger>
          <SelectContent>
            {providers.map(provider => (
              <SelectItem key={provider.id} value={provider.id}>{provider.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="serial_numbers">Serial Numbers</Label>
        <Textarea
          id="serial_numbers"
          value={formData.serial_numbers}
          onChange={(e) => handleChange('serial_numbers', e.target.value)}
          placeholder="Enter serial numbers, one per line"
          rows={4}
        />
        <p className="text-sm text-muted-foreground mt-1">
          Add serial numbers one per line (like in Game Mix)
        </p>
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <Select value={formData.status} onValueChange={(value) => handleChange('status', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90">
          {platform ? 'Update Platform' : 'Create Platform'}
        </Button>
      </div>
    </form>
  );
}
