import React, { createContext, useContext, useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import './app.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
const API = `${BACKEND_URL}/api`;

// Calendar Component
const Calendar = ({ value, onChange, placeholder = "Select date" }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  };

  const formatDisplayDate = (date) => {
    if (!date) return placeholder;
    return new Date(date).toLocaleDateString('ro-RO', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const handleDateClick = (date) => {
    const formattedDate = formatDate(date);
    onChange(formattedDate);
    setShowCalendar(false);
  };

  const monthNames = [
    'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
    'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
  ];

  const days = getDaysInMonth(currentDate);
  const selectedDateObj = value ? new Date(value) : null;

  return (
    <div className="calendar-container">
      <div 
        className="calendar-input"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <span className="calendar-value">
          {formatDisplayDate(value)}
        </span>
        <span className="calendar-icon">📅</span>
      </div>
      
      {showCalendar && (
        <div className="calendar-popup">
          <div className="calendar-header">
            <button 
              type="button"
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              className="calendar-nav"
            >
              ‹
            </button>
            <span className="calendar-month">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button 
              type="button"
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              className="calendar-nav"
            >
              ›
            </button>
          </div>
          
          <div className="calendar-grid">
            <div className="calendar-weekdays">
              {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map(day => (
                <div key={day} className="calendar-weekday">{day}</div>
              ))}
            </div>
            
            <div className="calendar-days">
              {days.map((day, index) => {
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                const isSelected = selectedDateObj && 
                  day.getDate() === selectedDateObj.getDate() &&
                  day.getMonth() === selectedDateObj.getMonth() &&
                  day.getFullYear() === selectedDateObj.getFullYear();
                const isToday = day.toDateString() === new Date().toDateString();
                
                return (
                  <button
                    key={index}
                    type="button"
                    className={`calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="calendar-footer">
            <button 
              type="button"
              onClick={() => handleDateClick(new Date())}
              className="calendar-today-btn"
            >
              Azi
            </button>
            <button 
              type="button"
              onClick={() => setShowCalendar(false)}
              className="calendar-close-btn"
            >
              Închide
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Auth Context
const AuthContext = createContext();

// Avatar Upload Component
const AvatarUpload = ({ entityType, entityId, currentAvatar, onAvatarChange }) => {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { user } = useAuth();

  const handleFileUpload = async (file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      // Convert file to base64
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
      });

      // Upload to backend
      const response = await fetch(`${API}/attachments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          filename: `avatar_${Date.now()}.${file.name.split('.').pop()}`,
          original_filename: file.name,
          file_size: file.size,
          mime_type: file.type,
          file_data: base64,
          entity_type: entityType,
          entity_id: entityId
        })
      });

      if (response.ok) {
        const attachment = await response.json();
        onAvatarChange(attachment);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload avatar');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) handleFileUpload(file);
  };

  useEffect(() => {
    if(entityType === 'game_mixes') {
      console.log('AVATAR UPLOAD GAME MIX:', {entityType, entityId, currentAvatar});
    }
  }, [entityType, entityId, currentAvatar]);

  return (
    <div className="avatar-upload-container">
      <div
        className={`avatar-upload ${dragOver ? 'drag-over' : ''}`}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => document.getElementById(`avatar-input-${entityId}`)?.click()}
      >
        {currentAvatar ? (
          <img
            src={`data:${currentAvatar.mime_type};base64,${currentAvatar.file_data}`}
            alt="Avatar"
            className="avatar-preview"
          />
        ) : (
          <div className="avatar-placeholder">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>Click or drag to upload avatar</span>
          </div>
        )}
        {uploading && (
          <div className="upload-overlay">
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <input
        type="file"
        id={`avatar-input-${entityId}`}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
    </div>
  );
};

// File Upload Component for PDF and other documents
const FileUpload = ({ entityType, entityId, onFileUpload, acceptedTypes = ['application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/png', 'image/jpeg'], maxSizeMB = 50 }) => {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { user } = useAuth();

  const handleFileUpload = async (file) => {
    // Validate file type
    if (!acceptedTypes.includes(file.type)) {
      alert(`Please select a valid file type. Accepted types: ${acceptedTypes.join(', ')}`);
      return;
    }

    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size must be less than ${maxSizeMB}MB`);
      return;
    }

    setUploading(true);
    try {
      // Convert file to base64
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
      });

      // Upload to backend
      const response = await fetch(`${API}/attachments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          filename: `document_${Date.now()}.${file.name.split('.').pop()}`,
          original_filename: file.name,
          file_size: file.size,
          mime_type: file.type,
          file_data: base64,
          entity_type: entityType,
          entity_id: entityId
        })
      });

      if (response.ok) {
        const attachment = await response.json();
        onFileUpload(attachment);
        alert('File uploaded successfully!');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) handleFileUpload(file);
  };

  return (
    <div style={{
      display: 'inline-block',
      position: 'relative'
    }}>
      <button
        onClick={() => document.getElementById(`file-input-${entityId}`)?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: dragOver ? 'var(--accent-color)' : 'var(--background-secondary)',
          color: dragOver ? 'white' : 'var(--text-primary)',
          border: `2px dashed ${dragOver ? 'var(--accent-color)' : '#ddd'}`,
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          minWidth: '120px',
          justifyContent: 'center'
        }}
        title="Click to upload or drag files here"
      >
        <span style={{ fontSize: '16px' }}>📎</span>
        <span>Upload</span>
        {uploading && (
          <span style={{ 
            fontSize: '12px', 
            marginLeft: '4px',
            animation: 'pulse 1s infinite'
          }}>
            ...
          </span>
        )}
      </button>
      <input
        id={`file-input-${entityId}`}
        type="file"
        accept={acceptedTypes.join(',')}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
};

// Custom hook for fetching files
const useFiles = (entityType, entityId) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFiles = async () => {
    if (!entityType || !entityId) return;
    setLoading(true);
    try {
      const url = `${API}/attachments/${entityType}/${entityId}`;
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (response.ok) {
        const attachments = await response.json();
        // Filter out avatar files, keep only documents
        const documentAttachments = attachments.filter(att => 
          !att.mime_type.startsWith('image/') || 
          (!att.filename.includes('avatar') && !att.filename.includes('custom_avatar'))
        );
        setFiles(documentAttachments);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [entityType, entityId]);

  return { files, setFiles, loading, refetch: fetchFiles };
};

// File Display Component
const FileDisplay = ({ entityType, entityId, onFileDelete }) => {
  const { files, loading, refetch } = useFiles(entityType, entityId);
  const [hoveredFile, setHoveredFile] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);

  const handleDownload = async (attachment) => {
    try {
      const response = await fetch(`${API}/attachments/${attachment.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Convert base64 to blob
        const byteCharacters = atob(data.file_data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: data.mime_type });
        
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = data.filename || attachment.original_filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download file: ' + error.message);
    }
  };

  const handlePreview = async (attachment) => {
    try {
      const response = await fetch(`${API}/attachments/${attachment.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Convert base64 to blob
        const byteCharacters = atob(data.file_data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: data.mime_type });
        
        // Create preview URL
        const url = window.URL.createObjectURL(blob);
        // Deschide în tab nou pentru preview
        window.open(url, '_blank');
        // Nu revoke URL-ul imediat pentru că fișierul poate fi încă în tab
        setTimeout(() => window.URL.revokeObjectURL(url), 1000);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Preview error:', error);
      alert('Failed to preview file: ' + error.message);
    }
  };

  const handleMouseOver = async (file) => {
    setHoveredFile(file);
    setPreviewLoading(true);
    
    try {
      const response = await fetch(`${API}/attachments/${file.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        setPreviewData(data);
      }
    } catch (error) {
      console.error('Preview hover error:', error);
    } finally {
      setPreviewLoading(false);
    }
  };

  const handleMouseLeave = () => {
    setHoveredFile(null);
    setPreviewData(null);
  };

  const handleDelete = async (attachment) => {
    if (!confirm('Are you sure you want to delete this file?')) return;
    
    try {
      const response = await fetch(`${API}/attachments/${attachment.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      if (response.ok) {
        refetch();
        if (onFileDelete) onFileDelete(attachment);
      } else {
        throw new Error('Delete failed');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete file');
    }
  };

  const getFileIcon = (mimeType) => {
    if (mimeType === 'application/pdf') return '📄';
    if (mimeType.includes('excel') || mimeType.includes('spreadsheet')) return '📊';
    if (mimeType.startsWith('image/')) return '🖼️';
    return '📎';
  };

  const renderPreview = () => {
    if (!hoveredFile || !previewData) return null;

    const isImage = previewData.mime_type.startsWith('image/');
    const isPDF = previewData.mime_type === 'application/pdf';
    const isText = previewData.mime_type.startsWith('text/');

    return (
      <>
        {/* Overlay pentru închiderea preview-ului */}
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999
          }}
          onClick={handleMouseLeave}
        />
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--background-primary)',
          border: '2px solid var(--accent-color)',
          borderRadius: '8px',
          padding: '16px',
          maxWidth: '80vw',
          maxHeight: '80vh',
          overflow: 'auto',
          zIndex: 10000,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '8px'
          }}>
            <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>
              {hoveredFile.original_filename}
            </h3>
            <button
              onClick={handleMouseLeave}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: 'var(--text-secondary)'
              }}
            >
              ✕
            </button>
          </div>
          
          <div style={{ flex: 1, overflow: 'auto' }}>
            {previewLoading ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                Loading preview...
              </div>
            ) : isImage ? (
              <img
                src={`data:${previewData.mime_type};base64,${previewData.file_data}`}
                alt={hoveredFile.original_filename}
                style={{
                  maxWidth: '100%',
                  maxHeight: '60vh',
                  objectFit: 'contain'
                }}
              />
            ) : isPDF ? (
              <iframe
                src={`data:${previewData.mime_type};base64,${previewData.file_data}`}
                style={{
                  width: '100%',
                  height: '60vh',
                  border: 'none'
                }}
                title={hoveredFile.original_filename}
              />
            ) : isText ? (
              <pre style={{
                backgroundColor: 'var(--background-secondary)',
                padding: '12px',
                borderRadius: '4px',
                fontSize: '12px',
                overflow: 'auto',
                maxHeight: '60vh',
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word'
              }}>
                {atob(previewData.file_data)}
              </pre>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '20px',
                color: 'var(--text-secondary)'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>
                  {getFileIcon(previewData.mime_type)}
                </div>
                <p>Preview not available for this file type</p>
                <p style={{ fontSize: '12px' }}>
                  {previewData.mime_type} • {(previewData.file_size / 1024 / 1024).toFixed(1)} MB
                </p>
              </div>
            )}
          </div>
          
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '8px'
          }}>
            <button
              onClick={() => handleDownload(hoveredFile)}
              style={{
                padding: '6px 12px',
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Download
            </button>
            <button
              onClick={() => handlePreview(hoveredFile)}
              style={{
                padding: '6px 12px',
                backgroundColor: 'var(--background-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Open Full
            </button>
          </div>
        </div>
      </>
    );
  };



  if (loading) {
    return <div className="file-display-loading">Loading files...</div>;
  }

  if (files.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '15px',
        color: 'var(--text-secondary)',
        fontSize: '14px'
      }}>
        <p style={{ marginBottom: '10px' }}>Nu sunt fișiere atașate</p>
        <FileUpload
          entityType={entityType}
          entityId={entityId}
          onFileUpload={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div style={{ padding: '10px' }}>
      {renderPreview()}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: '500',
        color: 'var(--text-primary)'
      }}>
        <span>Fișiere ({files.length})</span>
        <FileUpload
          entityType={entityType}
          entityId={entityId}
          onFileUpload={() => refetch()}
        />
      </div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        maxHeight: '200px',
        overflowY: 'auto'
      }}>
        {files.map((file) => (
          <div 
            key={file.id} 
            onMouseEnter={() => handleMouseOver(file)}
            onMouseLeave={handleMouseLeave}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              backgroundColor: 'var(--background-secondary)',
              borderRadius: '6px',
              fontSize: '13px',
              border: '1px solid #eee',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              ':hover': {
                backgroundColor: 'var(--accent-color)',
                color: 'white'
              }
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
              <span style={{ fontSize: '16px' }}>{getFileIcon(file.mime_type)}</span>
              <span style={{ 
                fontWeight: '500', 
                color: 'var(--text-primary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '200px'
              }}>
                {file.original_filename}
              </span>
              <span style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '11px',
                whiteSpace: 'nowrap'
              }}>
                ({(file.file_size / 1024 / 1024).toFixed(1)} MB)
              </span>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button 
                onClick={() => handlePreview(file)}
                title="Preview"
                style={{
                  padding: '4px 6px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              >
                👁️
              </button>
              <button 
                onClick={() => handleDownload(file)}
                title="Download"
                style={{
                  padding: '4px 6px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              >
                ⬇️
              </button>
              <button 
                onClick={() => handleDelete(file)}
                title="Delete"
                style={{
                  padding: '4px 6px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#e74c3c'
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



// Component for displaying slot attachments count
const AttachmentIndicator = ({ slotId, onClick }) => {
  const [attachmentCount, setAttachmentCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAttachmentCount = async () => {
    if (!slotId) return;
    setLoading(true);
    try {
      const response = await fetch(`${API}/attachments/slots/${slotId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched attachments for slot', slotId, ':', data);
        // Filtrează doar documentele (nu avatarurile)
        const documentAttachments = data.filter(att => 
          !att.mime_type.startsWith('image/') || 
          (!att.filename.includes('avatar') && !att.filename.includes('custom_avatar'))
        );
        console.log('Document attachments for slot', slotId, ':', documentAttachments);
        setAttachmentCount(documentAttachments.length);
      } else {
        console.error('Failed to fetch attachments for slot', slotId, ':', response.status);
      }
    } catch (error) {
      console.error('Error fetching slot attachments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttachmentCount();
  }, [slotId]);

  return (
    <button 
      className="btn-attachment"
      title="Atașamente"
      onClick={onClick}
      style={{ 
        fontSize: '14px', 
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        gap: '4px',
        cursor: 'pointer',
        border: 'none',
        background: 'transparent'
      }}
    >
      <span style={{fontSize:'1.1em'}}>📎</span>
      {attachmentCount > 0 && (
        <span style={{
          backgroundColor: 'var(--accent-color)',
          color: 'white',
          borderRadius: '50%',
          width: '16px',
          height: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.7em',
          fontWeight: 'bold',
          minWidth: '16px'
        }}>
          {attachmentCount}
        </span>
      )}
    </button>
  );
};

// Custom hook for fetching avatars
const useAvatar = (entityType, entityId) => {
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAvatar = async () => {
    if (!entityType || !entityId) return;
    setLoading(true);
    try {
      let url;
      if (entityType === 'game_mixes') {
        url = `${API}/attachments/game_mixes/${entityId}`;
      } else {
        url = `${API}/attachments/${entityType}/${entityId}`;
      }
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (response.ok) {
        const attachments = await response.json();
        console.log('Fetched attachments for', entityType, entityId, ':', attachments);
        const avatarAttachment = attachments.find(att => 
          att.mime_type.startsWith('image/') && 
          (att.filename.includes('avatar') || att.filename.includes('custom_avatar'))
        );
        console.log('Found avatar attachment:', avatarAttachment);
        setAvatar(avatarAttachment || null);
      }
    } catch (error) {
      console.error('Error fetching avatar:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, [entityType, entityId]);

  return { avatar, setAvatar, loading, refetch: fetchAvatar };
};

// Helper function to generate initials from entity name
const generateInitials = (name, entityType) => {
  console.log('INPUT:', name, '| TYPE:', entityType);
  if (!name || typeof name !== 'string') {
    console.log('GENERATE INITIALS: Invalid input, returning ?');
    return '?';
  }
  // Extrage doar litere și cifre, ignoră simboluri
  const words = name.trim().split(/\s+|-/).filter(Boolean);
  console.log('WORDS:', words);
  
  // Pentru Cabinets: 1 + 5 cu cratimă (prima literă din primul cuvânt + "-" + primele 5 din al doilea)
  if (entityType === 'cabinets' && words.length >= 2) {
    const first = words[0].match(/[A-Za-z]/);
    const second = words[1].match(/[A-Za-z0-9]{1,5}/);
    const result = `${first ? first[0].toUpperCase() : ''}-${second ? second[0].toUpperCase() : ''}` || '?';
    console.log('CABINETS 1+5:', result, '| first:', first?.[0], '| second:', second?.[0]);
    return result;
  }
  
  // Pentru Slots: primele 2 caractere din serial number
  if (entityType === 'slots') {
    const result = name.substring(0, 2).toUpperCase() || '?';
    console.log('SLOTS 2 chars:', result);
    return result;
  }
  
  // Pentru restul: 1 + 2 (prima literă din primul cuvânt + primele 2 din al doilea)
  if (words.length >= 2) {
    const first = words[0].match(/[A-Za-z]/);
    const second = words[1].match(/[A-Za-z0-9]{1,2}/);
    const result = `${first ? first[0].toUpperCase() : ''}${second ? second[0].toUpperCase() : ''}` || '?';
    console.log('DEFAULT 1+2:', result, '| first:', first?.[0], '| second:', second?.[0]);
    return result;
  } else if (words.length === 1) {
    const match = words[0].match(/[A-Za-z0-9]{1,2}/);
    const result = match ? match[0].toUpperCase() : '?';
    console.log('SINGLE WORD:', result, '| match:', match?.[0]);
    return result;
  }
  console.log('GENERATE INITIALS: No words found, returning ?');
  return '?';
};

// Custom Avatar Editor Component
const CustomAvatarEditor = ({ entityType, entityId, currentAvatar, onAvatarChange, entityName }) => {
  const [customText, setCustomText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    if (entityName) {
      setCustomText(generateInitials(entityName, entityType));
    } else {
      setCustomText(generateInitials('Unknown', entityType));
    }
  }, [entityName, entityType]);

  const handleSaveCustomAvatar = async () => {
    if (customText.trim()) {
      try {
        // Creează un canvas pentru a genera avatar-ul personalizat
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;

        // Fundal albastru
        ctx.fillStyle = '#1976d2';
        ctx.fillRect(0, 0, 200, 200);

        // Text alb bold, font adaptiv, shadow pentru contrast
        ctx.font = 'bold 90px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 8;
        const text = customText.substring(0, 8).toUpperCase();
        ctx.fillText(text, 100, 100);
        ctx.shadowBlur = 0;

        // Convertește la base64
        const dataURL = canvas.toDataURL('image/png');
        
        // Creează obiectul avatar pentru upload
        const avatarData = {
          filename: `custom_avatar_${entityType}_${entityId}_${Date.now()}.png`,
          original_filename: `custom_avatar_${entityType}_${entityId}.png`,
          file_size: Math.round((dataURL.length * 3) / 4), // Aproximare dimensiune
          mime_type: 'image/png',
          file_data: dataURL.split(',')[1], // Elimină prefixul data:image/png;base64,
          entity_type: entityType,
          entity_id: entityId
        };

        // Upload la backend
        const response = await fetch(`${API}/attachments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(avatarData)
        });

        if (response.ok) {
          const uploadedAvatar = await response.json();
          onAvatarChange(uploadedAvatar);
          alert('Custom avatar saved successfully!');
        } else {
          throw new Error('Failed to save avatar');
        }
      } catch (error) {
        console.error('Error saving custom avatar:', error);
        alert('Failed to save custom avatar. Please try again.');
      }
      
      setIsEditing(false);
      setShowEditor(false);
    }
  };

  const handleCancel = () => {
    setCustomText(generateInitials(entityName || 'Unknown', entityType));
    setIsEditing(false);
    setShowEditor(false);
  };

  return (
    <div className="custom-avatar-editor">
      <div className="avatar-preview-section">
        <div className="avatar-preview">
          <div
            className="custom-avatar-display"
            style={{
              width: '68px',
              height: '68px',
              background: '#1976d2',
              color: '#ffffff',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              fontSize: '20px', // Font proporțional pentru 68px
              cursor: 'pointer',
              border: '2px solid #ddd',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
            onClick={() => setShowEditor(!showEditor)}
            title="Click to edit custom avatar"
          >
            {customText.substring(0, 8).toUpperCase()}
          </div>
        </div>
        
        <div className="avatar-actions">
          <button
            type="button"
            className="btn-edit-avatar"
            onClick={() => setShowEditor(!showEditor)}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              background: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            ✏️ Edit Custom Avatar
          </button>
        </div>
      </div>

      {showEditor && (
        <div className="avatar-editor-modal">
          <div className="editor-content">
            <h4>Custom Avatar Editor</h4>
            <div className="editor-input">
              <label>Custom Text (max 8 characters):</label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value.substring(0, 8))}
                maxLength={8}
                placeholder="Enter custom text"
                style={{
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  width: '200px'
                }}
              />
            </div>
            
            <div className="editor-preview">
              <h5>Preview:</h5>
              <div
                className="preview-avatar"
                style={{
                  width: '120px',
                  height: '120px',
                  background: '#1976d2',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontSize: '36px', // Font proporțional pentru 120px
                  margin: '10px auto',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
              >
                {customText.substring(0, 8).toUpperCase()}
              </div>
            </div>

            <div className="editor-actions">
              <button
                type="button"
                onClick={handleSaveCustomAvatar}
                style={{
                  padding: '8px 16px',
                  background: '#4caf50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '8px'
                }}
              >
                Save Avatar
              </button>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  padding: '8px 16px',
                  background: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Avatar Display Component (for tables)
const AvatarDisplay = ({ entityType, entityId, size = 50, entityName, rectangular, blueBgIfNoAvatar }) => {
  const { avatar, loading } = useAvatar(entityType, entityId);
  
  console.log('AvatarDisplay render:', { entityType, entityId, entityName, avatar, loading });

  // Game Mixes: avatar dreptunghiular 20x95 sau text pe fundal albastru
  if (entityType === 'game_mixes') {
    const width = 20, height = 95;
    if (loading) {
      return (
        <div className="avatar-display loading rectangular" style={{ width, height }}>
          <div className="spinner-small"></div>
        </div>
      );
    }
    if (avatar) {
      return (
        <img
          src={`data:${avatar.mime_type};base64,${avatar.file_data}`}
          alt="Avatar"
          className="avatar-display rectangular"
          style={{ width, height, objectFit: 'cover' }}
        />
      );
    }
    
    return (
      <div
        className="avatar-display rectangular blue-bg-avatar"
        style={{
          width,
          height,
          background: '#1976d2',
          color: '#fff',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          fontSize: 12,
          whiteSpace: 'normal',
          wordBreak: 'break-word',
          textAlign: 'center',
          padding: '0 4px',
          lineHeight: '1.1',
          overflow: 'visible',
        }}
        title={entityName}
      >
        <span style={{width: '100%', wordBreak: 'break-word', whiteSpace: 'normal'}}>{entityName}</span>
      </div>
    );
  }

  // Restul modulelor: avatar rotund/pătrat 50x50, cu inițiale dacă nu există poză, fundal transparent
  let width = 50, height = 50;
  if (loading) {
    return (
      <div className="avatar-display loading" style={{ width, height }}>
        <div className="spinner-small"></div>
      </div>
    );
  }
  if (avatar) {
    console.log('Rendering avatar image:', avatar);
    return (
      <img
        src={`data:${avatar.mime_type};base64,${avatar.file_data}`}
        alt="Avatar"
        className="avatar-display"
        style={{ width, height, objectFit: 'cover', borderRadius: '50%' }}
      />
    );
  }
  // Inițiale cu fundal albastru pentru toate avatarele editabile
  const initials = generateInitials(entityName || 'Unknown', entityType) || '?';
  console.log('Generated initials:', initials, 'for entity:', entityName, 'type:', entityType);
  
  // Calculează dimensiunea fontului proporțională cu dimensiunea avatar-ului
  const fontSize = Math.max(12, Math.min(width * 0.4, 24)); // Între 12px și 24px, proporțional cu dimensiunea
  
  return (
    <div
      className="avatar-display"
      style={{
        width,
        height,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: `${fontSize}px`, // Font proporțional cu dimensiunea avatar-ului
        color: '#ffffff', // Text alb pentru toate
        background: '#1976d2', // Background albastru pentru toate
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)', // Umbră pentru toate
      }}
      title={entityName}
    >
      {initials}
    </div>
  );
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auto-logout after 15 minutes of inactivity
  useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (user) {
          localStorage.removeItem('token');
          setUser(null);
          alert('You have been logged out due to inactivity.');
        }
      }, 15 * 60 * 1000); // 15 minutes
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

    if (user) {
      // Start timer
      resetTimer();
      
      // Add event listeners for user activity
      events.forEach(event => {
        document.addEventListener(event, resetTimer, true);
      });
    }

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer, true);
      });
    };
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${API}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          if (data.id) {
            setUser(data);
          } else {
            localStorage.removeItem('token');
          }
        })
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (username, password) => {
    const response = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.access_token);
      setUser(data.user);
      return true;
    }
    throw new Error(data.detail || 'Login failed');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// Helper function for entity display names
const getEntityDisplayName = (type) => {
  const names = {
    companies: 'Company',
    locations: 'Location',
    providers: 'Provider',
    cabinets: 'Cabinet',
    slots: 'Slot Machine',
    gamemixes: 'Game Mix',
    invoices: 'Invoice',
    onjn: 'ONJN Report',
    legal: 'Legal Document',
    users: 'User',
    jackpots: 'Jackpot'
  };
  return names[type] || type;
};

// Bulk Edit Form Component
const BulkEditForm = ({ entityType, selectedItems, onSave, onClose, companies, locations, providers, cabinets, gameMixes, slotMachines }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const getCommonFields = (type) => {
    const commonFields = {
      companies: ['name', 'email', 'phone', 'status'],
      locations: ['name', 'address', 'status'], 
      providers: ['email', 'phone', 'status'],
      cabinets: ['status'],
      slots: ['cabinet_id', 'game_mix_id', 'provider_id', 'model', 'serial_number', 'denomination', 'max_bet', 'rtp', 'gaming_places', 'commission_date', 'invoice_number', 'status', 'location_id', 'production_year', 'ownership_type', 'owner_company_id', 'lease_provider_id', 'lease_contract_number'],
      gamemixes: ['status'],
      invoices: ['status'],
      onjn: ['status'],
      legal: ['status'],
      users: ['role', 'is_active'],
                 
      jackpots: ['jackpot_type']
    };
    return commonFields[type] || ['status'];
  };

  const renderField = (field) => {
    switch (field) {
      case 'status':
        // Handle different status options based on entity type
        const getStatusOptions = () => {
          if (entityType === 'invoices') {
            return [
              { value: 'pending', label: 'Pending' },
              { value: 'paid', label: 'Paid' },
              { value: 'overdue', label: 'Overdue' }
            ];
          }
          // Default status options for other entities
          return [
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' }
          ];
        };

        return (
          <div className="form-group" key={field}>
            <label>Status</label>
            <select
              value={formData.status || ''}
              onChange={(e) => handleChange('status', e.target.value)}
            >
              <option value="">Keep unchanged</option>
              {getStatusOptions().map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        );
      case 'role':
        return (
          <div className="form-group" key={field}>
            <label>Role</label>
            <select
              value={formData.role || ''}
              onChange={(e) => handleChange('role', e.target.value)}
            >
              <option value="">Keep unchanged</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="operator">Operator</option>
            </select>
          </div>
        );
      case 'is_active':
        return (
          <div className="form-group" key={field}>
            <label>
              <input
                type="checkbox"
                checked={formData.is_active || false}
                onChange={(e) => handleChange('is_active', e.target.checked)}
              />
              Is Active
            </label>
          </div>
        );
      default:
        // Handle slots specific fields
        if (entityType === 'slots') {
          switch (field) {
            case 'cabinet_id':
              return (
                <div className="form-group" key={field}>
                  <label>Cabinet</label>
                  <select
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                  >
                    <option value="">Keep unchanged</option>
                    {cabinets && cabinets.map(cabinet => (
                      <option key={cabinet.id} value={cabinet.id}>
                        {cabinet.name} - {cabinet.model || 'No Model'}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'game_mix_id':
              return (
                <div className="form-group" key={field}>
                  <label>Game Mix</label>
                  <select
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                  >
                    <option value="">Keep unchanged</option>
                    {gameMixes && gameMixes.map(gameMix => (
                      <option key={gameMix.id} value={gameMix.id}>
                        {gameMix.name} ({gameMix.game_count} games)
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'provider_id':
              return (
                <div className="form-group" key={field}>
                  <label>Provider</label>
                  <select
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                  >
                    <option value="">Keep unchanged</option>
                    {providers && providers.map(provider => (
                      <option key={provider.id} value={provider.id}>
                        {provider.company_name}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'location_id':
              return (
                <div className="form-group" key={field}>
                  <label>Location</label>
                  <select
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                  >
                    <option value="">Keep unchanged</option>
                    {locations && locations.map(location => (
                      <option key={location.id} value={location.id}>
                        {location.name} - {location.city}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'ownership_type':
              return (
                <div className="form-group" key={field}>
                  <label>Ownership Type</label>
                  <select
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                  >
                    <option value="">Keep unchanged</option>
                    <option value="property">Property</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
              );
            case 'owner_company_id':
              return (
                <div className="form-group" key={field}>
                  <label>Owner Company</label>
                  <select
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                  >
                    <option value="">Keep unchanged</option>
                    {companies && companies.map(company => (
                      <option key={company.id} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'lease_provider_id':
              return (
                <div className="form-group" key={field}>
                  <label>Lease Provider</label>
                  <select
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                  >
                    <option value="">Keep unchanged</option>
                    {providers && providers.map(provider => (
                      <option key={provider.id} value={provider.id}>
                        {provider.company_name}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'denomination':
            case 'max_bet':
            case 'rtp':
              return (
                <div className="form-group" key={field}>
                  <label>{field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, parseFloat(e.target.value))}
                    placeholder={`Enter new ${field.replace('_', ' ')} (leave empty to keep unchanged)`}
                  />
                </div>
              );
            case 'gaming_places':
            case 'production_year':
              return (
                <div className="form-group" key={field}>
                  <label>{field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</label>
                  <input
                    type="number"
                    min="1"
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, parseInt(e.target.value))}
                    placeholder={`Enter new ${field.replace('_', ' ')} (leave empty to keep unchanged)`}
                  />
                </div>
              );
            case 'commission_date':
              return (
                <div className="form-group" key={field}>
                  <label>Commission Date</label>
                  <Calendar
                    value={formData[field] || ''}
                    onChange={(date) => handleChange(field, date)}
                    placeholder="Select new commission date (leave empty to keep unchanged)"
                  />
                </div>
              );
            case 'model':
            case 'serial_number':
            case 'invoice_number':
            case 'lease_contract_number':
              return (
                <div className="form-group" key={field}>
                  <label>{field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</label>
                  <input
                    type="text"
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={`Enter new ${field.replace('_', ' ')} (leave empty to keep unchanged)`}
                  />
                </div>
              );
            default:
              return (
                <div className="form-group" key={field}>
                  <label>{field.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</label>
                  <input
                    type="text"
                    value={formData[field] || ''}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={`Enter new ${field.replace('_', ' ')} (leave empty to keep unchanged)`}
                  />
                </div>
              );
          }
        }
        
        // Handle other entity types
        return (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field.includes('email') ? 'email' : 'text'}
              value={formData[field] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Enter new ${field} (leave empty to keep unchanged)`}
            />
          </div>
        );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content bulk-edit-modal">
        <h2>Bulk Edit {getEntityDisplayName(entityType)}</h2>
        <p>Editing {selectedItems.length} items. Only filled fields will be updated.</p>
        <form onSubmit={handleSubmit} className="bulk-edit-form">
          {getCommonFields(entityType).map(field => renderField(field))}
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Update {selectedItems.length} Items
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();

  // Load saved credentials on component mount
  useEffect(() => {
    const savedCredentials = localStorage.getItem('savedCredentials');
    if (savedCredentials) {
      const { username: savedUsername, password: savedPassword } = JSON.parse(savedCredentials);
      setUsername(savedUsername || '');
      setPassword(savedPassword || '');
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(username, password);
      
      // Save credentials if remember me is checked
      if (rememberMe) {
        localStorage.setItem('savedCredentials', JSON.stringify({
          username: username,
          password: password
        }));
      } else {
        // Remove saved credentials if remember me is unchecked
        localStorage.removeItem('savedCredentials');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <img 
          src="https://images.unsplash.com/photo-1563753159011-f1d8b8272c8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkYXNoYm9hcmR8ZW58MHx8fGJsYWNrfDE3NTIxNDI5NTZ8MA&ixlib=rb-4.1.0&q=85"
          alt="Professional dashboard"
          className="login-bg-image"
        />
        <div className="login-overlay"></div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <h1>CASHPOT</h1>
          <p>Gaming Industry Management System</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label className="remember-me-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="remember-me-checkbox"
              />
              <span className="remember-me-text">Remember my password</span>
            </label>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Demo Admin: admin / password</p>
          <p>Contact your administrator for access</p>
        </div>
      </div>
    </div>
  );
};

// Generic Entity Form Component
const EntityForm = ({ entityType, entity, onSave, onClose, companies, locations, providers, cabinets, gameMixes, invoices, users, slotMachines }) => {
  const [formData, setFormData] = useState({});
  
  // Avatar state
  const { avatar, setAvatar } = useAvatar(entityType, entity?.id);
  
  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
  };

  useEffect(() => {
    // Initialize form data based on entity type
    if (entity) {
      setFormData(entity);
    } else {
      setFormData(getDefaultFormData(entityType));
    }
  }, [entity, entityType]);

  const getDefaultFormData = (type) => {
    const defaults = {
      companies: {
        name: '',
        registration_number: '',
        tax_id: '',
        address: '',
        phone: '',
        email: '',
        website: '',
        contact_person: ''
      },
      locations: {
        name: '',
        address: '',
        city: '',
        county: '',
        country: 'Romania',
        postal_code: '',
        company_id: '',
        manager_id: '',
        manager_phone: '',
        manager_email: '',
        contact_person_type: 'manual',
        contact_person_id: '',
        contact_person: '',
        contact_email: '',
        contact_phone: ''
      },
      providers: {
        name: '',
        company_name: '',
        contact_person: '',
        email: '',
        phone: '',
        address: '',
        website: ''
      },
      cabinets: {
        name: '',
        model: '',
        provider_id: ''
      },
      slots: {
        cabinet_id: '',
        game_mix_id: '',
        provider_id: '',
        model: '',
        production_year: new Date().getFullYear(),
        location_id: '',
        ownership_type: '',
        owner_company_id: '',
        lease_provider_id: '',
        serial_number: '',
        denomination: 0.10,
        max_bet: 100.00,
        rtp: 95.00,
        gaming_places: 1,
        commission_date: '',
        invoice_number: ''
      },
      gamemixes: {
        name: '',
        description: '',
        provider_id: '',
        games: []
      },
      invoices: {
        invoice_number: '',
        company_id: '',
        location_id: '',
        serial_numbers: '',
        issue_date: new Date().toISOString().split('T')[0],
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        amount: 0,
        currency: 'EUR',
        status: 'pending',
        description: ''
      },
      onjn: {
        report_number: '',
        report_type: 'monthly',
        company_id: '',
        location_id: '',
        report_date: '',
        equipment_data: {}
      },
      legal: {
        title: '',
        document_type: 'license',
        company_id: '',
        location_id: '',
        issue_date: '',
        issuing_authority: '',
        description: ''
      },
      metrology: {
        serial_number: '',
        certificate_number: '',
        certificate_type: 'calibration',
        issue_date: new Date().toISOString().split('T')[0],
        issuing_authority: '',
        cvt_type: 'periodic',
        cvt_expiry_date: '',
        status: 'active',
        description: ''
      },
      jackpots: {
        serial_numbers: '',
        jackpot_name: '',
        jackpot_type: 'progressive',
        increment_percentage: 0.1,
        level_1: '',
        level_2: '',
        level_3: '',
        level_4: '',
        level_5: '',
        details: ''
      }
    };
    return defaults[type] || {};
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // If provider changes in slots form, reset cabinet and game mix selection
      if (entityType === 'slots' && field === 'provider_id') {
        newData.cabinet_id = '';
        newData.game_mix_id = '';
        newData.model = ''; // Reset model when provider changes
      }
      
      // If cabinet changes in slots form, auto-fill model from selected cabinet
      if (entityType === 'slots' && field === 'cabinet_id' && value) {
        const selectedCabinet = cabinets.find(cabinet => cabinet.id === value);
        if (selectedCabinet) {
          newData.model = selectedCabinet.model || `${selectedCabinet.name} Model`;
        } else {
          newData.model = '';
        }
      }
      
      // If manager changes in locations form, auto-fill phone and email
      if (entityType === 'locations' && field === 'manager_id') {
        if (value) {
          const selectedManager = users.find(user => user.id === value);
          if (selectedManager) {
            newData.manager_phone = selectedManager.phone || '';
            newData.manager_email = selectedManager.email || '';
          }
        } else {
          // Clear manager details if no manager is selected
          newData.manager_phone = '';
          newData.manager_email = '';
        }
      }
      
      // If contact person changes in locations form, auto-fill contact details
      if (entityType === 'locations' && field === 'contact_person_id') {
        if (value) {
          const selectedContact = users.find(user => user.id === value);
          if (selectedContact) {
            newData.contact_person = `${selectedContact.first_name || ''} ${selectedContact.last_name || ''}`.trim() || selectedContact.username;
            newData.contact_email = selectedContact.email || '';
            newData.contact_phone = selectedContact.phone || '';
          }
        } else {
          // Clear contact details if no contact person is selected
          newData.contact_person = '';
          newData.contact_email = '';
          newData.contact_phone = '';
        }
      }
      
      return newData;
    });
  };

  const handleGamesChange = (games) => {
    const gameArray = games.split('\n').filter(game => game.trim());
    setFormData(prev => ({ ...prev, games: gameArray }));
  };

  const renderFormFields = () => {
    switch (entityType) {
      case 'companies':
        return (
          <>
            <div className="form-group">
              <label>Company Name *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Registration Number *</label>
              <input
                type="text"
                value={formData.registration_number || ''}
                onChange={(e) => handleChange('registration_number', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Tax ID *</label>
              <input
                type="text"
                value={formData.tax_id || ''}
                onChange={(e) => handleChange('tax_id', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                value={formData.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>📞 Phone *</label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>📧 Email *</label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                type="url"
                value={formData.website || ''}
                onChange={(e) => handleChange('website', e.target.value)}
              />
            </div>
            {entity && (
              <>
              <div className="form-group">
                <label>Company Logo</label>
                <div className="avatar-section">
                  <AvatarUpload
                    entityType="companies"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                  />
                </div>
                <div className="form-group">
                  <label>Custom Avatar Editor</label>
                  <CustomAvatarEditor
                    entityType="companies"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                    entityName={formData.name}
                  />
                </div>
              </div>
                <div className="form-group">
                  <label>Company Documents</label>
                  <FileUpload
                    entityType="companies"
                    entityId={entity.id}
                    onFileUpload={() => fetchFiles && fetchFiles()}
                  />
                  <FileDisplay
                    entityType="companies"
                    entityId={entity.id}
                  />
                </div>
              </>
            )}
          </>
        );

      case 'locations':
        return (
          <>
            <div className="form-group">
              <label>Location Name *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Company *</label>
              <select
                value={formData.company_id || ''}
                onChange={(e) => handleChange('company_id', e.target.value)}
                required
              >
                <option value="">Select Company</option>
                {companies.map(company => (
                  <option key={company.id} value={company.id}>{company.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                value={formData.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                value={formData.city || ''}
                onChange={(e) => handleChange('city', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>County *</label>
              <input
                type="text"
                value={formData.county || ''}
                onChange={(e) => handleChange('county', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                value={formData.country || 'Romania'}
                onChange={(e) => handleChange('country', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Postal Code *</label>
              <input
                type="text"
                value={formData.postal_code || ''}
                onChange={(e) => handleChange('postal_code', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Manager</label>
              <select
                value={formData.manager_id || ''}
                onChange={(e) => handleChange('manager_id', e.target.value)}
              >
                <option value="">Select Manager</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.first_name && user.last_name ? 
                      `${user.first_name} ${user.last_name}` : 
                      user.username} - {user.email}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Manager Phone</label>
              <input
                type="text"
                value={formData.manager_phone || ''}
                onChange={(e) => handleChange('manager_phone', e.target.value)}
                placeholder="Auto-populated when manager is selected"
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Manager Email</label>
              <input
                type="email"
                value={formData.manager_email || ''}
                onChange={(e) => handleChange('manager_email', e.target.value)}
                placeholder="Auto-populated when manager is selected"
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Contact Person Type</label>
              <select
                value={formData.contact_person_type || 'manual'}
                onChange={(e) => handleChange('contact_person_type', e.target.value)}
              >
                <option value="manual">Manual Entry</option>
                <option value="user">Select from Users</option>
              </select>
            </div>
            {formData.contact_person_type === 'user' ? (
              <div className="form-group">
                <label>Contact Person (User)</label>
                <select
                  value={formData.contact_person_id || ''}
                  onChange={(e) => handleChange('contact_person_id', e.target.value)}
                >
                  <option value="">Select User</option>
                  {users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.first_name && user.last_name ? 
                        `${user.first_name} ${user.last_name}` : 
                        user.username} - {user.email}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Contact Person Name</label>
                  <input
                    type="text"
                    value={formData.contact_person || ''}
                    onChange={(e) => handleChange('contact_person', e.target.value)}
                    placeholder="Enter contact person name"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Person Email</label>
                  <input
                    type="email"
                    value={formData.contact_email || ''}
                    onChange={(e) => handleChange('contact_email', e.target.value)}
                    placeholder="Enter contact person email"
                  />
                </div>
                <div className="form-group">
                  <label>Contact Person Phone</label>
                  <input
                    type="tel"
                    value={formData.contact_phone || ''}
                    onChange={(e) => handleChange('contact_phone', e.target.value)}
                    placeholder="Enter contact person phone"
                  />
                </div>
              </>
            )}
            {entity && (
              <>
              <div className="form-group">
                <label>Location Avatar</label>
                <CustomAvatarEditor
                  entityType="locations"
                  entityId={entity.id}
                  currentAvatar={avatar}
                  onAvatarChange={handleAvatarChange}
                  entityName={formData.name}
                />
              </div>
                <div className="form-group">
                  <label>Location Documents</label>
                  <FileUpload
                    entityType="locations"
                    entityId={entity.id}
                    onFileUpload={() => fetchFiles && fetchFiles()}
                  />
                  <FileDisplay
                    entityType="locations"
                    entityId={entity.id}
                  />
                </div>
              </>
            )}
          </>
        );

      case 'providers':
        return (
          <>
            <div className="form-group">
              <label>Provider Name *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Company Name *</label>
              <input
                type="text"
                value={formData.company_name || ''}
                onChange={(e) => handleChange('company_name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact Person *</label>
              <input
                type="text"
                value={formData.contact_person || ''}
                onChange={(e) => handleChange('contact_person', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>📧 Email *</label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>📞 Phone *</label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                value={formData.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                type="url"
                value={formData.website || ''}
                onChange={(e) => handleChange('website', e.target.value)}
              />
            </div>
            {entity && (
              <div className="form-group">
                <label>Provider Logo</label>
                <div className="avatar-section">
                  <AvatarUpload
                    entityType="providers"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                  />
                </div>
              </div>
            )}
          </>
        );

      case 'cabinets':
        return (
          <>
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Model</label>
              <input
                type="text"
                value={formData.model || ''}
                onChange={(e) => handleChange('model', e.target.value)}
                placeholder="Optional model name"
              />
            </div>
            <div className="form-group">
              <label>Provider *</label>
              <select
                value={formData.provider_id || ''}
                onChange={(e) => handleChange('provider_id', e.target.value)}
                required
              >
                <option value="">Select Provider</option>
                {providers.map(provider => (
                  <option key={provider.id} value={provider.id}>{provider.name}</option>
                ))}
              </select>
            </div>
            {entity && (
              <div className="form-group">
                <label>Cabinet Logo</label>
                <div className="avatar-section">
                  <AvatarUpload
                    entityType="cabinets"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                  />
                </div>
                <div className="form-group">
                  <label>Custom Avatar Editor</label>
                  <CustomAvatarEditor
                    entityType="cabinets"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                    entityName={formData.name}
                  />
                </div>
              </div>
            )}
          </>
        );

      case 'slots':
        return (
          <>
            <div className="form-group">
              <label>Provider *</label>
              <select
                value={formData.provider_id || ''}
                onChange={(e) => handleChange('provider_id', e.target.value)}
                required
              >
                <option value="">Select Provider</option>
                {providers.map(provider => (
                  <option key={provider.id} value={provider.id}>{provider.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Cabinet *</label>
              <select
                value={formData.cabinet_id || ''}
                onChange={(e) => handleChange('cabinet_id', e.target.value)}
                required
              >
                <option value="">Select Cabinet</option>
                {cabinets
                  .filter(cabinet => {
                    // Show all cabinets if no provider selected
                    if (!formData.provider_id) return true;
                    // Show only cabinets that match the selected provider
                    return cabinet.provider_id === formData.provider_id;
                  })
                  .map(cabinet => {
                    const provider = providers.find(p => p.id === cabinet.provider_id);
                    return (
                      <option key={cabinet.id} value={cabinet.id}>
                        {cabinet.name} ({provider ? provider.name : 'Unknown Provider'})
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="form-group">
              <label>Game Mix *</label>
              <select
                value={formData.game_mix_id || ''}
                onChange={(e) => handleChange('game_mix_id', e.target.value)}
                required
              >
                <option value="">Select Game Mix</option>
                {gameMixes
                  .filter(mix => {
                    // Show all game mixes if no provider selected
                    if (!formData.provider_id) return true;
                    // Show only game mixes that match the selected provider
                    return mix.provider_id === formData.provider_id;
                  })
                  .map(mix => {
                    const provider = providers.find(p => p.id === mix.provider_id);
                    return (
                      <option key={mix.id} value={mix.id}>
                        {mix.name} ({provider ? provider.name : 'Unknown Provider'})
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="form-group">
              <label>Serial Number *</label>
              <input
                type="text"
                value={formData.serial_number || ''}
                onChange={(e) => handleChange('serial_number', e.target.value)}
                required
                placeholder="e.g., SER001"
              />
              <small className="field-help">Enter the unique serial number for this slot machine</small>
            </div>
            <div className="form-group">
              <label>Invoice Number</label>
              <select
                value={formData.invoice_number || ''}
                onChange={(e) => handleChange('invoice_number', e.target.value)}
              >
                <option value="">Select Invoice</option>
                {invoices.map(invoice => (
                  <option key={invoice.id} value={invoice.invoice_number}>
                    {invoice.invoice_number} - {invoice.amount}€
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Model *</label>
              <input
                type="text"
                value={formData.model || ''}
                readOnly
                required
                placeholder="Auto-filled from selected cabinet"
              />
              <small className="field-help">Model is automatically filled based on the selected cabinet</small>
            </div>
            <div className="form-group">
              <label>Production Year *</label>
              <input
                type="number"
                min="1980"
                max={new Date().getFullYear()}
                value={formData.production_year || ''}
                onChange={(e) => handleChange('production_year', parseInt(e.target.value))}
                required
                placeholder="e.g., 2023"
              />
            </div>
            <div className="form-group">
              <label>Location *</label>
              <select
                value={formData.location_id || ''}
                onChange={(e) => handleChange('location_id', e.target.value)}
                required
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Ownership Type *</label>
              <select
                value={formData.ownership_type || ''}
                onChange={(e) => handleChange('ownership_type', e.target.value)}
                required
              >
                <option value="">Select Ownership Type</option>
                <option value="property">Property (Owned)</option>
                <option value="rent">Rent (Leased)</option>
              </select>
            </div>
            {formData.ownership_type === 'property' && (
              <div className="form-group">
                <label>Owner Company *</label>
                <select
                  value={formData.owner_company_id || ''}
                  onChange={(e) => handleChange('owner_company_id', e.target.value)}
                  required
                >
                  <option value="">Select Owner Company</option>
                  {companies.map(company => (
                    <option key={company.id} value={company.id}>{company.name}</option>
                  ))}
                </select>
              </div>
            )}
            {formData.ownership_type === 'rent' && (
              <>
                <div className="form-group">
                  <label>Lease Provider *</label>
                  <select
                    value={formData.lease_provider_id || ''}
                    onChange={(e) => handleChange('lease_provider_id', e.target.value)}
                    required
                  >
                    <option value="">Select Lease Provider</option>
                    {providers.map(provider => (
                      <option key={provider.id} value={provider.id}>{provider.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Lease Contract Number *</label>
                  <input
                    type="text"
                    value={formData.lease_contract_number || ''}
                    onChange={(e) => handleChange('lease_contract_number', e.target.value)}
                    required
                    placeholder="e.g., LC-2024-001"
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label>Denomination (€) *</label>
              <input
                type="number"
                step="0.01"
                value={formData.denomination || ''}
                onChange={(e) => handleChange('denomination', parseFloat(e.target.value))}
                required
              />
            </div>
            <div className="form-group">
              <label>Max Bet (€) *</label>
              <input
                type="number"
                step="0.01"
                value={formData.max_bet || ''}
                onChange={(e) => handleChange('max_bet', parseFloat(e.target.value))}
                required
              />
            </div>
            <div className="form-group">
              <label>RTP (%) *</label>
              <input
                type="number"
                step="0.01"
                value={formData.rtp || ''}
                onChange={(e) => handleChange('rtp', parseFloat(e.target.value))}
                required
              />
            </div>
            <div className="form-group">
              <label>Gaming Places *</label>
              <input
                type="number"
                value={formData.gaming_places || ''}
                onChange={(e) => handleChange('gaming_places', parseInt(e.target.value))}
                required
              />
            </div>
            <div className="form-group">
              <label>Commission Date</label>
              <Calendar
                value={formData.commission_date}
                onChange={(date) => handleChange('commission_date', date)}
                placeholder="Select commission date"
              />
            </div>
            {entity && (
              <>
              <div className="form-group">
                <label>Slot Machine Avatar</label>
                <div className="avatar-section">
                  <AvatarUpload
                    entityType="slots"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                  />
                </div>
                <div className="form-group">
                  <label>Custom Avatar Editor</label>
                  <CustomAvatarEditor
                    entityType="slots"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                    entityName={formData.serial_number}
                  />
                </div>
              </div>
                <div className="form-group">
                  <label>Slot Machine Documents</label>
                  <FileUpload
                    entityType="slots"
                    entityId={entity.id}
                    onFileUpload={() => {}}
                  />
                  <FileDisplay
                    entityType="slots"
                    entityId={entity.id}
                  />
                </div>
              </>
            )}
          </>
        );

      case 'gamemixes':
        return (
          <>
            <div className="form-group">
              <label>Mix Name *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                required
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Provider *</label>
              <select
                value={formData.provider_id || ''}
                onChange={(e) => handleChange('provider_id', e.target.value)}
                required
              >
                <option value="">Select Provider</option>
                {providers.map(provider => (
                  <option key={provider.id} value={provider.id}>{provider.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Games (one per line) *</label>
              <textarea
                value={(formData.games || []).join('\n')}
                onChange={(e) => handleGamesChange(e.target.value)}
                required
                rows="8"
                placeholder="Enter game names, one per line"
              />
            </div>
            {entity && (
              <div className="form-group">
                <label>Game Mix Avatar</label>
                <div className="avatar-section">
                  <AvatarUpload
                    entityType="game_mixes"
                    entityId={entity.id}
                    currentAvatar={avatar}
                    onAvatarChange={handleAvatarChange}
                  />
                </div>
              </div>
            )}
          </>
        );

      case 'invoices':
        return (
          <>
            <div className="form-group">
              <label>Invoice Number *</label>
              <input
                type="text"
                value={formData.invoice_number || ''}
                onChange={(e) => handleChange('invoice_number', e.target.value)}
                required
                placeholder="e.g., INV-2025-001"
              />
            </div>
            <div className="form-group">
              <label>Location *</label>
              <select
                value={formData.location_id || ''}
                onChange={(e) => handleChange('location_id', e.target.value)}
                required
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Buyer</label>
              <select
                value={formData.buyer_id || ''}
                onChange={(e) => handleChange('buyer_id', e.target.value)}
              >
                <option value="">Select Buyer (Company)</option>
                {companies.map(company => (
                  <option key={company.id} value={company.id}>{company.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Seller</label>
              <select
                value={formData.seller_id || ''}
                onChange={(e) => handleChange('seller_id', e.target.value)}
              >
                <option value="">Select Seller (Provider)</option>
                {providers.map(provider => (
                  <option key={provider.id} value={provider.id}>{provider.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Serial Numbers *</label>
              <input
                type="text"
                value={formData.serial_numbers || ''}
                onChange={(e) => handleChange('serial_numbers', e.target.value)}
                required
                placeholder="e.g., SER001 SER002 SER003 (space separated)"
              />
              <small className="field-help">Enter one or multiple serial numbers separated by spaces</small>
            </div>
            <div className="form-group">
              <label>Issue Date *</label>
              <Calendar
                value={formData.issue_date}
                onChange={(date) => handleChange('issue_date', date)}
                placeholder="Select issue date"
              />
            </div>
            <div className="form-group">
              <label>Due Date *</label>
              <Calendar
                value={formData.due_date}
                onChange={(date) => handleChange('due_date', date)}
                placeholder="Select due date"
              />
            </div>
            <div className="form-group">
              <label>Amount (€) *</label>
              <input
                type="number"
                step="0.01"
                value={formData.amount || ''}
                onChange={(e) => handleChange('amount', parseFloat(e.target.value))}
                required
                placeholder="0.00"
              />
            </div>
            <div className="form-group">
              <label>Currency</label>
              <select
                value={formData.currency || 'EUR'}
                onChange={(e) => handleChange('currency', e.target.value)}
              >
                <option value="EUR">EUR (€)</option>
                <option value="RON">RON (Lei)</option>
                <option value="USD">USD ($)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status || 'pending'}
                onChange={(e) => handleChange('status', e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                required
                rows="3"
                placeholder="Invoice description or notes"
              />
            </div>
          </>
        );

      case 'metrology':
        return (
          <>
            <div className="form-group">
              <label>Serial Numbers *</label>
              <textarea 
                value={formData.serial_number || ''} 
                onChange={(e) => handleChange('serial_number', e.target.value)} 
                required 
                placeholder="Enter serial numbers separated by space (e.g., 188686 2547364 100393)"
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Certificate Number *</label>
              <input type="text" value={formData.certificate_number || ''} onChange={(e) => handleChange('certificate_number', e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Certificate Type *</label>
              <select value={formData.certificate_type || ''} onChange={(e) => handleChange('certificate_type', e.target.value)} required>
                <option value="">Select Type</option>
                <option value="calibration">Calibration</option>
                <option value="verification">Verification</option>
                <option value="certification">Certification</option>
              </select>
            </div>
            <div className="form-group">
              <label>Issue Date *</label>
              <Calendar value={formData.issue_date} onChange={(date) => handleChange('issue_date', date)} />
            </div>
            
            <div className="form-group">
              <label>Issuing Authority *</label>
              <input type="text" value={formData.issuing_authority || ''} onChange={(e) => handleChange('issuing_authority', e.target.value)} required />
            </div>


            <div className="form-group">
              <label>CVT Type</label>
              <select value={formData.cvt_type || ''} onChange={(e) => handleChange('cvt_type', e.target.value)}>
                <option value="">Select CVT Type</option>
                <option value="periodic">Periodic</option>
                <option value="reparation">Reparation</option>
              </select>
            </div>
            <div className="form-group">
              <label>CVT End Date</label>
              <Calendar value={formData.cvt_expiry_date} onChange={(date) => handleChange('cvt_expiry_date', date)} />
            </div>
            <div className="form-group">
              <label>Description *</label>
              <textarea value={formData.description || ''} onChange={(e) => handleChange('description', e.target.value)} required rows="3" />
            </div>
            {entity && (
              <div className="form-group">
                <label>Metrology Documents</label>
                <FileUpload entityType="metrology" entityId={entity.id} onFileUpload={() => fetchFiles && fetchFiles()} />
                <FileDisplay entityType="metrology" entityId={entity.id} />
              </div>
            )}
          </>
        );

      case 'jackpots':
        return (
          <>
            <div className="form-group">
              <label>Serial Numbers *</label>
              <textarea
                value={formData.serial_numbers || ''}
                onChange={(e) => handleChange('serial_numbers', e.target.value)}
                rows="3"
                placeholder="Enter serial numbers separated by spaces or new lines"
                required
              />
            </div>
            <div className="form-group">
              <label>Jackpot Name *</label>
              <input
                type="text"
                value={formData.jackpot_name || ''}
                onChange={(e) => handleChange('jackpot_name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Jackpot Type *</label>
              <select
                value={formData.jackpot_type || 'progressive'}
                onChange={(e) => handleChange('jackpot_type', e.target.value)}
                required
              >
                <option value="progressive">Progressive</option>
                <option value="mystery">Mystery</option>
              </select>
            </div>
            <div className="form-group">
              <label>Increment Percentage *</label>
              <input
                type="number"
                step="0.1"
                value={formData.increment_percentage || 0.1}
                onChange={(e) => handleChange('increment_percentage', parseFloat(e.target.value))}
                required
              />
            </div>
            <div className="form-group">
              <label>Level 1</label>
              <input
                type="text"
                value={formData.level_1 || ''}
                onChange={(e) => handleChange('level_1', e.target.value)}
                placeholder="e.g., 111-222"
              />
            </div>
            <div className="form-group">
              <label>Level 2</label>
              <input
                type="text"
                value={formData.level_2 || ''}
                onChange={(e) => handleChange('level_2', e.target.value)}
                placeholder="e.g., 222-333"
              />
            </div>
            <div className="form-group">
              <label>Level 3</label>
              <input
                type="text"
                value={formData.level_3 || ''}
                onChange={(e) => handleChange('level_3', e.target.value)}
                placeholder="e.g., 333-555"
              />
            </div>
            <div className="form-group">
              <label>Level 4</label>
              <input
                type="text"
                value={formData.level_4 || ''}
                onChange={(e) => handleChange('level_4', e.target.value)}
                placeholder="e.g., 555-888"
              />
            </div>
            <div className="form-group">
              <label>Level 5</label>
              <input
                type="text"
                value={formData.level_5 || ''}
                onChange={(e) => handleChange('level_5', e.target.value)}
                placeholder="e.g., 888-999"
              />
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea
                value={formData.details || ''}
                onChange={(e) => handleChange('details', e.target.value)}
                rows="3"
                placeholder="Additional details about the jackpot"
              />
            </div>
          </>
        );

      default:
        return <div>Form not implemented for {entityType}</div>;
    }
  };

  const getTitle = () => {
    const titles = {
      companies: 'Company',
      locations: 'Location',
      providers: 'Provider',
      cabinets: 'Cabinet',
      slots: 'Slot Machine',
      gamemixes: 'Game Mix',
      invoices: 'Invoice',
      onjn: 'ONJN Report',
      legal: 'Legal Document',
      metrology: 'Metrology',
      jackpots: 'Jackpot'
    };
    return titles[entityType] || 'Entity';
  };

  return (
    <div className="user-edit-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{entity ? `Edit ${getTitle()}` : `Create ${getTitle()}`}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-section">
            <div className="form-grid">
              {renderFormFields()}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-save">
              {entity ? `Update ${getTitle()}` : `Create ${getTitle()}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// User Edit Form Component
const UserEditForm = ({ user, onSave, onClose, companies, locations }) => {
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    role: user?.role || 'operator',
    password: '',
    is_active: user?.is_active !== false,
    assigned_locations: user?.assigned_locations || [],
    permissions: {
      modules: {
        dashboard: true,
        companies: true,
        locations: true,
        providers: true,
        cabinets: true,
        game_mixes: true,
        slot_machines: true,
        invoices: true,
        onjn_reports: true,
        legal_documents: true,
        metrology: true,
        jackpots: true,
        users: true
      },
      actions: {
        companies: { create: true, read: true, update: true, delete: true },
        locations: { create: true, read: true, update: true, delete: true },
        providers: { create: true, read: true, update: true, delete: true },
        cabinets: { create: true, read: true, update: true, delete: true },
        game_mixes: { create: true, read: true, update: true, delete: true },
        slot_machines: { create: true, read: true, update: true, delete: true },
        invoices: { create: true, read: true, update: true, delete: true },
        onjn_reports: { create: true, read: true, update: true, delete: true },
        legal_documents: { create: true, read: true, update: true, delete: true },
        metrology: { create: true, read: true, update: true, delete: true },
        jackpots: { create: true, read: true, update: true, delete: true },
        users: { create: true, read: true, update: true, delete: true }
      },
      accessible_companies: user?.permissions?.accessible_companies || [],
      accessible_locations: user?.permissions?.accessible_locations || []
    }
  });

  // Avatar state
  const { avatar, setAvatar } = useAvatar('users', user?.id);

  const handleAvatarChange = (newAvatar) => {
    setAvatar(newAvatar);
  };

  useEffect(() => {
    if (user?.permissions) {
      setFormData(prev => ({
        ...prev,
        permissions: {
          modules: { ...prev.permissions.modules, ...user.permissions.modules },
          actions: { ...prev.permissions.actions, ...user.permissions.actions },
          accessible_companies: user.permissions.accessible_companies || [],
          accessible_locations: user.permissions.accessible_locations || []
        }
      }));
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleModuleChange = (module, checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        modules: {
          ...prev.permissions.modules,
          [module]: checked
        }
      }
    }));
  };

  const handleActionChange = (module, action, checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        actions: {
          ...prev.permissions.actions,
          [module]: {
            ...prev.permissions.actions[module],
            [action]: checked
          }
        }
      }
    }));
  };

  const handleCompanyChange = (companyId, checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        accessible_companies: checked 
          ? [...prev.permissions.accessible_companies, companyId]
          : prev.permissions.accessible_companies.filter(id => id !== companyId)
      }
    }));
  };

  const handleLocationChange = (locationId, checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        accessible_locations: checked 
          ? [...prev.permissions.accessible_locations, locationId]
          : prev.permissions.accessible_locations.filter(id => id !== locationId)
      },
      assigned_locations: checked 
        ? [...prev.assigned_locations, locationId]
        : prev.assigned_locations.filter(id => id !== locationId)
    }));
  };

  // Select All functions
  const handleSelectAllModules = (checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        modules: modules.reduce((acc, module) => {
          acc[module.key] = checked;
          return acc;
        }, {})
      }
    }));
  };

  const handleSelectAllActions = (checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        actions: modules.filter(m => m.key !== 'dashboard').reduce((acc, module) => {
          acc[module.key] = actions.reduce((actionAcc, action) => {
            actionAcc[action.key] = checked;
            return actionAcc;
          }, {});
          return acc;
        }, {})
      }
    }));
  };

  const handleSelectAllCompanies = (checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        accessible_companies: checked ? companies.map(c => c.id) : []
      }
    }));
  };

  const handleSelectAllLocations = (checked) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        accessible_locations: checked ? locations.map(l => l.id) : []
      }
    }));
  };

  const modules = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'companies', label: 'Companies', icon: '🏢' },
    { key: 'locations', label: 'Locations', icon: '📍' },
    { key: 'providers', label: 'Providers', icon: '🎮' },
    { key: 'cabinets', label: 'Cabinets', icon: '🎰' },
    { key: 'game_mixes', label: 'Game Mixes', icon: '🎲' },
    { key: 'slot_machines', label: 'Slot Machines', icon: '🎯' },
    { key: 'invoices', label: 'Invoices', icon: '💰' },
    { key: 'onjn_reports', label: 'ONJN Reports', icon: '📋' },
    { key: 'legal_documents', label: 'Legal Documents', icon: '📄' },
    { key: 'users', label: 'Users', icon: '👥' }
  ];

  const actions = [
    { key: 'create', label: 'Create', icon: '➕' },
    { key: 'read', label: 'Read', icon: '👁️' },
    { key: 'update', label: 'Update', icon: '✏️' },
    { key: 'delete', label: 'Delete', icon: '🗑️' }
  ];

  return (
    <div className="user-edit-modal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{user ? 'Edit User' : 'Create User'}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="user-form">
          {/* Basic User Information */}
          <div className="form-section">
            <h3>User Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>📧 Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={formData.first_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, first_name: e.target.value }))}
                  placeholder="Enter first name"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={formData.last_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, last_name: e.target.value }))}
                  placeholder="Enter last name"
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="operator">Operator</option>
                </select>
              </div>
              <div className="form-group">
                <label>Password {user && '(leave empty to keep current)'}</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder={user ? "Leave empty to keep current" : "Enter password"}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                />
                Active User
              </label>
            </div>
          </div>

          {/* Avatar Upload Section */}
          {user && (
            <div className="form-section">
              <h3>Profile Avatar</h3>
              <div className="avatar-section">
                <AvatarUpload
                  entityType="users"
                  entityId={user.id}
                  currentAvatar={avatar}
                  onAvatarChange={handleAvatarChange}
                />
              </div>
            </div>
          )}

          {/* Module Access */}
          <div className="form-section">
            <h3>Module Access</h3>
            <div className="select-all-row">
              <label className="checkbox-label select-all-label">
                <input
                  type="checkbox"
                  checked={modules.every(module => formData.permissions.modules[module.key])}
                  onChange={(e) => handleSelectAllModules(e.target.checked)}
                />
                <span style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Select All Modules</span>
              </label>
            </div>
            <div className="permissions-grid">
              {modules.map(module => (
                <div key={module.key} className="permission-item">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.permissions.modules[module.key]}
                      onChange={(e) => handleModuleChange(module.key, e.target.checked)}
                    />
                    <span className="module-icon">{module.icon}</span>
                    {module.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Permissions */}
          <div className="form-section">
            <h3>Action Permissions</h3>
            <div className="select-all-row">
              <label className="checkbox-label select-all-label">
                <input
                  type="checkbox"
                  checked={modules.filter(m => m.key !== 'dashboard').every(module => 
                    actions.every(action => formData.permissions.actions[module.key]?.[action.key])
                  )}
                  onChange={(e) => handleSelectAllActions(e.target.checked)}
                />
                <span style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Select All Actions</span>
              </label>
            </div>
            <div className="actions-table">
              <div className="actions-header">
                <div className="module-col">Module</div>
                {actions.map(action => (
                  <div key={action.key} className="action-col">
                    <span className="action-icon">{action.icon}</span>
                    {action.label}
                  </div>
                ))}
              </div>
              {modules.filter(m => m.key !== 'dashboard').map(module => (
                <div key={module.key} className="actions-row">
                  <div className="module-col">
                    <span className="module-icon">{module.icon}</span>
                    {module.label}
                  </div>
                  {actions.map(action => (
                    <div key={action.key} className="action-col">
                      <input
                        type="checkbox"
                        checked={formData.permissions.actions[module.key]?.[action.key] || false}
                        onChange={(e) => handleActionChange(module.key, action.key, e.target.checked)}
                        disabled={!formData.permissions.modules[module.key]}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Company Access */}
          <div className="form-section">
            <h3>Company Access</h3>
            <div className="select-all-row">
              <label className="checkbox-label select-all-label">
                <input
                  type="checkbox"
                  checked={companies.every(company => formData.permissions.accessible_companies.includes(company.id))}
                  onChange={(e) => handleSelectAllCompanies(e.target.checked)}
                />
                <span style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Select All Companies</span>
              </label>
            </div>
            <div className="access-grid">
              {companies.map(company => (
                <div key={company.id} className="access-item">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.permissions.accessible_companies.includes(company.id)}
                      onChange={(e) => handleCompanyChange(company.id, e.target.checked)}
                    />
                    🏢 {company.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Location Access */}
          <div className="form-section">
            <h3>Location Access</h3>
            <div className="select-all-row">
              <label className="checkbox-label select-all-label">
                <input
                  type="checkbox"
                  checked={locations.every(location => formData.permissions.accessible_locations.includes(location.id))}
                  onChange={(e) => handleSelectAllLocations(e.target.checked)}
                />
                <span style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>Select All Locations</span>
              </label>
            </div>
            <div className="access-grid">
              {locations.map(location => (
                <div key={location.id} className="access-item">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.permissions.accessible_locations.includes(location.id)}
                      onChange={(e) => handleLocationChange(location.id, e.target.checked)}
                    />
                    📍 {location.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-save">
              {user ? 'Update User' : 'Create User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [locations, setLocations] = useState([]);
  const [providers, setProviders] = useState([]);
  const [cabinets, setCabinets] = useState([]);
  const [slotMachines, setSlotMachines] = useState([]);
  const [gameMixes, setGameMixes] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [onjnReports, setOnjnReports] = useState([]);
  const [legalDocuments, setLegalDocuments] = useState([]);

  const [metrology, setMetrology] = useState([]);
  const [jackpots, setJackpots] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [editingEntity, setEditingEntity] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showEntityForm, setShowEntityForm] = useState(false);
  const [showBulkEditForm, setShowBulkEditForm] = useState(false);
  const [bulkEditType, setBulkEditType] = useState('');
  const [bulkEditData, setBulkEditData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [entityType, setEntityType] = useState('');
  const [companiesLocations, setCompaniesLocations] = useState({ companies: [], locations: [] });
  const [activeView, setActiveView] = useState(() => {
    const savedView = localStorage.getItem('activeView');
    return savedView || 'dashboard';
  });
  const [loading, setLoading] = useState(true);
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Click-to-filter states for slot machines table
  const [selectedLocationFilter, setSelectedLocationFilter] = useState(null);
  const [selectedProviderFilter, setSelectedProviderFilter] = useState(null);
  const [selectedCabinetFilter, setSelectedCabinetFilter] = useState(null);
  const [selectedGameMixFilter, setSelectedGameMixFilter] = useState(null);
  const [selectedInvoiceFilter, setSelectedInvoiceFilter] = useState(null);
  const [selectedContractFilter, setSelectedContractFilter] = useState(null);
  const [selectedSerialFilter, setSelectedSerialFilter] = useState(null);
  const [selectedCompanyFilter, setSelectedCompanyFilter] = useState(null);
  const [selectedRTPFilter, setSelectedRTPFilter] = useState(null);
  const [selectedPlacesFilter, setSelectedPlacesFilter] = useState(null);
  const [selectedCvtDateFilter, setSelectedCvtDateFilter] = useState(null);

  // Provider avatar filter state
  const [selectedProviderAvatarFilter, setSelectedProviderAvatarFilter] = useState(null);

  // Invoice popup state
  const [showInvoicePopup, setShowInvoicePopup] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showAddCvtDatePopup, setShowAddCvtDatePopup] = useState(false);
  
  // Jackpot popup state
  const [selectedJackpots, setSelectedJackpots] = useState(null);
  
  // Invoice slots popup state
  const [selectedInvoiceSlots, setSelectedInvoiceSlots] = useState(null);

  // Slot attachments modal state
  const [showSlotAttachmentsModal, setShowSlotAttachmentsModal] = useState(false);
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  // User avatar hook
  const { avatar } = useAvatar('users', user?.id);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save active view to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeView', activeView);
  }, [activeView]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };
      
      const [statsRes, companiesRes, locationsRes, providersRes, cabinetsRes, slotMachinesRes, gameMixesRes, invoicesRes, onjnRes, legalRes, metrologyRes, jackpotsRes, usersRes, adminDataRes] = await Promise.all([
        fetch(`${API}/dashboard/stats`, { headers }),
        fetch(`${API}/companies`, { headers }),
        fetch(`${API}/locations`, { headers }),
        fetch(`${API}/providers`, { headers }),
        fetch(`${API}/cabinets`, { headers }),
        fetch(`${API}/slot-machines`, { headers }),
        fetch(`${API}/game-mixes`, { headers }),
        fetch(`${API}/invoices`, { headers }),
        fetch(`${API}/onjn-reports`, { headers }),
        fetch(`${API}/legal-documents`, { headers }),
        fetch(`${API}/metrology`, { headers }),
        fetch(`${API}/jackpots`, { headers }),
        fetch(`${API}/users`, { headers }),
        user?.role === 'admin' ? fetch(`${API}/admin/companies-locations`, { headers }) : Promise.resolve({ json: () => ({ companies: [], locations: [] }) })
      ]);
      
      const [statsData, companiesData, locationsData, providersData, cabinetsData, slotMachinesData, gameMixesData, invoicesData, onjnData, legalData, metrologyData, jackpotsData, usersData, adminData] = await Promise.all([
        statsRes.json(),
        companiesRes.json(),
        locationsRes.json(),
        providersRes.json(),
        cabinetsRes.json(),
        slotMachinesRes.json(),
        gameMixesRes.json(),
        invoicesRes.json(),
        onjnRes.json(),
        legalRes.json(),
        metrologyRes.json(),
        jackpotsRes.json(),
        usersRes.json(),
        adminDataRes.json ? adminDataRes.json() : { companies: [], locations: [] }
      ]);
      
      setStats(statsData);
      setCompanies(companiesData);
      setLocations(locationsData);
      setProviders(providersData);
      setCabinets(cabinetsData);
      setSlotMachines(slotMachinesData);
      setGameMixes(gameMixesData);
      setInvoices(invoicesData);
      setOnjnReports(onjnData);
      setLegalDocuments(legalData);

      setMetrology(metrologyData);
      setJackpots(jackpotsData);
      
                    setUsers(usersData);
      setCompaniesLocations(adminData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSlotStatusChange = async (slot, newStatus) => {
    if (slot.status === newStatus) return;
    
    try {
      const token = localStorage.getItem('token');
      
      // Create a simple update object with only the necessary fields
      const updateData = {
        cabinet_id: slot.cabinet_id,
        game_mix_id: slot.game_mix_id,
        provider_id: slot.provider_id,
        model: slot.model,
        serial_number: slot.serial_number,
        denomination: slot.denomination,
        max_bet: slot.max_bet,
        rtp: slot.rtp,
        gaming_places: slot.gaming_places,
        commission_date: slot.commission_date,
        invoice_number: slot.invoice_number,
        status: newStatus
      };
      
      const response = await fetch(`${API}/slot-machines/${slot.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData)
      });
      
      if (response.ok) {
        // Force refresh all data
        await fetchDashboardData();
        
        // Show success message
        const statusText = newStatus === 'active' ? 'activ' : 'inactiv';
        alert(`✅ Status slot actualizat cu succes la: ${statusText}`);
      } else {
        const errorData = await response.json();
        alert(`Eroare la actualizare: ${errorData.detail || 'Eroare necunoscută'}`);
      }
    } catch (error) {
      alert('Eroare de conexiune: ' + error.message);
    }
  };

  // Funcția handleMetrologyDateChange pentru editarea datelor CVT


  // Navigation items
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'companies', label: 'Companies', icon: '🏢', count: companies.length },
    { id: 'locations', label: 'Locations', icon: '📍', count: locations.length },
    { id: 'providers', label: 'Providers', icon: '🎮', count: providers.length },
    { id: 'cabinets', label: 'Cabinets', icon: '🎰', count: cabinets.length },
    { id: 'gamemixes', label: 'Game Mixes', icon: '🎲', count: gameMixes.length },
    { id: 'slots', label: 'Slots', icon: '🎯', count: slotMachines.filter(s => s.status !== 'inactive').length },
    { id: 'warehouse', label: 'Warehouse', icon: '📦', count: slotMachines.filter(s => s.status === 'inactive').length },
            { id: 'metrology2', label: 'Metrology 2', icon: '🔬', count: metrology.length },
    { id: 'jackpots', label: 'Jackpots', icon: '🎰', count: jackpots.length },
    { id: 'invoices', label: 'Invoices', icon: '💰', count: invoices.length },
    { id: 'onjn', label: 'ONJN Reports', icon: '📋', count: onjnReports.length },
    { id: 'legal', label: 'Legal Documents', icon: '📄', count: legalDocuments.length },
    ...(user?.role === 'admin' ? [{ id: 'users', label: 'Users', icon: '👥', count: users.length }] : []),
  ];

  const handleEditUser = (userData) => {
    setEditingUser(userData);
    setShowUserForm(true);
  };

  const handleCloseUserForm = () => {
    setEditingUser(null);
    setShowUserForm(false);
  };

  const handleSaveUser = async (userData) => {
    try {
      const token = localStorage.getItem('token');
      const method = editingUser ? 'PUT' : 'POST';
      const url = editingUser ? `${API}/users/${editingUser.id}` : `${API}/users`;
      
      const response = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        await fetchDashboardData(); // Refresh data
        handleCloseUserForm();
        alert('✅ User saved successfully!');
      } else {
        const errorData = await response.json();
        alert(`❌ Failed to save user: ${errorData.detail || 'Unknown error'}`);
        console.error('Failed to save user');
      }
    } catch (error) {
      alert(`❌ Error saving user: ${error.message}`);
      console.error('Error saving user:', error);
    }
  };

  // Generic entity handlers
  const handleAddEntity = (type) => {
    setEntityType(type);
    setEditingEntity(null);
    setShowEntityForm(true);
  };

  const handleEditEntity = (entityData, type) => {
    setEntityType(type);
    setEditingEntity(entityData);
    setShowEntityForm(true);
  };

  const handleCloseEntityForm = () => {
    setEditingEntity(null);
    setShowEntityForm(false);
    setEntityType('');
  };

  const handleSaveEntity = async (entityData) => {
    try {
      // Debug: Log the data being saved for slots
      if (entityType === 'slots') {
        console.log('🎰 Saving slot machine data:', entityData);
        console.log('🔍 Fields present:', Object.keys(entityData));
        console.log('📋 Production year:', entityData.production_year);
        console.log('📍 Location ID:', entityData.location_id);
        console.log('🏠 Ownership type:', entityData.ownership_type);
      }
      
      // Debug: Log the data being saved for locations
      if (entityType === 'locations') {
        console.log('📍 Saving location data:', entityData);
        console.log('🔍 Fields present:', Object.keys(entityData));
        console.log('👤 Contact person:', entityData.contact_person);
        console.log('📧 Contact email:', entityData.contact_email);
        console.log('📞 Contact phone:', entityData.contact_phone);
        console.log('🆔 Contact person ID:', entityData.contact_person_id);
        console.log('📝 Contact person type:', entityData.contact_person_type);
      }
      
      // Debug: Log the data being saved for invoices
      if (entityType === 'invoices') {
        console.log('🧾 Saving invoice data:', entityData);
        console.log('🔍 Fields present:', Object.keys(entityData));
        console.log('📊 Status:', entityData.status);
        console.log('💰 Amount:', entityData.amount);
        console.log('📅 Issue date:', entityData.issue_date);
        console.log('📅 Due date:', entityData.due_date);
        console.log('🏢 Buyer ID:', entityData.buyer_id);
        console.log('🏪 Seller ID:', entityData.seller_id);
        console.log('📍 Location ID:', entityData.location_id);
      }
      
      const token = localStorage.getItem('token');
      const method = editingEntity ? 'PUT' : 'POST';
      const endpoint = getEntityEndpoint(entityType);
      const url = editingEntity ? `${API}/${endpoint}/${editingEntity.id}` : `${API}/${endpoint}`;
      
      console.log('🌐 API URL:', url);
      
      const response = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(entityData)
      });

      console.log('📡 Response status:', response.status);

      if (response.ok) {
        const responseData = await response.json();
        console.log('✅ Save successful, response data:', responseData);
        await fetchDashboardData(); // Refresh data
        handleCloseEntityForm();
        alert(`✅ ${getEntityDisplayName(entityType)} saved successfully!`);
      } else {
        const error = await response.json();
        console.error('❌ Failed to save entity:', error);
        console.error('📡 Response status:', response.status, response.statusText);
        alert(`❌ Failed to save ${getEntityDisplayName(entityType)}: ${error.detail || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error saving entity:', error);
      alert(`❌ Error saving ${getEntityDisplayName(entityType)}: ${error.message}`);
    }
  };

  const handleDeleteEntity = async (entityId, type) => {
    console.log('🔥 DELETING DIRECTLY:', entityId, type);

    try {
      const token = localStorage.getItem('token');
      const endpoint = getEntityEndpoint(type);
      console.log('📍 DELETE URL:', `${API}/${endpoint}/${entityId}`);
      
      const response = await fetch(`${API}/${endpoint}/${entityId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      console.log('📡 DELETE Response:', response.status, response.statusText);

      if (response.ok) {
        console.log('✅ Delete successful, refreshing data...');
        alert('✅ Item deleted successfully!');
        await fetchDashboardData(); // Refresh data
      } else {
        const error = await response.json();
        console.error('❌ DELETE Failed:', error);
        alert('❌ Failed to delete: ' + (error.detail || 'Unknown error'));
      }
    } catch (error) {
      console.error('💥 Delete exception:', error);
      alert('❌ Error deleting: ' + error.message);
    }
  };

  const getEntityEndpoint = (type) => {
    const endpoints = {
      companies: 'companies',
      locations: 'locations',
      providers: 'providers',
      cabinets: 'cabinets',
      slots: 'slot-machines',
      gamemixes: 'game-mixes',
      invoices: 'invoices',
      onjn: 'onjn-reports',
      legal: 'legal-documents',
      metrology: 'metrology',
      jackpots: 'jackpots'
    };
    return endpoints[type] || type;
  };

  // Bulk Edit Handler
  const handleBulkEdit = (entityType) => {
    if (selectedItems.length === 0) {
      alert('Please select items to bulk edit');
      return;
    }
    setBulkEditType(entityType);
    setBulkEditData({});
    setShowBulkEditForm(true);
  };

  const handleBulkDelete = async (entityType) => {
    console.log('🔥 BULK DELETE CLICKED:', entityType);
    console.log('🔥 Selected items:', selectedItems);
    
    if (selectedItems.length === 0) {
      alert('❌ Please select items to delete first!');
      return;
    }

    try {
      console.log('🚀 Starting bulk delete...');
      const endpoint = getEntityEndpoint(entityType);
      const token = localStorage.getItem('token');
      
      // Delete each item individually
      let successCount = 0;
      for (const itemId of selectedItems) {
        console.log(`🗑️ Deleting ${itemId}...`);
        
        const response = await fetch(`${API}/${endpoint}/${itemId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (response.ok) {
          successCount++;
          console.log(`✅ Deleted ${itemId}`);
        } else {
          console.error(`❌ Failed to delete ${itemId}`);
        }
      }

      alert(`✅ Successfully deleted ${successCount} of ${selectedItems.length} items!`);
      await fetchDashboardData();
      setSelectedItems([]);
      console.log('🔄 Data refreshed, selections cleared');
      
    } catch (error) {
      console.error('💥 Bulk delete error:', error);
      alert('❌ Bulk delete failed: ' + error.message);
    }
  };

  // Bulk Duplicate Handler for Slots
  const handleBulkDuplicate = async (entityType) => {
    console.log('🔄 BULK DUPLICATE CLICKED:', entityType);
    console.log('🔄 Selected items:', selectedItems);
    
    if (selectedItems.length === 0) {
      alert('❌ Please select items to duplicate first!');
      return;
    }

    if (entityType !== 'slots') {
      alert('❌ Duplication is only available for slots!');
      return;
    }

    try {
      console.log('🚀 Starting bulk duplicate...');
      const token = localStorage.getItem('token');
      
      // Get all existing slot serial numbers to avoid conflicts
      const existingSerials = slotMachines.map(slot => slot.serial_number);
      console.log('📋 Existing serials:', existingSerials);
      
      let successCount = 0;
      for (let i = 0; i < selectedItems.length; i++) {
        const itemId = selectedItems[i];
        console.log(`🔄 Duplicating ${itemId}...`);
        
        // Find the original slot
        const originalSlot = slotMachines.find(slot => slot.id === itemId);
        if (!originalSlot) {
          console.error(`❌ Original slot not found: ${itemId}`);
          continue;
        }
        
        // Generate new serial number
        const baseSerial = originalSlot.serial_number;
        let newSerial = `${baseSerial}-1`;
        let counter = 1;
        
        // Find next available serial number
        while (existingSerials.includes(newSerial)) {
          counter++;
          newSerial = `${baseSerial}-${counter}`;
        }
        
        // Add new serial to existing list to avoid conflicts in same batch
        existingSerials.push(newSerial);
        
        // Create duplicate slot data
        const duplicateData = {
          ...originalSlot,
          serial_number: newSerial,
          status: 'active' // Set to active by default
        };
        
        // Remove id and created_at to create new record
        delete duplicateData.id;
        delete duplicateData.created_at;
        delete duplicateData.created_by;
        
        console.log('📤 Creating duplicate with data:', duplicateData);
        
        const response = await fetch(`${API}/slot-machines`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(duplicateData)
        });
        
        if (response.ok) {
          successCount++;
          console.log(`✅ Duplicated ${originalSlot.serial_number} -> ${newSerial}`);
        } else {
          const errorText = await response.text();
          console.error(`❌ Failed to duplicate ${originalSlot.serial_number}:`, errorText);
        }
      }

      alert(`✅ Successfully duplicated ${successCount} of ${selectedItems.length} slots!`);
      await fetchDashboardData();
      setSelectedItems([]);
      console.log('🔄 Data refreshed, selections cleared');
      
    } catch (error) {
      console.error('💥 Bulk duplicate error:', error);
      alert('❌ Bulk duplicate failed: ' + error.message);
    }
  };

  // Handle item selection for bulk edit
  const handleItemSelection = (itemId, checked) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    }
  };

  // Handle select all
  const handleSelectAll = (items, checked) => {
    if (checked) {
      setSelectedItems(items.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // Bulk Edit Save Handler
  const handleBulkEditSave = async () => {
    try {
      let updatePromises;
      
      if (bulkEditType === 'metrology') {
        // For metrology, selectedItems are metrology record IDs directly
        updatePromises = selectedItems.map(async (metrologyId) => {
          // Update the metrology record directly
          const response = await fetch(`${API}/metrology/${metrologyId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(bulkEditData)
          });
          return response.ok;
        });
      } else {
        // For other entity types, use the standard approach
        updatePromises = selectedItems.map(async (itemId) => {
          const endpoint = getEntityEndpoint(bulkEditType);
          const response = await fetch(`${API}/${endpoint}/${itemId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(bulkEditData)
          });
          return response.ok;
        });
      }

      const results = await Promise.all(updatePromises);
      const successCount = results.filter(Boolean).length;
      
      if (successCount === selectedItems.length) {
        alert(`✅ Successfully updated ${successCount} ${getEntityDisplayName(bulkEditType)} items!`);
      } else {
        alert(`⚠️ Updated ${successCount} of ${selectedItems.length} items. Some updates failed.`);
      }

      await fetchDashboardData();
      setShowBulkEditForm(false);
      setSelectedItems([]);
    } catch (error) {
      console.error('Bulk edit error:', error);
      alert(`❌ Bulk edit failed: ${error.message}`);
    }
  };

  // Export Handler - Excel Format
  const handleExport = (entityType) => {
    const data = {
      companies: companies,
      locations: locations,
      providers: providers,
      cabinets: cabinets,
      slots: slotMachines,
      gamemixes: gameMixes,
      invoices: invoices,
      onjn: onjnReports,
      legal: legalDocuments,
      users: users
    };

    const exportData = data[entityType] || [];
    
    if (exportData.length === 0) {
      alert('No data to export');
      return;
    }

    // Prepare data for Excel - remove internal fields and format properly
    const excelData = exportData.map(item => {
      const cleanItem = { ...item };
      // Remove internal fields
      delete cleanItem.id;
      delete cleanItem.created_at;
      delete cleanItem.created_by;
      delete cleanItem.password_hash;
      
      // Format dates
      if (cleanItem.commission_date) {
        cleanItem.commission_date = new Date(cleanItem.commission_date).toISOString().split('T')[0];
      }
      if (cleanItem.issue_date) {
        cleanItem.issue_date = new Date(cleanItem.issue_date).toISOString().split('T')[0];
      }
      if (cleanItem.due_date) {
        cleanItem.due_date = new Date(cleanItem.due_date).toISOString().split('T')[0];
      }
      if (cleanItem.report_date) {
        cleanItem.report_date = new Date(cleanItem.report_date).toISOString().split('T')[0];
      }
      
      return cleanItem;
    });

    // Create Excel workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);
    
    // Auto-width columns
    const colWidths = Object.keys(excelData[0] || {}).map(key => ({
      wch: Math.max(key.length, 15)
    }));
    ws['!cols'] = colWidths;
    
    XLSX.utils.book_append_sheet(wb, ws, getEntityDisplayName(entityType));
    
    // Download file
    const fileName = `${entityType}_export_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
    
    alert(`✅ ${exportData.length} ${getEntityDisplayName(entityType)} items exported to Excel successfully!`);
  };

  // Import Handler - Excel Format
  const handleImport = (entityType) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      try {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const importData = XLSX.utils.sheet_to_json(worksheet);
        
        if (importData.length === 0) {
          alert('No data found in Excel file');
          return;
        }
        
        // Validate required fields based on entity type
        const requiredFields = getRequiredFields(entityType);
        const missingFields = requiredFields.filter(field => 
          !Object.keys(importData[0]).includes(field)
        );
        
        if (missingFields.length > 0) {
          alert(`Missing required columns: ${missingFields.join(', ')}`);
          return;
        }
        
        // Show preview and confirm import
        const confirmImport = confirm(
          `Found ${importData.length} rows in Excel file.\n\n` +
          `Sample data:\n${JSON.stringify(importData[0], null, 2)}\n\n` +
          `Proceed with import?`
        );
        
        if (confirmImport) {
          // Process import (for now, just show success - actual API calls would go here)
          console.log(`Importing ${importData.length} ${entityType}:`, importData);
          alert(`✅ Ready to import ${importData.length} ${getEntityDisplayName(entityType)} items!\n\n(Note: Actual import functionality would process these items through the API)`);
        }
        
      } catch (error) {
        console.error('Import error:', error);
        alert(`❌ Error reading Excel file: ${error.message}`);
      }
    };
    input.click();
  };

  // Search Filter Function
  const filterData = (data, searchTerm) => {
    if (!searchTerm) return data;
    
    const search = searchTerm.toLowerCase();
    return data.filter(item => {
      // Special handling for users to search in first_name and last_name
      if (item.first_name || item.last_name) {
        const fullName = `${item.first_name || ''} ${item.last_name || ''}`.trim();
        if (fullName.toLowerCase().includes(search)) return true;
      }
      
      // Search through all string and number fields
      return Object.values(item).some(value => {
        if (value === null || value === undefined) return false;
        return String(value).toLowerCase().includes(search);
      });
    });
  };

  // Get required fields for validation
  const getRequiredFields = (entityType) => {
    const fields = {
      companies: ['name', 'email', 'phone'],
      locations: ['name', 'address', 'city'],
      providers: ['name', 'email'],
      cabinets: ['name', 'model'],
      slots: ['model', 'denomination'],
      gamemixes: ['name'],
      invoices: ['invoice_number', 'amount'],
      onjn: ['report_number'],
      legal: ['document_type', 'title'],
      users: ['username', 'email', 'first_name', 'last_name', 'role'],
      metrology: ['serial_number', 'certificate_number', 'issue_date'],
      jackpots: ['serial_number', 'jackpot_type', 'current_amount']
    };
    return fields[entityType] || ['name'];
  };

  // Toggle functions for click-to-filter functionality
  const toggleLocationFilter = (locationId) => {
    setSelectedLocationFilter(selectedLocationFilter === locationId ? null : locationId);
  };

  const toggleProviderFilter = (providerId) => {
    setSelectedProviderFilter(selectedProviderFilter === providerId ? null : providerId);
  };

  const toggleCabinetFilter = (cabinetId) => {
    setSelectedCabinetFilter(selectedCabinetFilter === cabinetId ? null : cabinetId);
  };

  const toggleGameMixFilter = (gameMixId) => {
    setSelectedGameMixFilter(selectedGameMixFilter === gameMixId ? null : gameMixId);
  };

  const toggleInvoiceFilter = (invoiceNumber) => {
    setSelectedInvoiceFilter(selectedInvoiceFilter === invoiceNumber ? null : invoiceNumber);
  };

  const toggleContractFilter = (contractNumber) => {
    setSelectedContractFilter(selectedContractFilter === contractNumber ? null : contractNumber);
  };

  const toggleSerialFilter = (serialNumber) => {
    setSelectedSerialFilter(selectedSerialFilter === serialNumber ? null : serialNumber);
  };

  const toggleCompanyFilter = (companyId) => {
    setSelectedCompanyFilter(selectedCompanyFilter === companyId ? null : companyId);
  };

  const toggleRTPFilter = (rtp) => {
    setSelectedRTPFilter(selectedRTPFilter === rtp ? null : rtp);
  };

  const togglePlacesFilter = (places) => {
    setSelectedPlacesFilter(selectedPlacesFilter === places ? null : places);
  };

  // Toggle function for CVT date filter
  const toggleCvtDateFilter = (cvtDate) => {
    setSelectedCvtDateFilter(selectedCvtDateFilter === cvtDate ? null : cvtDate);
  };

  // Toggle function for provider avatar filter
  const toggleProviderAvatarFilter = (providerId) => {
    setSelectedProviderAvatarFilter(selectedProviderAvatarFilter === providerId ? null : providerId);
  };

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowInvoicePopup(true);
  };

  const handleCloseInvoicePopup = () => {
    setShowInvoicePopup(false);
    setSelectedInvoice(null);
  };

  // Add CVT Date popup handlers
  const handleOpenAddCvtDatePopup = () => {
    setShowAddCvtDatePopup(true);
  };

  const handleCloseAddCvtDatePopup = () => {
    setShowAddCvtDatePopup(false);
  };
  
  const handleCloseJackpotPopup = () => {
    setSelectedJackpots(null);
  };
  
  const handleCloseInvoiceSlotsPopup = () => {
    setSelectedInvoiceSlots(null);
  };

  const handleOpenSlotAttachments = (slotId) => {
    setSelectedSlotId(slotId);
    setShowSlotAttachmentsModal(true);
  };

  const handleCloseSlotAttachments = () => {
    setShowSlotAttachmentsModal(false);
    setSelectedSlotId(null);
  };

  const renderTable = (title, data, columns, actions, entityType) => {
    // Apply search filter
    let filteredData = filterData(data, searchTerm);
    
    // Apply click-to-filter for slot machines
    if (entityType === 'slots') {
      // Apply provider avatar filter FIRST
      if (selectedProviderAvatarFilter) {
        filteredData = filteredData.filter(slot => slot.provider_id === selectedProviderAvatarFilter);
      }
      if (selectedLocationFilter) {
        filteredData = filteredData.filter(slot => slot.location_id === selectedLocationFilter);
      }
      if (selectedProviderFilter) {
        filteredData = filteredData.filter(slot => slot.provider_id === selectedProviderFilter);
      }
      if (selectedCabinetFilter) {
        filteredData = filteredData.filter(slot => slot.cabinet_id === selectedCabinetFilter);
      }
      if (selectedGameMixFilter) {
        filteredData = filteredData.filter(slot => slot.game_mix_id === selectedGameMixFilter);
      }
      if (selectedInvoiceFilter) {
        filteredData = filteredData.filter(slot => slot.invoice_number === selectedInvoiceFilter);
      }
      if (selectedContractFilter) {
        filteredData = filteredData.filter(slot => slot.lease_contract_number === selectedContractFilter);
      }
      if (selectedSerialFilter) {
        filteredData = filteredData.filter(slot => slot.serial_number === selectedSerialFilter);
      }
      if (selectedCompanyFilter) {
        filteredData = filteredData.filter(slot => slot.owner_company_id === selectedCompanyFilter);
      }
      if (selectedRTPFilter) {
        filteredData = filteredData.filter(slot => slot.rtp === selectedRTPFilter);
      }
      if (selectedPlacesFilter) {
        filteredData = filteredData.filter(slot => slot.gaming_places === selectedPlacesFilter);
      }
                      if (selectedCvtDateFilter) {
                  filteredData = filteredData.filter(slot => {
                    // Find metrology record for this slot
                    const metrologyItem = metrology.find(m => {
                      if (!m.serial_number) return false;
                      
                      // Try both newline and space separation
                      const serialNumbersNewline = m.serial_number.split('\n').filter(s => s.trim());
                      const serialNumbersSpace = m.serial_number.split(' ').filter(s => s.trim());
                      
                      // Use the one that has more items (more likely to be correct)
                      const serialNumbers = serialNumbersNewline.length > serialNumbersSpace.length ? 
                        serialNumbersNewline : serialNumbersSpace;
                      
                      return serialNumbers.includes(slot.serial_number);
                    });
                    
                    return metrologyItem?.cvt_expiry_date === selectedCvtDateFilter;
                  });
                }
    }
    
    return (
      <div className="table-container">
        <div className="table-header">
          <h2>{title}</h2>
          <div className="table-actions">
            <div className="search-container">
              <input
                type="text"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            <button 
              className="btn-primary"
              onClick={() => actions?.onAdd && actions.onAdd()}
            >
              <span className="icon">➕</span>
              Add {entityType === 'slots' ? 'Slot' : entityType === 'metrology' ? 'Metrologie' : title.slice(0, -1)}
            </button>
            <button 
              className="btn-secondary"
              onClick={() => actions?.onBulkEdit && actions.onBulkEdit()}
              title="Bulk Edit Selected"
            >
              <span className="icon">📝</span>
              Bulk Edit ({selectedItems.length})
            </button>
            <button 
              className="btn-danger"
              onClick={() => actions?.onBulkDelete && actions.onBulkDelete()}
              title="Bulk Delete Selected"
            >
              <span className="icon">🗑️</span>
              Bulk Delete ({selectedItems.length})
            </button>
            {entityType === 'slots' && (
              <button 
                className="btn-warning"
                onClick={() => actions?.onBulkDuplicate && actions.onBulkDuplicate()}
                title="Duplicate Selected Slots"
              >
                <span className="icon">🔄</span>
                Duplicate ({selectedItems.length})
              </button>
            )}
            <button 
              className="btn-success"
              onClick={() => actions?.onExport && actions.onExport()}
              title="Export Data"
            >
              <span className="icon">📤</span>
              Export
            </button>
            <button 
              className="btn-info"
              onClick={() => actions?.onImport && actions.onImport()}
              title="Import Data"
            >
              <span className="icon">📥</span>
              Import
            </button>
          </div>
        </div>
        {/* Provider filter avatars for Slot Machines - SECOND ROW */}
        {entityType === 'slots' && (
          <div className="provider-avatars-filter" style={{margin: '8px 0 0 0'}}>
            {providers.map(provider => (
              <div
                key={provider.id}
                className={`provider-avatar-filter ${selectedProviderAvatarFilter === provider.id ? 'active' : ''}`}
                onClick={() => toggleProviderAvatarFilter(provider.id)}
                title={`Filter by ${provider.name}`}
              >
                <AvatarDisplay entityType="providers" entityId={provider.id} size={30} />
              </div>
            ))}
          </div>
        )}
        
        {/* Active Filters Display for Slot Machines */}
        {entityType === 'slots' && (selectedProviderAvatarFilter || selectedLocationFilter || selectedProviderFilter || selectedCabinetFilter || selectedGameMixFilter || selectedInvoiceFilter || selectedContractFilter) && (
          <div className="active-filters-info">
            <strong>Active Filters:</strong>
            {selectedProviderAvatarFilter && (
              <span className="filter-tag">
                👤 Provider: {providers.find(p => p.id === selectedProviderAvatarFilter)?.name || 'Unknown'}
                <button onClick={() => setSelectedProviderAvatarFilter(null)} className="filter-remove">×</button>
              </span>
            )}
            {selectedLocationFilter && (
              <span className="filter-tag">
                📍 Location: {locations.find(l => l.id === selectedLocationFilter)?.name || 'Unknown'}
                <button onClick={() => setSelectedLocationFilter(null)} className="filter-remove">×</button>
              </span>
            )}
            {selectedProviderFilter && (
              <span className="filter-tag">
                🏢 Provider: {providers.find(p => p.id === selectedProviderFilter)?.name || 'Unknown'}
                <button onClick={() => setSelectedProviderFilter(null)} className="filter-remove">×</button>
              </span>
            )}
            {selectedCabinetFilter && (
              <span className="filter-tag">
                🏛️ Cabinet: {cabinets.find(c => c.id === selectedCabinetFilter)?.name || 'Unknown'}
                <button onClick={() => setSelectedCabinetFilter(null)} className="filter-remove">×</button>
              </span>
            )}
            {selectedGameMixFilter && (
              <span className="filter-tag">
                🎮 Game Mix: {gameMixes.find(gm => gm.id === selectedGameMixFilter)?.name || 'Unknown'}
                <button onClick={() => setSelectedGameMixFilter(null)} className="filter-remove">×</button>
              </span>
            )}
            {selectedInvoiceFilter && (
              <span className="filter-tag">
                📄 Invoice: {selectedInvoiceFilter}
                <button onClick={() => setSelectedInvoiceFilter(null)} className="filter-remove">×</button>
              </span>
            )}
            {selectedContractFilter && (
              <span className="filter-tag">
                📋 Contract: {selectedContractFilter}
                <button onClick={() => setSelectedContractFilter(null)} className="filter-remove">×</button>
              </span>
            )}
            {selectedCvtDateFilter && (
              <span className="filter-tag">
                📅 CVT Date: {new Date(selectedCvtDateFilter).toLocaleDateString()}
                <button onClick={() => setSelectedCvtDateFilter(null)} className="filter-remove">×</button>
              </span>
            )}
        </div>
        )}
        <div className="table-content">
          {filteredData.length < data.length && (
            <div className="search-results-info">
              Showing {filteredData.length} of {data.length} results for "{searchTerm}"
            </div>
          )}
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={filteredData.length > 0 && selectedItems.length === filteredData.length}
                    onChange={(e) => handleSelectAll(filteredData, e.target.checked)}
                  />
                </th>
                <th>#</th>
                {columns.map(col => (
                  <th key={col.key}>{col.label}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 && searchTerm ? (
                <tr>
                  <td colSpan={columns.length + 3} style={{ textAlign: 'center', padding: '2rem' }}>
                    No results found for "{searchTerm}"
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 3} style={{ textAlign: 'center', padding: '2rem' }}>
                    No {title.toLowerCase()} found
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={(e) => handleItemSelection(item.id, e.target.checked)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    {columns.map(col => (
                      <td key={col.key}>
                        {col.render ? col.render(item) : item[col.key] || 'N/A'}
                      </td>
                    ))}
                    <td>
                      {entityType === 'slots' || entityType === 'metrology' ? (
                        <div className="table-row-actions-vertical">
                          {/* First row: Edit, Delete, and Attach buttons */}
                          <div style={{ display: 'flex', gap: '4px', marginBottom: '4px', alignItems: 'center' }}>
                            <button 
                              className="btn-edit"
                              onClick={() => actions?.onEdit && actions.onEdit(item)}
                              title="Edit"
                              style={{ 
                                fontSize: '14px', 
                                padding: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '24px',
                                height: '24px',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer'
                              }}
                            >
                              📝
                            </button>
                            <button 
                              className="btn-delete"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDeleteEntity(item.id, entityType);
                              }}
                              title="Delete"
                              style={{ 
                                fontSize: '14px', 
                                padding: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '24px',
                                height: '24px',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer'
                              }}
                            >
                              🗑️
                            </button>
                            {/* Attachment indicator with count */}
                            <AttachmentIndicator slotId={item.id} onClick={() => handleOpenSlotAttachments(item.id)} />
                          </div>
                          {/* Second row: Status toggle (only for slots and warehouse) */}
                          {(entityType === 'slots' || entityType === 'warehouse') && (
                            <div style={{ textAlign: 'center' }}>
                              <label className="switch" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={item.status === 'active'}
                                  onChange={e => handleSlotStatusChange(item, e.target.checked ? 'active' : 'inactive')}
                                  style={{ display: 'none' }}
                                />
                                <span style={{
                                  width: 36,
                                  height: 20,
                                  background: item.status === 'active' ? 'var(--accent-color)' : '#ccc',
                                  borderRadius: 12,
                                  position: 'relative',
                                  transition: 'background 0.2s',
                                  display: 'inline-block',
                                  marginRight: 6
                                }}>
                                  <span style={{
                                    position: 'absolute',
                                    left: item.status === 'active' ? 18 : 2,
                                    top: 2,
                                    width: 16,
                                    height: 16,
                                    background: '#fff',
                                    borderRadius: '50%',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                                    transition: 'left 0.2s'
                                  }} />
                                </span>
                                <span style={{ fontSize: 14, color: item.status === 'active' ? 'var(--accent-color)' : '#888', fontWeight: 600 }}>
                                  {item.status === 'active' ? '🟢' : '🔴'}
                                </span>
                              </label>
                            </div>
                          )}
                        </div>
                      ) : (
                      <div className="table-row-actions">
                        <button 
                          className="btn-edit"
                          onClick={() => actions?.onEdit && actions.onEdit(item)}
                          title="Edit"
                            style={{ fontSize: '14px', padding: '2px 4px' }}
                        >
                            📝
                        </button>
                        <button 
                          className="btn-delete"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeleteEntity(item.id, entityType);
                          }}
                          title="Delete"
                            style={{ fontSize: '14px', padding: '2px 4px' }}
                        >
                            🗑️
                        </button>
                          {/* Attachment indicator with count */}
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '4px',
                            cursor: 'pointer'
                          }} title="Atașamente">
                            <span style={{fontSize:'1.1em'}}>🔗</span>
                            {/* Attachment count will be displayed when data is available */}
                          </div>
                      </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <h1>CASHPOT</h1>
        <p>Gaming Industry Management System</p>
      </div>
      
      {stats && (
        <div className="stats-grid">
          <div className="stat-card clickable" onClick={() => setActiveView('companies')}>
            <div className="stat-icon" style={{ backgroundColor: '#3b82f6' }}>📊</div>
            <div className="stat-content">
              <h3>Total Companies</h3>
              <p className="stat-value">{stats.total_companies}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('locations')}>
            <div className="stat-icon" style={{ backgroundColor: '#10b981' }}>📍</div>
            <div className="stat-content">
              <h3>Total Locations</h3>
              <p className="stat-value">{stats.total_locations}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('providers')}>
            <div className="stat-icon" style={{ backgroundColor: '#f59e0b' }}>🎮</div>
            <div className="stat-content">
              <h3>Gaming Providers</h3>
              <p className="stat-value">{stats.total_providers}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('cabinets')}>
            <div className="stat-icon" style={{ backgroundColor: '#ef4444' }}>🎰</div>
            <div className="stat-content">
              <h3>Gaming Cabinets</h3>
              <p className="stat-value">{stats.total_cabinets}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('slots')}>
            <div className="stat-icon" style={{ backgroundColor: '#8b5cf6' }}>🎯</div>
            <div className="stat-content">
              <h3>Slot Machines</h3>
              <p className="stat-value">{stats.total_slot_machines}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('dashboard')}>
            <div className="stat-icon" style={{ backgroundColor: '#06b6d4' }}>⚡</div>
            <div className="stat-content">
              <h3>Active Equipment</h3>
              <p className="stat-value">{stats.active_equipment}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('invoices')}>
            <div className="stat-icon" style={{ backgroundColor: '#f59e0b' }}>💰</div>
            <div className="stat-content">
              <h3>Invoices</h3>
              <p className="stat-value">{stats.total_invoices}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('onjn')}>
            <div className="stat-icon" style={{ backgroundColor: '#10b981' }}>📋</div>
            <div className="stat-content">
              <h3>ONJN Reports</h3>
              <p className="stat-value">{stats.total_onjn_reports}</p>
            </div>
          </div>
          <div className="stat-card clickable" onClick={() => setActiveView('legal')}>
            <div className="stat-icon" style={{ backgroundColor: '#ef4444' }}>📄</div>
            <div className="stat-content">
              <h3>Legal Documents</h3>
              <p className="stat-value">{stats.total_legal_documents}</p>
            </div>
          </div>
          {user?.role === 'admin' && (
            <div className="stat-card clickable" onClick={() => setActiveView('users')}>
              <div className="stat-icon" style={{ backgroundColor: '#8b5cf6' }}>👥</div>
              <div className="stat-content">
                <h3>Total Users</h3>
                <p className="stat-value">{stats.total_users}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {stats && stats.recent_activities.length > 0 && (
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          <div className="activities-list">
            {stats.recent_activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'company' && '🏢'}
                  {activity.type === 'location' && '📍'}
                  {activity.type === 'provider' && '🎮'}
                  {activity.type === 'cabinet' && '🎰'}
                </div>
                <div className="activity-details">
                  <p><strong>{activity.name}</strong> was {activity.action}</p>
                  <p className="activity-date">{new Date(activity.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Invoice Popup Component
  const InvoicePopup = ({ invoice, onClose }) => {
    if (!invoice) return null;

    // Find location, buyer and seller based on invoice data
    const location = locations.find(location => location.id === invoice.location_id);
    const buyer = companies.find(company => company.id === invoice.buyer_id);
    const seller = providers.find(provider => provider.id === invoice.seller_id);

    // Format amount in Romanian format (15.00,68)
    const formatAmount = (amount) => {
      if (!amount) return '0,00';
      const num = parseFloat(amount);
      if (isNaN(num)) return '0,00';
      
      // Convert to string with 2 decimal places
      const formatted = num.toFixed(2);
      // Split by decimal point
      const parts = formatted.split('.');
      // Add thousands separator (.) and replace decimal point with comma
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return `${integerPart},${parts[1]}`;
    };

    // Remove euro symbol from Denomin and Maxbet
    const cleanDescription = (description) => {
      if (!description) return 'No description';
      return description
        .replace(/€/g, '') // Remove euro symbol
        .replace(/EUR/g, '') // Remove EUR text
        .replace(/\s+/g, ' ') // Remove extra spaces
        .trim();
    };

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content invoice-popup" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Invoice Details - {invoice.invoice_number}</h2>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
          <div className="invoice-details">
            <div className="invoice-grid">
              <div className="invoice-field">
                <label>Invoice Number:</label>
                <span>{invoice.invoice_number}</span>
              </div>
              <div className="invoice-field">
                <label>Issue Date:</label>
                <span>{new Date(invoice.issue_date).toLocaleDateString()}</span>
              </div>
              <div className="invoice-field">
                <label>Due Date:</label>
                <span>{new Date(invoice.due_date).toLocaleDateString()}</span>
              </div>
              <div className="invoice-field">
                <label>Amount:</label>
                <span>{formatAmount(invoice.amount)} {invoice.currency || 'EUR'}</span>
              </div>
              <div className="invoice-field">
                <label>Description:</label>
                <span>{cleanDescription(invoice.description)}</span>
              </div>
              <div className="invoice-field">
                <label>Status:</label>
                <span className={`status-badge ${invoice.status || 'pending'}`}>
                  {invoice.status || 'Pending'}
                </span>
              </div>
              <div className="invoice-field">
                <label>Serial Numbers:</label>
                <span>{invoice.serial_numbers || 'N/A'}</span>
              </div>
              <div className="invoice-field">
                <label>Location:</label>
                <span>{location ? location.name : 'N/A'}</span>
              </div>
              <div className="invoice-field">
                <label>Buyer:</label>
                <span>{buyer ? buyer.name : 'N/A'}</span>
              </div>
              <div className="invoice-field">
                <label>Seller:</label>
                <span>{seller ? seller.name : 'N/A'}</span>
              </div>
              <div className="invoice-field">
                <label>Contact Person:</label>
                <span>{buyer ? buyer.contact_person : 'N/A'}</span>
              </div>
              <div className="invoice-field">
                <label>Email:</label>
                <span>
                  <span style={{ marginRight: '8px', fontSize: '16px' }}>📧</span>
                  {buyer ? buyer.email : 'N/A'}
                </span>
              </div>
              <div className="invoice-field">
                <label>Phone:</label>
                <span>
                  <span style={{ marginRight: '8px', fontSize: '16px' }}>📞</span>
                  {buyer ? buyer.phone : 'N/A'}
                </span>
              </div>
              <div className="invoice-field">
                <label>Created At:</label>
                <span>{invoice.created_at ? new Date(invoice.created_at).toLocaleString() : 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Jackpot Popup Component
  const JackpotPopup = ({ jackpots, onClose }) => {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Jackpot Details</h2>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
          <div className="modal-body">
            {jackpots.map((jackpot, index) => (
              <div key={jackpot.id} className="jackpot-item">
                <div className="jackpot-header">
                  <h3>{jackpot.jackpot_name || 'No Name'}</h3>
                  <span className={`jackpot-type ${jackpot.jackpot_type?.toLowerCase()}`}>
                    {jackpot.jackpot_type || 'Unknown'}
                  </span>
                </div>
                
                <div className="jackpot-details">
                  <div>
                    <div className="detail-label">Serial Numbers</div>
                    <div className="detail-value">{jackpot.serial_numbers || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Increment Percentage</div>
                    <div className="detail-value">
                      {typeof jackpot.increment_percentage === 'number' ? `${jackpot.increment_percentage}%` : 'N/A'}
                    </div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Level 1</div>
                    <div className="detail-value">{jackpot.level_1 || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Level 2</div>
                    <div className="detail-value">{jackpot.level_2 || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Level 3</div>
                    <div className="detail-value">{jackpot.level_3 || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Level 4</div>
                    <div className="detail-value">{jackpot.level_4 || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Level 5</div>
                    <div className="detail-value">{jackpot.level_5 || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Created Date</div>
                    <div className="detail-value">
                      {jackpot.created_at ? new Date(jackpot.created_at).toLocaleDateString() : 'N/A'}
                    </div>
                  </div>
                </div>
                
                {(jackpot.description || jackpot.details) && (
                  <div className="jackpot-description">
                    <div className="detail-label">Description</div>
                    <div className="detail-value">{jackpot.description || jackpot.details}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Invoice Slots Popup Component
  const InvoiceSlotsPopup = ({ slots, onClose }) => {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Invoice Slot Details</h2>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
          <div className="modal-body">
            {slots.map((slot, index) => (
              <div key={slot.id} className="jackpot-item">
                <div className="jackpot-header">
                  <h3>Slot: {slot.serial_number || 'Unknown Serial'}</h3>
                  <span className={`jackpot-type ${slot.status?.toLowerCase()}`}>
                    {slot.status || 'Unknown Status'}
                  </span>
                </div>
                
                <div className="jackpot-details">
                  <div>
                    <div className="detail-label">Provider</div>
                    <div className="detail-value">
                      {(() => {
                        const provider = providers.find(p => p.id === slot.provider_id);
                        return provider ? provider.name : 'Unknown Provider';
                      })()}
                    </div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Location</div>
                    <div className="detail-value">
                      {(() => {
                        const location = locations.find(l => l.id === slot.location_id);
                        return location ? location.name : 'Unknown Location';
                      })()}
                    </div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Game Mix</div>
                    <div className="detail-value">
                      {(() => {
                        const gameMix = gameMixes.find(gm => gm.id === slot.game_mix_id);
                        return gameMix ? gameMix.name : 'Unknown Game Mix';
                      })()}
                    </div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Cabinet</div>
                    <div className="detail-value">
                      {(() => {
                        const cabinet = cabinets.find(c => c.id === slot.cabinet_id);
                        return cabinet ? cabinet.name : 'Unknown Cabinet';
                      })()}
                    </div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Production Year</div>
                    <div className="detail-value">{slot.production_year || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">RTP</div>
                    <div className="detail-value">{slot.rtp ? `${slot.rtp}%` : 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Max Bet</div>
                    <div className="detail-value">{slot.max_bet || 'N/A'}</div>
                  </div>
                  
                  <div>
                    <div className="detail-label">Denomination</div>
                    <div className="detail-value">{slot.denomination || 'N/A'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Add CVT Date Popup Component
  const AddCvtDatePopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
      serial_numbers: '',
      cvt_date: '',
      cvt_end_date: '',
      cvt_type: 'periodic',
      provider_filter: '',
      cabinet_filter: '',
      game_mix_filter: '',
      license_date_filter: '',
      search_term: ''
    });

    const [filteredSlots, setFilteredSlots] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
      
      // Clear validation error when user starts typing
      if (validationErrors[field]) {
        setValidationErrors(prev => ({
          ...prev,
          [field]: null
        }));
      }
    };

    const validateForm = () => {
      const errors = {};
      const serialNumbers = formData.serial_numbers.split(' ').filter(sn => sn.trim());
      
      if (!formData.serial_numbers.trim()) {
        errors.serial_numbers = 'Serial numbers are required';
      } else if (serialNumbers.length === 0) {
        errors.serial_numbers = 'Please enter at least one valid serial number';
      }
      
      if (!formData.cvt_date) {
        errors.cvt_date = 'CVT date is required';
      }
      
      if (!formData.cvt_end_date) {
        errors.cvt_end_date = 'CVT end date is required';
      } else if (formData.cvt_date && formData.cvt_end_date && formData.cvt_end_date <= formData.cvt_date) {
        errors.cvt_end_date = 'End date must be after start date';
      }
      
      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        const token = localStorage.getItem('token');
        const serialNumbers = formData.serial_numbers.split(' ').filter(sn => sn.trim());
        
        // Create metrology records for each serial number
        const promises = serialNumbers.map(async (serialNumber) => {
          const metrologyData = {
            serial_number: serialNumber.trim(),
            certificate_number: `CVT-${serialNumber}-${new Date().getFullYear()}`,
            certificate_type: 'calibration',
            issue_date: formData.cvt_date,

            issuing_authority: 'ANM',
            cvt_expiry_date: formData.cvt_end_date,
            cvt_type: formData.cvt_type,
            status: 'active',
            description: `CVT ${formData.cvt_type} certificate for ${serialNumber}`
          };

          const response = await fetch(`${API}/metrology`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(metrologyData)
          });

          if (!response.ok) {
            throw new Error(`Failed to create CVT for ${serialNumber}`);
          }

          return response.json();
        });

        await Promise.all(promises);
        alert(`✅ Successfully created CVT records for ${serialNumbers.length} slot(s)!`);
        onClose();
        fetchDashboardData(); // Refresh data
      } catch (error) {
        console.error('Error creating CVT records:', error);
        alert(`❌ Error creating CVT records: ${error.message}`);
      } finally {
        setIsSubmitting(false);
      }
    };

    // Filter slots based on search criteria
    useEffect(() => {
      let filtered = slotMachines.filter(slot => slot.status === 'active');
      
      if (formData.provider_filter) {
        filtered = filtered.filter(slot => slot.provider_id === formData.provider_filter);
      }
      
      if (formData.cabinet_filter) {
        filtered = filtered.filter(slot => slot.cabinet_id === formData.cabinet_filter);
      }
      
      if (formData.game_mix_filter) {
        filtered = filtered.filter(slot => slot.game_mix_id === formData.game_mix_filter);
      }
      
      if (formData.license_date_filter) {
        filtered = filtered.filter(slot => slot.commission_date === formData.license_date_filter);
      }
      
      if (formData.search_term) {
        const searchLower = formData.search_term.toLowerCase();
        filtered = filtered.filter(slot => 
          slot.serial_number.toLowerCase().includes(searchLower)
        );
      }
      
      setFilteredSlots(filtered);
    }, [formData, slotMachines]);

    const selectedSerials = formData.serial_numbers.split(' ').filter(sn => sn.trim());

    return (
      <div className="modal-overlay">
        <div className="modal-content" style={{ 
          maxWidth: '1000px', 
          width: '95vw',
          maxHeight: '90vh', 
          overflow: 'auto',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
          border: '1px solid var(--border-color)'
        }}>
          <div className="modal-header" style={{
            background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--accent-color) 100%)',
            borderBottom: '2px solid var(--border-color)',
            padding: '24px 32px',
            borderRadius: '16px 16px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{ 
              margin: 0, 
              color: 'var(--text-primary)', 
              fontSize: '1.8rem',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              🔧 CVT Metrology Administration
            </h2>
            <button 
              className="modal-close" 
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: '1.8rem',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                padding: '8px 12px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="modal-form" style={{ padding: '32px' }}>
            {/* Quick Actions */}
            <div style={{ 
              background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', 
              padding: '24px', 
              borderRadius: '12px', 
              marginBottom: '24px',
              border: '2px solid var(--border-color)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                margin: '0 0 16px 0', 
                color: 'var(--text-primary)', 
                fontSize: '1.3rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                ⚡ Quick Actions
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                <button
                  type="button"
                  onClick={() => {
                    const allSerials = filteredSlots.map(slot => slot.serial_number).join(' ');
                    handleChange('serial_numbers', allSerials);
                  }}
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-color) 0%, #0056b3 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                  }}
                >
                  📋 Select All ({filteredSlots.length})
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('serial_numbers', '')}
                  style={{
                    background: 'linear-gradient(135deg, var(--danger-color) 0%, #c53030 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                  }}
                >
                  🗑️ Clear All
                </button>
                <div style={{ 
                  background: 'var(--bg-secondary)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🎯</span>
                  <span style={{ 
                    color: 'var(--text-primary)', 
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    Selected: <span style={{ color: 'var(--accent-color)' }}>{selectedSerials.length}</span> slot(s)
                  </span>
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', 
              padding: '24px', 
              borderRadius: '12px', 
              marginBottom: '24px',
              border: '2px solid var(--border-color)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                margin: '0 0 20px 0', 
                color: 'var(--text-primary)', 
                fontSize: '1.3rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🔍 Advanced Filters
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px' 
              }}>
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    🏢 Provider
                  </label>
                  <select
                    value={formData.provider_filter}
                    onChange={(e) => handleChange('provider_filter', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid var(--border-color)',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-color)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">🌐 All Providers</option>
                    {providers.map(provider => (
                      <option key={provider.id} value={provider.id}>🏢 {provider.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    🎰 Cabinet
                  </label>
                  <select
                    value={formData.cabinet_filter}
                    onChange={(e) => handleChange('cabinet_filter', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid var(--border-color)',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-color)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">🎰 All Cabinets</option>
                    {cabinets.map(cabinet => (
                      <option key={cabinet.id} value={cabinet.id}>🎰 {cabinet.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    🎮 Game Mix
                  </label>
                  <select
                    value={formData.game_mix_filter}
                    onChange={(e) => handleChange('game_mix_filter', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid var(--border-color)',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-color)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">🎮 All Game Mixes</option>
                    {gameMixes.map(gameMix => (
                      <option key={gameMix.id} value={gameMix.id}>🎮 {gameMix.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    📅 License Date
                  </label>
                  <input
                    type="date"
                    value={formData.license_date_filter}
                    onChange={(e) => handleChange('license_date_filter', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid var(--border-color)',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-color)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
              
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: '8px', 
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}>
                  🔍 Search Serial Numbers
                </label>
                <input
                  type="text"
                  value={formData.search_term}
                  onChange={(e) => handleChange('search_term', e.target.value)}
                  placeholder="🔍 Enter serial numbers to search..."
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    border: '2px solid var(--border-color)',
                    borderRadius: '10px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent-color)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            </div>
            
            {/* CVT Information Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', 
              padding: '24px', 
              borderRadius: '12px', 
              marginBottom: '24px',
              border: '2px solid var(--border-color)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                margin: '0 0 20px 0', 
                color: 'var(--text-primary)', 
                fontSize: '1.3rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                📋 CVT Information
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '20px' 
              }}>
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    🎰 Slot Serial Numbers *
                  </label>
                  <textarea
                    value={formData.serial_numbers}
                    onChange={(e) => handleChange('serial_numbers', e.target.value)}
                    placeholder="🎰 Enter serial numbers separated by spaces (e.g., SN001 SN002 SN003)"
                    rows="4"
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      border: validationErrors.serial_numbers ? '3px solid #ff4444' : '2px solid var(--border-color)',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                      fontFamily: 'monospace'
                    }}
                    onFocus={(e) => {
                      if (!validationErrors.serial_numbers) {
                        e.target.style.borderColor = 'var(--accent-color)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                      }
                    }}
                    onBlur={(e) => {
                      if (!validationErrors.serial_numbers) {
                        e.target.style.borderColor = 'var(--border-color)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {validationErrors.serial_numbers && (
                    <div style={{ 
                      color: '#ff4444', 
                      fontSize: '0.9rem', 
                      marginTop: '8px',
                      padding: '8px 12px',
                      background: 'rgba(255, 68, 68, 0.1)',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 68, 68, 0.3)'
                    }}>
                      ⚠️ {validationErrors.serial_numbers}
                    </div>
                  )}
                  <div style={{ 
                    marginTop: '8px',
                    padding: '8px 12px',
                    background: 'var(--bg-primary)',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)'
                  }}>
                    <small style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      📊 Available slots: <span style={{ color: 'var(--accent-color)' }}>{filteredSlots.length}</span>
                    </small>
                  </div>
                </div>
                
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    📅 CVT Start Date *
                  </label>
                  <input
                    type="date"
                    value={formData.cvt_date}
                    onChange={(e) => handleChange('cvt_date', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      border: validationErrors.cvt_date ? '3px solid #ff4444' : '2px solid var(--border-color)',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      if (!validationErrors.cvt_date) {
                        e.target.style.borderColor = 'var(--accent-color)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                      }
                    }}
                    onBlur={(e) => {
                      if (!validationErrors.cvt_date) {
                        e.target.style.borderColor = 'var(--border-color)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {validationErrors.cvt_date && (
                    <div style={{ 
                      color: '#ff4444', 
                      fontSize: '0.9rem', 
                      marginTop: '8px',
                      padding: '8px 12px',
                      background: 'rgba(255, 68, 68, 0.1)',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 68, 68, 0.3)'
                    }}>
                      ⚠️ {validationErrors.cvt_date}
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    📅 CVT End Date *
                  </label>
                  <input
                    type="date"
                    value={formData.cvt_end_date}
                    onChange={(e) => handleChange('cvt_end_date', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      border: validationErrors.cvt_end_date ? '3px solid #ff4444' : '2px solid var(--border-color)',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      if (!validationErrors.cvt_end_date) {
                        e.target.style.borderColor = 'var(--accent-color)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                      }
                    }}
                    onBlur={(e) => {
                      if (!validationErrors.cvt_end_date) {
                        e.target.style.borderColor = 'var(--border-color)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {validationErrors.cvt_end_date && (
                    <div style={{ 
                      color: '#ff4444', 
                      fontSize: '0.9rem', 
                      marginTop: '8px',
                      padding: '8px 12px',
                      background: 'rgba(255, 68, 68, 0.1)',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 68, 68, 0.3)'
                    }}>
                      ⚠️ {validationErrors.cvt_end_date}
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <label style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '8px', 
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    🔧 CVT Type *
                  </label>
                  <select
                    value={formData.cvt_type}
                    onChange={(e) => handleChange('cvt_type', e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      border: '2px solid var(--border-color)',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-color)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="periodic">🔄 Periodic Verification</option>
                    <option value="reparation">🔧 Reparation Verification</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Available Slots Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', 
              padding: '24px', 
              borderRadius: '12px', 
              marginBottom: '24px',
              border: '2px solid var(--border-color)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ 
                margin: '0 0 20px 0', 
                color: 'var(--text-primary)', 
                fontSize: '1.3rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🎰 Available Slots ({filteredSlots.length})
              </h3>
              <div style={{ 
                maxHeight: '300px', 
                overflow: 'auto', 
                border: '2px solid var(--border-color)', 
                padding: '20px',
                borderRadius: '10px',
                background: 'var(--bg-secondary)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
              }}>
                {filteredSlots.length === 0 ? (
                  <div style={{ 
                    color: 'var(--text-secondary)', 
                    fontStyle: 'italic',
                    textAlign: 'center',
                    padding: '40px 20px',
                    background: 'var(--bg-primary)',
                    borderRadius: '8px',
                    border: '2px dashed var(--border-color)'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}>
                      No slots match the current filters
                    </div>
                    <div style={{ fontSize: '1rem' }}>
                      Try adjusting your search criteria
                    </div>
                  </div>
                ) : (
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
                    gap: '12px' 
                  }}>
                    {filteredSlots.map(slot => (
                      <div key={slot.id} 
                        style={{ 
                          padding: '12px 16px', 
                          border: selectedSerials.includes(slot.serial_number) ? '3px solid var(--accent-color)' : '2px solid var(--border-color)', 
                          borderRadius: '10px',
                          fontSize: '1rem',
                          cursor: 'pointer',
                          backgroundColor: selectedSerials.includes(slot.serial_number) ? 'var(--accent-color)' : 'var(--bg-primary)',
                          color: selectedSerials.includes(slot.serial_number) ? 'white' : 'var(--text-primary)',
                          transition: 'all 0.3s ease',
                          textAlign: 'center',
                          fontWeight: selectedSerials.includes(slot.serial_number) ? 'bold' : 'normal',
                          boxShadow: selectedSerials.includes(slot.serial_number) ? '0 4px 12px rgba(0, 212, 255, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
                          transform: selectedSerials.includes(slot.serial_number) ? 'scale(1.05)' : 'scale(1)'
                        }}
                        onClick={() => {
                          const currentSerials = formData.serial_numbers.split(' ').filter(sn => sn.trim());
                          if (currentSerials.includes(slot.serial_number)) {
                            // Remove if already selected
                            const newSerials = currentSerials.filter(sn => sn !== slot.serial_number);
                            handleChange('serial_numbers', newSerials.join(' '));
                          } else {
                            // Add if not selected
                            const newSerials = [...currentSerials, slot.serial_number];
                            handleChange('serial_numbers', newSerials.join(' '));
                          }
                        }}
                        onMouseOver={(e) => {
                          if (!selectedSerials.includes(slot.serial_number)) {
                            e.target.style.background = 'var(--bg-hover)';
                            e.target.style.transform = 'scale(1.02)';
                            e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (!selectedSerials.includes(slot.serial_number)) {
                            e.target.style.background = 'var(--bg-primary)';
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                          }
                        }}
                      >
                        {slot.serial_number}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              justifyContent: 'flex-end',
              padding: '24px 0 0 0',
              borderTop: '2px solid var(--border-color)',
              marginTop: '24px'
            }}>
              <button 
                type="button" 
                onClick={onClose}
                style={{
                  background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--border-color)',
                  padding: '16px 32px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, var(--bg-hover) 0%, var(--bg-secondary) 100%)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                }}
              >
                ❌ Cancel
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? 'linear-gradient(135deg, var(--text-secondary) 0%, #666 100%)' 
                    : 'linear-gradient(135deg, var(--accent-color) 0%, #0056b3 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '10px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1,
                  boxShadow: isSubmitting 
                    ? '0 2px 4px rgba(0,0,0,0.1)' 
                    : '0 4px 12px rgba(0, 212, 255, 0.3)'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(0, 212, 255, 0.4)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 212, 255, 0.3)';
                  }
                }}
              >
                {isSubmitting ? '⏳ Creating CVT Records...' : '✅ Create CVT Records'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    // Define slotColumns at the beginning to be accessible in both 'slots' and 'warehouse' cases
    const slotColumns = [
            {
              key: 'serial_number',
              label: 'Serial Number',
              render: (item) => {
                const location = locations.find(l => l.id === item.location_id);
                return (
                  <div className="serial-cell" style={{ maxWidth: '120px' }}>
                    <div 
                      className={`serial-primary clickable-filter ${selectedSerialFilter === item.serial_number ? 'active-filter' : ''}`}
                      onClick={() => toggleSerialFilter(item.serial_number)}
                      style={{ cursor: 'pointer', fontSize: '0.9em' }}
                    >
                      <strong>{item.serial_number || 'N/A'}</strong>
                    </div>
                    <div className="serial-secondary">
                      <small 
                        className={`location-info clickable-filter ${selectedLocationFilter === item.location_id ? 'active-filter' : ''}`}
                        onClick={() => toggleLocationFilter(item.location_id)}
                        style={{ fontSize: '0.8em' }}
                      >
                        {location ? location.name : 'N/A'}
                      </small>
                    </div>
                  </div>
                );
              }
            },
            { key: 'provider_id', label: 'Provider', render: (item) => {
                const provider = providers.find(p => p.id === item.provider_id);
                const cabinet = cabinets.find(c => c.id === item.cabinet_id);
                return (
                  <div>
                    <div 
                      className={`clickable-filter ${selectedProviderFilter === item.provider_id ? 'active-filter' : ''}`}
                      onClick={() => toggleProviderFilter(item.provider_id)}
                      style={{ cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      {provider ? provider.name : 'N/A'}
                    </div>
                    <div
                      className={`clickable-filter ${selectedCabinetFilter === item.cabinet_id ? 'active-filter' : ''}`}
                      onClick={() => toggleCabinetFilter(item.cabinet_id)}
                      style={{ fontSize: 12, cursor: 'pointer' }}
                    >
                      {cabinet ? cabinet.name : 'No Cabinet'}
                    </div>
                  </div>
                );
        }
      },
            {
              key: 'game_mix_id',
              label: 'Game Mix',
              render: (item) => {
                const gameMix = gameMixes.find(gm => gm.id === item.game_mix_id);
                const cabinet = cabinets.find(c => c.id === item.cabinet_id);
                return (
                  <div>
                    <div 
                      className={`clickable-filter ${selectedGameMixFilter === item.game_mix_id ? 'active-filter' : ''}`}
                      onClick={() => toggleGameMixFilter(item.game_mix_id)}
                      style={{ cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      {gameMix ? gameMix.name : 'N/A'}
                    </div>
                    <div 
                      className={`clickable-filter ${selectedCabinetFilter === item.cabinet_id ? 'active-filter' : ''}`}
                      onClick={() => toggleCabinetFilter(item.cabinet_id)}
                      style={{ fontSize: 12, cursor: 'pointer' }}
                    >
                      {cabinet && cabinet.model ? cabinet.model : 'No Model'}
                    </div>
                  </div>
                );
              }
            },
          { 
            key: 'property_details', 
            label: 'Property',
            render: (item) => {
          // 1. Dacă ownership_type este 'rent', afișează providerul de închiriere și contractul
          if (item.ownership_type === 'rent') {
            const rentProvider = providers.find(p => p.id === item.lease_provider_id);
            const contractNumber = item.lease_contract_number || (item.serial_number ? `RENT-${item.serial_number}-${new Date().getFullYear()}` : 'No Contract');
            return (
              <div className="property-cell">
                <div 
                  className={`property-primary clickable-filter ${selectedProviderFilter === item.lease_provider_id ? 'active-filter' : ''}`}
                  onClick={() => toggleProviderFilter(item.lease_provider_id)}
                  style={{ cursor: 'pointer' }}
                >
                  <span style={{fontSize:'1.1em'}}>📄</span> <strong>{rentProvider ? rentProvider.company_name : 'No Provider Selected'}</strong>
                </div>
                <div className="property-secondary">
                  <small 
                    className={`clickable-filter ${selectedContractFilter === contractNumber ? 'active-filter' : ''}`}
                    onClick={() => toggleContractFilter(contractNumber)}
                    title={`Click to filter by contract: ${contractNumber}`}
                  >
                    📋 {contractNumber}
                  </small>
                  {item.production_year && (
                    <small style={{ display: 'block', marginTop: '2px', color: 'var(--accent-color)', fontWeight: 'bold' }}>
                      🏭 {item.production_year}
                    </small>
                  )}
                  {/* Afișează facturile asociate */}
                  {(() => {
                    const associatedInvoices = invoices.filter(inv => 
                      inv.serial_numbers && inv.serial_numbers.includes(item.serial_number)
                    );
                    if (associatedInvoices.length > 0) {
                      return (
                        <div style={{ marginTop: '4px' }}>
                          {associatedInvoices.map((invoice, index) => (
                            <small 
                              key={invoice.id}
                              className={`clickable-filter ${selectedInvoiceFilter === invoice.invoice_number ? 'active-filter' : ''}`}
                              onClick={() => toggleInvoiceFilter(invoice.invoice_number)}
                              style={{ 
                                display: 'block', 
                                marginTop: '2px', 
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontSize: '0.8em'
                              }}
                              title={`Click to filter by invoice: ${invoice.invoice_number}`}
                            >
                              📄 {invoice.invoice_number}
                            </small>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })()}

                </div>
              </div>
            );
          }
          // 2. Dacă ownership_type este 'property', afișează compania proprietar
              if (item.ownership_type === 'property') {
                const company = companies.find(c => c.id === item.owner_company_id);
                return (
                  <div className="property-cell">
                    <div 
                      className={`property-primary clickable-filter ${selectedCompanyFilter === item.owner_company_id ? 'active-filter' : ''}`}
                      onClick={() => toggleCompanyFilter(item.owner_company_id)}
                      style={{ cursor: 'pointer' }}
                    >
                  <span style={{fontSize:'1.1em'}}>🏢</span> <strong>{company ? company.name : 'No Company Selected'}</strong>
                    </div>
                    <div className="property-secondary">
                  <small>Property Owned</small>
                  {item.production_year && (
                    <small style={{ display: 'block', marginTop: '2px', color: 'var(--accent-color)', fontWeight: 'bold' }}>
                      🏭 {item.production_year}
                    </small>
                  )}
                  {/* Afișează facturile asociate */}
                  {(() => {
                    const associatedInvoices = invoices.filter(inv => 
                      inv.serial_numbers && inv.serial_numbers.includes(item.serial_number)
                    );
                    if (associatedInvoices.length > 0) {
                      return (
                        <div style={{ marginTop: '4px' }}>
                          {associatedInvoices.map((invoice, index) => (
                            <small 
                              key={invoice.id}
                              className={`clickable-filter ${selectedInvoiceFilter === invoice.invoice_number ? 'active-filter' : ''}`}
                              onClick={() => toggleInvoiceFilter(invoice.invoice_number)}
                              style={{ 
                                display: 'block', 
                                marginTop: '2px', 
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontSize: '0.8em'
                              }}
                              title={`Click to filter by invoice: ${invoice.invoice_number}`}
                            >
                              📄 {invoice.invoice_number}
                            </small>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })()}
                    </div>
                  </div>
                );
          }
          // 3. Dacă nu există ownership_type, caută factura și afișează buyer/seller
          const invoice = invoices.find(inv => 
            inv.serial_numbers && inv.serial_numbers.includes(item.serial_number)
          );
          if (invoice) {
            const buyer = companies.find(c => c.id === invoice.buyer_id);
            const seller = companies.find(c => c.id === invoice.seller_id);
                return (
                  <div className="property-cell">
                    <div 
                  className={`property-primary clickable-filter ${selectedCompanyFilter === invoice.buyer_id ? 'active-filter' : ''}`}
                  onClick={() => toggleCompanyFilter(invoice.buyer_id)}
                      style={{ cursor: 'pointer' }}
                    >
                  <span style={{fontSize:'1.1em'}}>🏢</span> <strong>{buyer ? buyer.name : 'Unknown Buyer'}</strong>
                    </div>
                    <div className="property-secondary">
                      <small 
                    className={`clickable-filter ${selectedInvoiceFilter === invoice.invoice_number ? 'active-filter' : ''}`}
                    onClick={() => toggleInvoiceFilter(invoice.invoice_number)}
                    title={`Click to filter by invoice: ${invoice.invoice_number}`}
                  >
                    📄 {invoice.invoice_number}
                      </small>
                  {seller && (
                    <small style={{ marginLeft: '8px', color: 'var(--text-secondary)' }}>
                      → {seller.name}
                    </small>
                  )}
                  {item.production_year && (
                    <small style={{ display: 'block', marginTop: '2px', color: 'var(--accent-color)', fontWeight: 'bold' }}>
                      🏭 {item.production_year}
                    </small>
                  )}
                    </div>
                  </div>
                );
              }
          // 4. Dacă nu există nimic, fallback la Unknown
              return (
                <div className="property-cell">
              <div className="property-primary">❓ <strong>No Owner Info</strong></div>
              <div className="property-secondary">
                <small>Serial: {item.serial_number || 'N/A'}</small>
                {item.production_year && (
                  <small style={{ display: 'block', marginTop: '2px', color: 'var(--accent-color)', fontWeight: 'bold' }}>
                    🏭 {item.production_year}
                  </small>
                )}
                {/* Afișează facturile asociate */}
                {(() => {
                  const associatedInvoices = invoices.filter(inv => 
                    inv.serial_numbers && inv.serial_numbers.includes(item.serial_number)
                  );
                  if (associatedInvoices.length > 0) {
                    return (
                      <div style={{ marginTop: '4px' }}>
                        {associatedInvoices.map((invoice, index) => (
                          <small 
                            key={invoice.id}
                            className={`clickable-filter ${selectedInvoiceFilter === invoice.invoice_number ? 'active-filter' : ''}`}
                            onClick={() => toggleInvoiceFilter(invoice.invoice_number)}
                            style={{ 
                              display: 'block', 
                              marginTop: '2px', 
                              color: 'var(--text-secondary)',
                              cursor: 'pointer',
                              fontSize: '0.8em'
                            }}
                            title={`Click to filter by invoice: ${invoice.invoice_number}`}
                          >
                            📄 {invoice.invoice_number}
                          </small>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
                </div>
              );
            }
          },

          { 
            key: 'technical_specs', 
            label: 'Technical Specs',
            render: (item) => {
              const formatAmount = (amount) => {
                if (!amount) return '0,00';
                const num = parseFloat(amount);
                if (isNaN(num)) return '0,00';
                const formatted = num.toFixed(2);
                const parts = formatted.split('.');
                const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                return `${integerPart},${parts[1]}`;
              };
              
              return (
                <div className="tech-specs-cell">
                  <div className="spec-row">
                    <span className="spec-label">Denom:</span>
                    <span className="spec-value">{item.denomination ? formatAmount(item.denomination) : 'N/A'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Max Bet:</span>
                    <span className="spec-value">{item.max_bet ? formatAmount(item.max_bet) : 'N/A'}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">RTP:</span>
                    <span 
                      className={`spec-value clickable-filter ${selectedRTPFilter === item.rtp ? 'active-filter' : ''}`}
                      onClick={() => toggleRTPFilter(item.rtp)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.rtp ? `${item.rtp}%` : 'N/A'}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Places:</span>
                    <span 
                      className={`spec-value clickable-filter ${selectedPlacesFilter === item.gaming_places ? 'active-filter' : ''}`}
                      onClick={() => togglePlacesFilter(item.gaming_places)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.gaming_places || 'N/A'}
                    </span>
                  </div>
                </div>
              );
            }
      },
      // Add CVT Information column to slot machines table
                {
            key: 'cvt_information',
            label: 'CVT Information',
            render: (item) => {
              // Find metrology record for this slot with proper multi-serial handling
              const metrologyItem = metrology.find(m => {
                if (!m.serial_number) {
                  return false;
                }
                
                // Try both newline and space separation
                const serialNumbersNewline = m.serial_number.split('\n').filter(s => s.trim());
                const serialNumbersSpace = m.serial_number.split(' ').filter(s => s.trim());
                
                // Use the one that has more items (more likely to be correct)
                const serialNumbers = serialNumbersNewline.length > serialNumbersSpace.length ? 
                  serialNumbersNewline : serialNumbersSpace;
                
                return serialNumbers.includes(item.serial_number);
              });
              
              const cvtDate = metrologyItem?.cvt_expiry_date;
              const cvtType = metrologyItem?.cvt_type;
              
              if (!cvtDate && !cvtType) {
                return <span style={{ color: '#6b7280', fontStyle: 'italic' }}>No CVT Data</span>;
              }
              
              // Calculate days remaining
          let daysLeft = null;
          if (cvtDate) {
            const cvtExpiryDate = new Date(cvtDate);
            const now = new Date();
            const diff = Math.floor((cvtExpiryDate - now) / (1000 * 60 * 60 * 24));
            daysLeft = diff > 0 ? diff : 0;
          }
          
          // Color coding for days remaining
          let daysColor = '#10b981'; // Green for > 90 days
          if (daysLeft !== null) {
            if (daysLeft <= 30) {
              daysColor = '#ef4444'; // Red for ≤ 30 days
            } else if (daysLeft <= 90) {
              daysColor = '#f59e0b'; // Yellow for 31-90 days
            }
          }
          
          // Type colors
          const typeColors = {
            'periodic': { bg: '#dbeafe', text: '#1e40af', icon: '🔄' },
            'reparation': { bg: '#fef3c7', text: '#d97706', icon: '🔧' }
          };
          
          const colorScheme = typeColors[cvtType] || { bg: '#f3f4f6', text: '#6b7280', icon: '❓' };
          
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Row 1: CVT Type */}
              {cvtType && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backgroundColor: colorScheme.bg,
                  color: colorScheme.text,
                  fontSize: '0.85em',
                  fontWeight: '500',
                  width: 'fit-content'
                }}>
                  <span>{colorScheme.icon}</span>
                  <span style={{ textTransform: 'capitalize' }}>{cvtType}</span>
                </div>
              )}
              
              {/* Row 2: CVT Expiry Date */}
              {cvtDate && (
                <div 
                  className={`clickable-filter ${selectedCvtDateFilter === cvtDate ? 'active-filter' : ''}`}
                  onClick={() => toggleCvtDateFilter(cvtDate)}
                  style={{ 
                    fontSize: '0.9em', 
                    fontWeight: '500',
                    cursor: 'pointer',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s'
                  }}
                >
                  📅 {new Date(cvtDate).toLocaleDateString()}
                </div>
              )}
              
              {/* Row 3: Days Left */}
              {daysLeft !== null && (
                <div style={{
                  textAlign: 'center', 
                  color: daysColor,
                  fontWeight: 'bold',
                  fontSize: '1.1em',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  backgroundColor: daysColor === '#ef4444' ? 'rgba(239, 68, 68, 0.1)' : 
                                          daysColor === '#f59e0b' ? 'rgba(245, 158, 11, 0.1)' : 
                                          'rgba(16, 185, 129, 0.1)',
                  width: 'fit-content'
                }}>
                  {daysLeft} days left
                </div>
              )}
            </div>
          );
        }
      },
      {
        key: 'jackpots',
        label: 'Jackpots',
        render: (item) => {
          // Caută toate jackpoturile care conțin serialul slotului
          const associatedJackpots = jackpots.filter(jp => {
            if (!jp.serial_numbers) return false;
            // Acceptă delimitare cu spațiu sau newline
            const serials = jp.serial_numbers.split(/\s|\n/).filter(s => s.trim());
            return serials.includes(item.serial_number);
          });
          
          if (associatedJackpots.length === 0) {
            return <span style={{ color: '#aaa', fontStyle: 'italic' }}>No Jackpot</span>;
          }
          
          // Dacă este un singur jackpot, afișează doar numele
          if (associatedJackpots.length === 1) {
            return (
              <span style={{ 
                color: '#007bff', 
                cursor: 'pointer',
                textDecoration: 'underline',
                fontWeight: '500'
              }} onClick={() => setSelectedJackpots(associatedJackpots)}>
                {associatedJackpots[0].jackpot_name || 'No Name'}
              </span>
            );
          }
          
          // Dacă sunt multiple jackpots, afișează "Multiple Jackpots" clicabil
          return (
            <span style={{ 
              color: '#007bff', 
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: '500'
            }} onClick={() => setSelectedJackpots(associatedJackpots)}>
              Multiple Jackpots ({associatedJackpots.length})
            </span>
          );
        }
      },
    ];

    switch (activeView) {
      case 'dashboard':
        return renderDashboard();
      case 'companies':
        return renderTable('Companies', companies, [
          { 
            key: 'avatar', 
            label: 'Logo',
            render: (item) => (
                              <AvatarDisplay entityType="companies" entityId={item.id} size={50} entityName={item.name} />
            )
          },
          { key: 'name', label: 'Company Name' },
          { key: 'registration_number', label: 'Registration' },
          { key: 'contact_person', label: 'Contact Person' },
          { 
            key: 'email', 
            label: 'Email',
            render: (item) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>📧</span>
                <span>{item.email || 'N/A'}</span>
              </div>
            )
          },
          { 
            key: 'phone', 
            label: 'Phone',
            render: (item) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>📞</span>
                <span>{item.phone || 'N/A'}</span>
              </div>
            )
          }
        ], { 
          onAdd: () => handleAddEntity('companies'),
          onEdit: (item) => handleEditEntity(item, 'companies'),
          onDelete: (id) => handleDeleteEntity(id, 'companies'),
          onBulkEdit: () => handleBulkEdit('companies'),
          onBulkDelete: () => handleBulkDelete('companies'),
          onExport: () => handleExport('companies'),
          onImport: () => handleImport('companies')
        }, 'companies');
      case 'locations':
        return renderTable('Locations', locations, [
          { 
            key: 'avatar', 
            label: 'Avatar',
            render: (item) => (
                              <AvatarDisplay entityType="locations" entityId={item.id} size={50} entityName={item.name} />
            )
          },
          { key: 'name', label: 'Location Name' },
          { key: 'address', label: 'Address' },
          { key: 'city', label: 'City' },
          { key: 'county', label: 'County' },
          { 
            key: 'coordinates', 
            label: 'Coordinates',
            render: (item) => item.latitude && item.longitude ? 
              `${item.latitude.toFixed(4)}, ${item.longitude.toFixed(4)}` : 'N/A'
          },
          { 
            key: 'contact_person', 
            label: 'Contact Person',
            render: (item) => {
              // Dacă contact_person_id există, caută user-ul
              if (item.contact_person_id) {
                const contactUser = users.find(u => u.id === item.contact_person_id);
                if (contactUser) {
              return (
                <div>
                      <div style={{ fontWeight: 'bold' }}>
                        {contactUser.first_name && contactUser.last_name ? 
                          `${contactUser.first_name} ${contactUser.last_name}` : 
                          contactUser.username}
                      </div>
                      <div style={{ fontSize: '0.8em', color: 'var(--text-secondary)' }}>
                        📧 {contactUser.email || 'N/A'} | 📞 {contactUser.phone || 'N/A'}
                  </div>
                </div>
              );
            }
              }
              // Dacă nu există contact_person_id, afișează contact_person ca text
              return item.contact_person ? (
                <div>
                  <div style={{ fontWeight: 'bold' }}>
                    {item.contact_person}
                  </div>
                  <div style={{ fontSize: '0.8em', color: 'var(--text-secondary)' }}>
                    📧 {item.contact_email || 'N/A'} | 📞 {item.contact_phone || 'N/A'}
                  </div>
                </div>
              ) : 'No contact person';
            }
          }
        ], { 
          onAdd: () => handleAddEntity('locations'),
          onEdit: (item) => handleEditEntity(item, 'locations'),
          onDelete: (id) => handleDeleteEntity(id, 'locations'),
          onBulkEdit: () => handleBulkEdit('locations'),
          onBulkDelete: () => handleBulkDelete('locations'),
          onExport: () => handleExport('locations'),
          onImport: () => handleImport('locations')
        }, 'locations');
      case 'providers':
        return renderTable('Providers', providers, [
          {
            key: 'avatar',
            label: 'Avatar',
            render: (item) => (
              <div className="provider-avatar-cell">
                <AvatarDisplay entityType="providers" entityId={item.id} size={50} entityName={item.name || 'Unknown Provider'} />
              </div>
            )
          },
          { key: 'name', label: 'Provider Name' },
          { key: 'company_name', label: 'Company' },
          { key: 'contact_person', label: 'Contact Person' },
          { 
            key: 'email', 
            label: 'Email',
            render: (item) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>📧</span>
                <span>{item.email || 'N/A'}</span>
              </div>
            )
          },
          {
            key: 'website',
            label: 'Website',
            render: (item) => item.website ?
              <a href={item.website} target="_blank" rel="noopener noreferrer" className="link">
                {item.website}
              </a> : 'N/A'
          }
        ], {
          onAdd: () => handleAddEntity('providers'),
          onEdit: (item) => handleEditEntity(item, 'providers'),
          onDelete: (id) => handleDeleteEntity(id, 'providers')
        });
      case 'cabinets':
        return renderTable('Cabinets', cabinets, [
                      { key: 'logo', label: 'Logo', render: (item) => <AvatarDisplay entityType="cabinets" entityId={item.id} size={50} entityName={item.name} /> },
          { key: 'name', label: 'Name' },
          { key: 'model', label: 'Model' },
          { key: 'provider_id', label: 'Provider', render: (item) => {
              const provider = providers.find(p => p.id === item.provider_id);
              return provider ? provider.name : 'N/A';
          } },
        ], {
          onAdd: () => handleAddEntity('cabinets'),
          onEdit: (item) => handleEditEntity(item, 'cabinets'),
          onDelete: (id) => handleDeleteEntity(id, 'cabinets'),
          onBulkEdit: () => handleBulkEdit('cabinets'),
          onBulkDelete: () => handleBulkDelete('cabinets'),
          onExport: () => handleExport('cabinets'),
          onImport: () => handleImport('cabinets')
        }, 'cabinets');
      case 'slots': {
        // Show only active slots (including those without status set)
        const activeSlots = slotMachines.filter(s => s.status !== 'inactive');
        const activeCount = activeSlots.length;
        return renderTable(`Slot Machines (${activeCount} active)`, activeSlots, slotColumns, {
          onAdd: () => handleAddEntity('slots'),
          onEdit: (item) => handleEditEntity(item, 'slots'),
          onDelete: (id) => handleDeleteEntity(id, 'slots'),
          onBulkEdit: () => handleBulkEdit('slots'),
          onBulkDelete: () => handleBulkDelete('slots'),
          onBulkDuplicate: () => handleBulkDuplicate('slots'),
          onExport: () => handleExport('slots'),
          onImport: () => handleImport('slots')
        }, 'slots');
      }
      case 'warehouse': {
        // Show only inactive slots
        const warehouseSlots = slotMachines.filter(s => s.status === 'inactive');
        const warehouseCount = warehouseSlots.length;
        return renderTable(`Warehouse (${warehouseCount} inactive)`, warehouseSlots, slotColumns, {
          onAdd: () => handleAddEntity('slots'),
          onEdit: (item) => handleEditEntity(item, 'slots'),
          onDelete: (id) => handleDeleteEntity(id, 'slots'),
          onBulkEdit: () => handleBulkEdit('slots'),
          onBulkDelete: () => handleBulkDelete('slots'),
          onBulkDuplicate: () => handleBulkDuplicate('slots'),
          onExport: () => handleExport('slots'),
          onImport: () => handleImport('slots')
        }, 'slots');
      }
      case 'metrology': {
        // REDIRECT TO METROLOGY 2 - THE ONLY CORRECT METROLOGY TABLE
        return (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            <h3>⚠️ Metrology Table Deprecated</h3>
            <p>This table has been replaced by Metrology 2. Please use the Metrology 2 section instead.</p>
            <button 
              className="btn-primary"
              onClick={() => setActiveView('metrology2')}
              style={{ marginTop: '20px' }}
            >
              Go to Metrology 2
            </button>
          </div>
        );
      }
      case 'metrology2': {
        const selectedMetrologyItems = selectedItems.filter(id => metrology.some(item => item.id === id));
        const hasSelectedItems = selectedMetrologyItems.length > 0;
        
        return (
          <div className="table-container">
            <div className="table-header">
              <h2>Metrology 2 - CVT Data Administration</h2>
              <div className="table-actions">
                {hasSelectedItems && (
                  <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    alignItems: 'center',
                    background: 'var(--bg-primary)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                    marginRight: '12px'
                  }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {selectedMetrologyItems.length} selected
                    </span>
                    <button 
                      className="btn-secondary"
                      onClick={() => handleBulkEdit('metrology')}
                      style={{ fontSize: '0.85rem', padding: '4px 8px' }}
                    >
                      ✏️ Bulk Edit
                    </button>
                    <button 
                      className="btn-danger"
                      onClick={() => handleBulkDelete('metrology')}
                      style={{ fontSize: '0.85rem', padding: '4px 8px' }}
                    >
                      🗑️ Bulk Delete
                    </button>
                  </div>
                )}
                <button 
                  className="btn-primary"
                  onClick={() => handleAddEntity('metrology')}
                >
                  <span className="icon">➕</span>
                  Add CVT Date
                </button>
              </div>
            </div>
            
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ width: '40px' }}>
                      <input
                        type="checkbox"
                        checked={metrology.length > 0 && selectedMetrologyItems.length === metrology.length}
                        onChange={(e) => handleSelectAll(metrology, e.target.checked)}
                        style={{ cursor: 'pointer' }}
                      />
                    </th>
                    <th>#</th>
                    <th>Certificate Number</th>
                    <th>Certificate Type</th>
                    <th>Issue Date</th>
                    <th>CVT Type</th>
                    <th>CVT End Date</th>
                    <th>Number of Slots</th>
                    <th>Created At</th>
                    <th>Created By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {metrology.map((item, index) => {
                    const createdByUser = users.find(user => user.id === item.created_by || user.username === item.created_by);
                    const daysUntilExpiry = item.cvt_expiry_date ? 
                      Math.ceil((new Date(item.cvt_expiry_date) - new Date()) / (1000 * 60 * 60 * 24)) : null;
                    const isSelected = selectedItems.includes(item.id);
                    
                    return (
                      <tr 
                        key={item.id}
                        style={{ 
                          backgroundColor: isSelected ? 'var(--accent-color)' : 'transparent',
                          opacity: isSelected ? 0.9 : 1
                        }}
                      >
                        <td>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => handleItemSelection(item.id, e.target.checked)}
                            style={{ cursor: 'pointer' }}
                          />
                        </td>
                        <td>{index + 1}</td>
                        <td>
                          <strong>{item.certificate_number || 'N/A'}</strong>
                        </td>
                        <td>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            🔧 {item.certificate_type || 'N/A'}
                          </span>
                        </td>
                        <td>{item.issue_date ? new Date(item.issue_date).toLocaleDateString() : 'N/A'}</td>
                        <td>
                          <span style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '4px',
                            color: item.cvt_type === 'periodic' ? '#007bff' : '#dc3545'
                          }}>
                            {item.cvt_type === 'periodic' ? '🔄' : '🔧'} {item.cvt_type || 'N/A'}
                          </span>
                        </td>
                        <td>
                          {item.cvt_expiry_date ? (
                            <div>
                              <div style={{ fontWeight: 'bold' }}>
                                {new Date(item.cvt_expiry_date).toLocaleDateString()}
                              </div>
                              {(() => {
                                const daysUntilExpiry = Math.ceil((new Date(item.cvt_expiry_date) - new Date()) / (1000 * 60 * 60 * 24));
                                return (
                                  <div style={{ 
                                    fontSize: '0.9em',
                                    color: daysUntilExpiry <= 30 ? '#dc3545' : daysUntilExpiry <= 90 ? '#ffc107' : '#28a745',
                                    fontWeight: 'bold'
                                  }}>
                                    {daysUntilExpiry > 0 ? `${daysUntilExpiry} days left` : `${Math.abs(daysUntilExpiry)} days overdue`}
                                  </div>
                                );
                              })()}
                            </div>
                          ) : 'N/A'}
                        </td>

                        <td>
                          <span style={{ 
                            backgroundColor: 'var(--accent-color)', 
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.9em',
                            fontWeight: 'bold'
                          }}>
                            {item.serial_number ? item.serial_number.split('\n').filter(s => s.trim()).length : 0} slots
                          </span>
                        </td>
                        <td>{item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}</td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <AvatarDisplay 
                              entityType="users" 
                              entityId={item.created_by} 
                              size={24} 
                              entityName={createdByUser?.first_name && createdByUser?.last_name ? 
                                `${createdByUser.first_name} ${createdByUser.last_name}` : 
                                createdByUser?.username || 'Unknown User'}
                            />
                            <span>
                              {createdByUser?.first_name && createdByUser?.last_name ? 
                                `${createdByUser.first_name} ${createdByUser.last_name}` : 
                                createdByUser?.username || 'Unknown User'}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button 
                              className="btn-edit"
                              onClick={() => handleEditEntity(item, 'metrology')}
                              title="Edit CVT Date"
                            >
                              ✏️
                            </button>
                            <button 
                              className="btn-delete"
                              onClick={() => handleDeleteEntity(item.id, 'metrology')}
                              title="Delete CVT Date"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              
              {metrology.length === 0 && (
                <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                  <h3>No CVT Records Found</h3>
                  <p>Use the "Add CVT Date" button to create your first CVT record.</p>
                </div>
              )}
            </div>
          </div>
        );
      }
              case 'jackpots': {
          return renderTable('Jackpot Records', jackpots, [
            { key: 'slot_count', label: 'NUMBER OF SLOTS', render: (item) => {
              if (!item.serial_numbers) return (
                <span style={{ 
                  backgroundColor: 'var(--accent-color)', 
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.9em',
                  fontWeight: 'bold'
                }}>
                  0 slots
                </span>
              );
              const serials = item.serial_numbers.split(/\s|\n/).filter(s => s.trim());
              return (
                <span style={{ 
                  backgroundColor: 'var(--accent-color)', 
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.9em',
                  fontWeight: 'bold'
                }}>
                  {serials.length} slots
                </span>
              );
            }},
            { key: 'jackpot_name', label: 'Jackpot Name', render: (item) => (
              <span 
                style={{ 
                  color: '#007bff', 
                  cursor: 'pointer', 
                  textDecoration: 'underline',
                  fontWeight: '500'
                }} 
                onClick={() => setSelectedJackpots([item])}
              >
                {item.jackpot_name || 'No Name'}
              </span>
            )},
            { key: 'jackpot_type', label: 'Type', render: (item) => {
              const typeColors = {
                'Progressive': '📈',
                'Fixed': '💰',
                'Mystery': '🎭'
              };
              return (
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {typeColors[item.jackpot_type] || '🎰'} {item.jackpot_type}
                </span>
              );
            }},
            { key: 'levels', label: 'Levels', render: (item) => {
              const levels = [item.level_1, item.level_2, item.level_3, item.level_4, item.level_5];
              const validLevels = levels.filter(level => level !== null && level !== undefined && level !== '');
              if (validLevels.length === 0) return 'N/A';
              
              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {validLevels.map((level, index) => (
                    <div key={index} style={{ 
                      padding: '2px 6px', 
                      background: 'var(--glass-bg)', 
                      borderRadius: '3px',
                      fontSize: '11px',
                      fontWeight: '400',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)'
                    }}>
                      Level {index + 1}: {level}
                    </div>
                  ))}
                </div>
              );
            }},
            { key: 'increment_percentage', label: 'Increment Rate', render: (item) => typeof item.increment_percentage === 'number' ? `${item.increment_percentage}%` : 'N/A' },
            { key: 'details', label: 'Description', render: (item) => item.details || 'N/A' }
          ], { 
            onAdd: () => handleAddEntity('jackpots'),
            onEdit: (item) => handleEditEntity(item, 'jackpots'),
            onDelete: (id) => handleDeleteEntity(id, 'jackpots'),
            onBulkEdit: () => handleBulkEdit('jackpots'),
            onBulkDelete: () => handleBulkDelete('jackpots'),
            onExport: () => handleExport('jackpots'),
            onImport: () => handleImport('jackpots')
          }, 'jackpots');
        }
      case 'gamemixes':
        return renderTable('Game Mixes', gameMixes, [
          {
            key: 'avatar',
            label: 'Avatar',
            render: (item) => (
              <AvatarDisplay entityType="game_mixes" entityId={item.id} size={80} rectangular={true} entityName={item.name} />
            )
          },
          { key: 'name', label: 'Mix Name' },
          { key: 'description', label: 'Description' },
          {
            key: 'provider_id',
            label: 'Provider',
            render: (item) => {
              const provider = providers.find(p => p.id === item.provider_id);
              return provider ? provider.name : 'Unknown Provider';
            }
          },
          { key: 'games', label: 'Games', render: (item) => (item.games || []).join(', ') },
          {
            key: 'campus_web',
            label: 'Campus Web',
            render: (item) => {
              if (item.campus_web && item.campus_web.startsWith('https://')) {
                return (
                  <a 
                    href={item.campus_web} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link"
                    style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
                  >
                    🌐 {item.campus_web}
                  </a>
                );
              }
              return item.campus_web || 'N/A';
            }
          }
        ], {
          onAdd: () => handleAddEntity('gamemixes'),
          onEdit: (item) => handleEditEntity(item, 'gamemixes'),
          onDelete: (id) => handleDeleteEntity(id, 'gamemixes')
        });
      case 'invoices':
        return renderTable('Invoices', invoices, [
          { 
            key: 'invoice_number', 
            label: 'Invoice Number',
            render: (item) => (
              <span 
                className="clickable-invoice-number" 
                onClick={() => handleInvoiceClick(item)}
                style={{ cursor: 'pointer', color: 'var(--accent-color)', textDecoration: 'underline' }}
              >
                {item.invoice_number}
              </span>
            )
          },
          { 
            key: 'buyer_id', 
            label: 'Buyer',
            render: (item) => {
              const buyer = companies.find(c => c.id === item.buyer_id);
              return (
                <div>
                  <div style={{ fontWeight: 'bold' }}>
                    {buyer ? buyer.name : 'Unknown Buyer'}
                  </div>
                  <div style={{ fontSize: '0.8em', color: 'var(--text-secondary)' }}>
                    {buyer ? buyer.contact_person || 'No contact person' : 'N/A'}
                  </div>
                </div>
              );
            }
          },
          { 
            key: 'seller_id', 
            label: 'Seller',
            render: (item) => {
              const seller = providers.find(p => p.id === item.seller_id);
              return (
                <div>
                  <div style={{ fontWeight: 'bold' }}>
                    {seller ? seller.name : 'Unknown Seller'}
                  </div>
                  <div style={{ fontSize: '0.8em', color: 'var(--text-secondary)' }}>
                    {seller ? seller.contact_person || 'No contact person' : 'N/A'}
                  </div>
                </div>
              );
            }
          },
          { 
            key: 'location', 
            label: 'Location',
            render: (item) => {
              // Find location based on serial numbers in the invoice
              let location = null;
              if (item.serial_numbers) {
                const serialArray = item.serial_numbers.split(' ').filter(s => s.trim());
                if (serialArray.length > 0) {
                  // Find the first slot machine with matching serial number
                  const slotMachine = slotMachines.find(slot => 
                    serialArray.includes(slot.serial_number)
                  );
                  if (slotMachine) {
                    location = locations.find(l => l.id === slotMachine.location_id);
                  }
                }
              }
              
              // Fallback to direct location_id if no slot machine found
              if (!location && item.location_id) {
                location = locations.find(l => l.id === item.location_id);
              }
              
              return (
                <div>
                  <div style={{ fontWeight: 'bold' }}>
                    {location ? location.name : 'No location'}
                  </div>
                  <div style={{ fontSize: '0.8em', color: 'var(--text-secondary)' }}>
                    {location ? `${location.city}, ${location.county}` : 'N/A'}
                  </div>
                </div>
              );
            }
          },
          { 
            key: 'issue_date', 
            label: 'Issue Date',
            render: (item) => new Date(item.issue_date).toLocaleDateString()
          },
          { 
            key: 'due_date', 
            label: 'Due Date',
            render: (item) => new Date(item.due_date).toLocaleDateString()
          },
          { 
            key: 'amount', 
            label: 'Amount',
            render: (item) => {
              const formatAmount = (amount) => {
                if (!amount) return '0,00';
                const num = parseFloat(amount);
                if (isNaN(num)) return '0,00';
                const formatted = num.toFixed(2);
                const parts = formatted.split('.');
                const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                return `${integerPart},${parts[1]}`;
              };
              return formatAmount(item.amount);
            }
          },
          { 
            key: 'status', 
            label: 'Status',
            render: (item) => {
              const statusColors = {
                'paid': '🟢',
                'pending': '🟡',
                'overdue': '🔴',
                'cancelled': '⚫'
              };
              return (
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  fontWeight: 'bold'
                }}>
                  {statusColors[item.status] || '⚪'} {item.status || 'Unknown'}
                </span>
              );
            }
          },

          { 
            key: 'slot_count', 
            label: 'NUMBER OF SLOTS', 
            render: (item) => {
              if (!item.serial_numbers) return (
                <span style={{ 
                  backgroundColor: 'var(--accent-color)', 
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.9em',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }} onClick={() => setSelectedInvoiceSlots([])}>
                  0 slots
                </span>
              );
              const serials = item.serial_numbers.split(/\s|\n/).filter(s => s.trim());
              const associatedSlots = slotMachines.filter(slot => 
                serials.includes(slot.serial_number)
              );
              return (
                <span 
                  style={{ 
                    backgroundColor: 'var(--accent-color)', 
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.9em',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }} 
                  onClick={() => setSelectedInvoiceSlots(associatedSlots)}
                  title="Click to view slot details"
                >
                  {serials.length} slots
                </span>
              );
            }
          },
          { 
            key: 'description', 
            label: 'Description',
            render: (item) => {
              const cleanDescription = (description) => {
                if (!description) return 'No description';
                return description
                  .replace(/€/g, '')
                  .replace(/EUR/g, '')
                  .replace(/\s+/g, ' ')
                  .trim();
              };
              return cleanDescription(item.description);
            }
          }
        ], { 
          onAdd: () => handleAddEntity('invoices'),
          onEdit: (item) => handleEditEntity(item, 'invoices'),
          onDelete: (id) => handleDeleteEntity(id, 'invoices'),
          onBulkEdit: () => handleBulkEdit('invoices'),
          onBulkDelete: () => handleBulkDelete('invoices'),
          onExport: () => handleExport('invoices'),
          onImport: () => handleImport('invoices')
        });
      case 'onjn':
        return renderTable('ONJN Reports', onjnReports, [
          { key: 'report_number', label: 'Report Number' },
          { key: 'report_type', label: 'Type' },
          { 
            key: 'report_date', 
            label: 'Report Date',
            render: (item) => new Date(item.report_date).toLocaleDateString()
          },
          { 
            key: 'submission_date', 
            label: 'Submitted',
            render: (item) => item.submission_date ? 
              new Date(item.submission_date).toLocaleDateString() : 'Not submitted'
          }
        ], { 
          onAdd: () => handleAddEntity('onjn'),
          onEdit: (item) => handleEditEntity(item, 'onjn'),
          onDelete: (id) => handleDeleteEntity(id, 'onjn'),
          onBulkEdit: () => handleBulkEdit('onjn'),
          onBulkDelete: () => handleBulkDelete('onjn'),
          onExport: () => handleExport('onjn'),
          onImport: () => handleImport('onjn')
        });
      case 'legal':
        return renderTable('Legal Documents', legalDocuments, [
          { key: 'title', label: 'Document Title' },
          { key: 'document_type', label: 'Type' },
          { key: 'issuing_authority', label: 'Issuing Authority' },
          { 
            key: 'issue_date', 
            label: 'Issue Date',
            render: (item) => new Date(item.issue_date).toLocaleDateString()
          },
          { 
            key: 'expiry_date', 
            label: 'Expiry Date',
            render: (item) => item.expiry_date ? 
              new Date(item.expiry_date).toLocaleDateString() : 'No expiry'
          }
        ], { 
          onAdd: () => handleAddEntity('legal'),
          onEdit: (item) => handleEditEntity(item, 'legal'),
          onDelete: (id) => handleDeleteEntity(id, 'legal'),
          onBulkEdit: () => handleBulkEdit('legal'),
          onBulkDelete: () => handleBulkDelete('legal'),
          onExport: () => handleExport('legal'),
          onImport: () => handleImport('legal')
        });
      case 'users':
        return renderTable('Users', users, [
          { 
            key: 'avatar', 
            label: 'Avatar',
            render: (item) => (
                              <AvatarDisplay entityType="users" entityId={item.id} size={50} entityName={`${item.first_name} ${item.last_name}`} />
            )
          },
          { 
            key: 'username', 
            label: 'Name',
            render: (item) => (
              <div>
                <div style={{ fontWeight: 'bold' }}>
                  {item.first_name && item.last_name ? `${item.first_name} ${item.last_name}` : item.username || 'N/A'}
                </div>
                <div style={{ fontSize: '0.8em', color: 'var(--text-secondary)' }}>
                  {item.username || 'No username'}
                </div>
              </div>
            )
          },
          { 
            key: 'email', 
            label: 'Email',
            render: (item) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>📧</span>
                <span>{item.email || 'N/A'}</span>
              </div>
            )
          },
          { 
            key: 'phone', 
            label: 'Phone',
            render: (item) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>📞</span>
                <span>{item.phone || 'N/A'}</span>
              </div>
            )
          },
          { key: 'role', label: 'Role' },
          { 
            key: 'assigned_locations', 
            label: 'Assigned Locations',
            render: (item) => {
              if (item.role === 'admin') return 'All Locations';
              if (!item.assigned_locations || item.assigned_locations.length === 0) return 'No Locations';
              return `${item.assigned_locations.length} Location(s)`;
            }
          },
          { 
            key: 'created_at', 
            label: 'Created',
            render: (item) => new Date(item.created_at).toLocaleDateString()
          },
          { 
            key: 'is_active', 
            label: 'Active',
            render: (item) => item.is_active ? 'Yes' : 'No'
          }
        ], { 
          onAdd: () => {
            setEditingUser(null);
            setShowUserForm(true);
          },
          onEdit: handleEditUser,
          onDelete: (id) => handleDeleteEntity(id, 'users'),
          onBulkEdit: () => handleBulkEdit('users'),
          onBulkDelete: () => handleBulkDelete('users'),
          onExport: () => handleExport('users'),
          onImport: () => handleImport('users')
        });
      default:
        return renderDashboard();
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className={`app-layout ${theme}`}>
      {/* Unified Header */}
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <h2>CASHPOT</h2>
            <span className="header-subtitle">Gaming Management System</span>
          </div>
        </div>
        <div className="header-right">
          <button 
            className="theme-toggle"
            onClick={() => {
              const themes = ['light', 'dark', 'dark-gambling'];
              const currentIndex = themes.indexOf(theme);
              const nextIndex = (currentIndex + 1) % themes.length;
              setTheme(themes[nextIndex]);
            }}
            title={`Current: ${theme}. Click to cycle themes`}
          >
            {theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '🎰'}
          </button>
          <div className="header-user-info">
            <div className="header-user-avatar">
              {avatar ? (
                <img
                  src={`data:${avatar.mime_type};base64,${avatar.file_data}`}
                  alt="User Avatar"
                  className="user-avatar-img"
                />
              ) : (
                <div className="user-avatar-placeholder">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="header-user-details">
              <span className="header-user-name">
                {user?.first_name && user?.last_name 
                  ? `${user.first_name} ${user.last_name}` 
                  : user?.username}
              </span>
              <span className="header-user-role">{user?.role}</span>
            </div>
          </div>
          <button onClick={logout} className="header-logout-btn" title="Logout">
            ⏻
          </button>
        </div>
      </div>

      {/* Layout Container */}
      <div className="layout-container">
        {/* Sidebar */}
        <div className="sidebar">
        <nav className="sidebar-nav">
          {navigationItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => setActiveView(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.count !== undefined && (
                <span className="nav-count">{item.count}</span>
              )}
            </button>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
                <span className="user-name">
                  {user?.first_name && user?.last_name 
                    ? `${user.first_name} ${user.last_name}` 
                    : user?.username}
                </span>
              <span className="user-role">{user?.role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-body">
          {renderContent()}
        </div>
      </div>
      </div> {/* Close layout-container */}
      
      {/* Entity Form Modal */}
      {showEntityForm && (
        <EntityForm
          entityType={entityType}
          entity={editingEntity}
          onSave={handleSaveEntity}
          onClose={handleCloseEntityForm}
          companies={companies}
          locations={locations}
          providers={providers}
          cabinets={cabinets}
          gameMixes={gameMixes}
          invoices={invoices}
          users={users}
          slotMachines={slotMachines}
        />
      )}

      {/* Bulk Edit Form Modal */}
      {showBulkEditForm && (
        <BulkEditForm
          entityType={bulkEditType}
          selectedItems={selectedItems}
          onSave={handleBulkEditSave}
          onClose={() => setShowBulkEditForm(false)}
          companies={companies}
          locations={locations}
          providers={providers}
          cabinets={cabinets}
          gameMixes={gameMixes}
          slotMachines={slotMachines}
        />
      )}
      
      {/* User Edit Modal */}
      {showUserForm && (
        <UserEditForm
          user={editingUser}
          onSave={handleSaveUser}
          onClose={handleCloseUserForm}
          companies={companies}
          locations={locations}
        />
      )}

      {/* Invoice Popup Modal */}
              {showInvoicePopup && (
          <InvoicePopup 
            invoice={selectedInvoice} 
            onClose={handleCloseInvoicePopup} 
          />
        )}
        {showAddCvtDatePopup && (
          <AddCvtDatePopup 
            onClose={handleCloseAddCvtDatePopup} 
          />
        )}
        
        {/* Jackpot Popup Modal */}
                {selectedJackpots && (
          <JackpotPopup 
            jackpots={selectedJackpots}
            onClose={handleCloseJackpotPopup}
          />
        )}
        
        {selectedInvoiceSlots && (
          <InvoiceSlotsPopup 
            slots={selectedInvoiceSlots}
            onClose={handleCloseInvoiceSlotsPopup}
          />
        )}

        {/* Slot Attachments Modal */}
        {showSlotAttachmentsModal && selectedSlotId && (
          <div className="modal-backdrop" onClick={handleCloseSlotAttachments}>
            <div className="modal-content" style={{ maxWidth: 500, margin: '10vh auto', position: 'relative' }} onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Atașamente Slot</h2>
                <button className="modal-close" onClick={handleCloseSlotAttachments}>&times;</button>
              </div>
              <FileDisplay entityType="slots" entityId={selectedSlotId} />
            </div>
          </div>
        )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading application...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {user ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;

// Adaug componenta GameMixAvatar sub AvatarDisplay
function GameMixAvatar({ entityId, name }) {
  const { avatar, loading } = useAvatar('game_mixes', entityId);
  if (loading) return <div style={{ width: 20, height: 95 }} />;
  if (avatar) {
    return <img src={`data:${avatar.mime_type};base64,${avatar.file_data}`} alt="Avatar" style={{ width: 20, height: 95, objectFit: 'cover', borderRadius: 4 }} />;
  }
  // Fallback: background albastru cu text alb, font fix
  
  return (
    <div style={{ 
      width: 20, 
      height: 95, 
      background: '#1976d2', 
      color: '#ffffff', 
      fontWeight: 'bold', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 4, 
      lineHeight: '1.1'
    }}>
      {name}
    </div>
  );
}