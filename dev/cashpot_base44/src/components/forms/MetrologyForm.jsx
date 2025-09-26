import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AttachmentUpload from './AttachmentUpload';
import { MetrologyApproval, MetrologySoftware, MetrologyAuthority } from '@/api/entities';

export default function MetrologyForm({ certificate, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    type: 'certificate',
    serial_number: '',
    certificate_number: '',
    certificate_type: 'Initiala',
    issue_date: '',
    expiry_date: '',
    status: 'active',
    description: '',
    attachments: [],
    approval_id: '',
    software_id: '',
    authority_id: ''
  });

  const [approvals, setApprovals] = useState([]);
  const [software, setSoftware] = useState([]);
  const [authorities, setAuthorities] = useState([]);

  useEffect(() => {
    // Load dropdown data
    const loadData = async () => {
      try {
        const [approvalsData, softwareData, authoritiesData] = await Promise.all([
          MetrologyApproval.list(),
          MetrologySoftware.list(),
          MetrologyAuthority.list()
        ]);
        setApprovals(approvalsData);
        setSoftware(softwareData);
        setAuthorities(authoritiesData);
      } catch (error) {
        console.error('Error loading dropdown data:', error);
      }
    };
    
    loadData();
  }, []);

  useEffect(() => {
    if (certificate) {
      setFormData({
        ...certificate,
        issue_date: certificate.issue_date ? certificate.issue_date.split('T')[0] : '',
        expiry_date: certificate.expiry_date ? certificate.expiry_date.split('T')[0] : '',
        approval_id: certificate.approval_id || '',
        software_id: certificate.software_id || '',
        authority_id: certificate.authority_id || ''
      });
    } else {
      setFormData({
        type: 'certificate',
        serial_number: '',
        certificate_number: '',
        certificate_type: 'Initiala',
        issue_date: '',
        expiry_date: '',
        status: 'active',
        description: '',
        attachments: [],
        approval_id: '',
        software_id: '',
        authority_id: ''
      });
    }
  }, [certificate]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    // Auto-calculate expiry date when issue date changes for Initiala and Periodica
    if (name === 'issue_date' && value && (formData.certificate_type === 'Initiala' || formData.certificate_type === 'Periodica')) {
      const issueDate = new Date(value);
      const expiryDate = new Date(issueDate);
      expiryDate.setDate(expiryDate.getDate() + 365 - 1); // Add 365 days minus 1 day
      
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        expiry_date: expiryDate.toISOString().split('T')[0]
      }));
    } else {
      setFormData(prev => ({ 
        ...prev, 
        [name]: type === 'number' ? parseInt(value) || 0 : value 
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-calculate expiry date when certificate type changes to Initiala or Periodica
    if (name === 'certificate_type' && (value === 'Initiala' || value === 'Periodica') && formData.issue_date) {
      const issueDate = new Date(formData.issue_date);
      const expiryDate = new Date(issueDate);
      expiryDate.setDate(expiryDate.getDate() + 365 - 1); // Add 365 days minus 1 day
      
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        expiry_date: expiryDate.toISOString().split('T')[0]
      }));
    }
  };

  const handleAddAttachments = (newAttachments) => {
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...newAttachments]
    }));
  };

  const handleRemoveAttachment = (attachmentId) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter(att => att.id !== attachmentId)
    }));
  };

  const handleDownloadAttachment = (attachment) => {
    // Create download link from base64 data
    const link = document.createElement('a');
    link.href = attachment.data;
    link.download = attachment.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="serial_number">Serial Number</Label>
          <Input id="serial_number" name="serial_number" value={formData.serial_number} onChange={handleChange} required className="bg-white border-gray-300" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="certificate_number">Certificate Number</Label>
          <Input id="certificate_number" name="certificate_number" value={formData.certificate_number} onChange={handleChange} required className="bg-white border-gray-300" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="certificate_type">Certificate Type</Label>
          <Select value={formData.certificate_type} onValueChange={(value) => handleSelectChange('certificate_type', value)} required>
            <SelectTrigger id="certificate_type" className="bg-white border-gray-300">
              <SelectValue placeholder="Select certificate type" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="Initiala">Initiala</SelectItem>
              <SelectItem value="Periodica">Periodica</SelectItem>
              <SelectItem value="Reparatie">Reparatie</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status} onValueChange={(value) => handleSelectChange('status', value)}>
            <SelectTrigger id="status" className="bg-white border-gray-300">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="issue_date">Issue Date</Label>
          <Input id="issue_date" name="issue_date" type="date" value={formData.issue_date} onChange={handleChange} required className="bg-white border-gray-300" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="expiry_date">Expiry Date</Label>
          <Input 
            id="expiry_date" 
            name="expiry_date" 
            type="date" 
            value={formData.expiry_date} 
            onChange={handleChange} 
            required={formData.certificate_type === 'Reparatie'} 
            disabled={formData.certificate_type === 'Initiala' || formData.certificate_type === 'Periodica'}
            className="bg-white border-gray-300" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="approval_id">Aprobare de tip</Label>
          <Select value={formData.approval_id} onValueChange={(value) => handleSelectChange('approval_id', value)}>
            <SelectTrigger id="approval_id" className="bg-white border-gray-300">
              <SelectValue placeholder="Selectează aprobarea" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="">Fără aprobare</SelectItem>
              {approvals.map((approval) => (
                <SelectItem key={approval.id} value={approval.id}>
                  {approval.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="software_id">Software</Label>
          <Select value={formData.software_id} onValueChange={(value) => handleSelectChange('software_id', value)}>
            <SelectTrigger id="software_id" className="bg-white border-gray-300">
              <SelectValue placeholder="Selectează software-ul" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="">Fără software</SelectItem>
              {software.map((soft) => (
                <SelectItem key={soft.id} value={soft.id}>
                  {soft.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="authority_id">Autorități Metrologice</Label>
          <Select value={formData.authority_id} onValueChange={(value) => handleSelectChange('authority_id', value)}>
            <SelectTrigger id="authority_id" className="bg-white border-gray-300">
              <SelectValue placeholder="Selectează autoritatea" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectItem value="">Fără autoritate</SelectItem>
              {authorities.map((authority) => (
                <SelectItem key={authority.id} value={authority.id}>
                  {authority.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} className="bg-white border-gray-300" rows={3} />
      </div>
      
      <div className="space-y-2">
        <Label>Attachments</Label>
        <AttachmentUpload onAttachmentsAdded={handleAddAttachments} />
        {formData.attachments.length > 0 && (
          <div className="space-y-2">
            {formData.attachments.map((attachment, index) => (
              <div key={attachment.id || index} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                <span className="text-sm text-gray-600">{attachment.name}</span>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => handleDownloadAttachment(attachment)}>
                    Download
                  </Button>
                  <Button type="button" variant="outline" size="sm" onClick={() => handleRemoveAttachment(attachment.id || index)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {certificate ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}