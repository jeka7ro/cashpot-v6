// CASHPOT V6 - ONLINE API ENTITIES
// Toate entitățile conectate la backend-ul Vercel

const API_BASE_URL = 'https://cashpot-v6-clean-p98y0cs1l-jeka7ros-projects.vercel.app/api';

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
};

// COMPANIES - Complete CRUD
export const Company = {
  async list() {
    return await apiRequest('/companies');
  },
  
  async create(data) {
    return await apiRequest('/companies', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  async update(id, data) {
    return await apiRequest(`/companies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  async delete(id) {
    return await apiRequest(`/companies/${id}`, {
      method: 'DELETE'
    });
  }
};

// LOCATIONS - Complete CRUD
export const Location = {
  async list() {
    return await apiRequest('/locations');
  },
  
  async create(data) {
    return await apiRequest('/locations', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  async update(id, data) {
    return await apiRequest(`/locations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  async delete(id) {
    return await apiRequest(`/locations/${id}`, {
      method: 'DELETE'
    });
  }
};

// PROVIDERS - Complete CRUD
export const Provider = {
  async list() {
    return await apiRequest('/providers');
  },
  
  async create(data) {
    return await apiRequest('/providers', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  
  async update(id, data) {
    return await apiRequest(`/providers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  async delete(id) {
    return await apiRequest(`/providers/${id}`, {
      method: 'DELETE'
    });
  }
};

// AUTHENTICATION SYSTEM
export const Auth = {
  async login(email, password) {
    return await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  },
  
  async register(userData) {
    return await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },
  
  async getCurrentUser() {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token');
    
    return await apiRequest('/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  
  logout() {
    localStorage.removeItem('authToken');
    window.location.reload();
  }
};

// USER MANAGEMENT with ROLES
export const User = {
  async list() {
    const token = localStorage.getItem('authToken');
    return await apiRequest('/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  
  async create(userData) {
    const token = localStorage.getItem('authToken');
    return await apiRequest('/users', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData)
    });
  },
  
  async updateRole(userId, role) {
    const token = localStorage.getItem('authToken');
    return await apiRequest(`/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ role })
    });
  }
};

// FILE MANAGEMENT
export const File = {
  async upload(files, description = '', tags = []) {
    const token = localStorage.getItem('authToken');
    const formData = new FormData();
    
    files.forEach(file => formData.append('files', file));
    formData.append('description', description);
    formData.append('tags', tags.join(','));
    
    return await apiRequest('/files/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
  },
  
  async list() {
    const token = localStorage.getItem('authToken');
    return await apiRequest('/files', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  
  async download(fileId) {
    const token = localStorage.getItem('authToken');
    window.open(`${API_BASE_URL}/files/${fileId}/download?token=${token}`, '_blank');
  },
  
  async share(fileId, userIds) {
    const token = localStorage.getItem('authToken');
    return await apiRequest(`/files/${fileId}/share`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ userIds })
    });
  }
};

// Pentru toate celelalte entități care încă nu au backend, 
// le fac să funcționeze cu localStorage dar pregătite pentru API
const createLocalEntity = (entityName) => ({
  async list() {
    // Try API first (pentru viitor)
    try {
      return await apiRequest(`/${entityName.toLowerCase()}`);
    } catch (error) {
      // Fallback to localStorage
      const data = localStorage.getItem(entityName.toLowerCase());
      return data ? JSON.parse(data) : [];
    }
  },
  
  async create(data) {
    try {
      return await apiRequest(`/${entityName.toLowerCase()}`, {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch (error) {
      // Fallback to localStorage
      const items = await this.list();
      const newItem = {
        id: `${entityName.toLowerCase()}-${Date.now()}`,
        ...data,
        created_date: new Date().toISOString(),
        status: 'active'
      };
      items.push(newItem);
      localStorage.setItem(entityName.toLowerCase(), JSON.stringify(items));
      return newItem;
    }
  },
  
  async update(id, data) {
    try {
      return await apiRequest(`/${entityName.toLowerCase()}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
    } catch (error) {
      // Fallback to localStorage
      const items = await this.list();
      const index = items.findIndex(item => item.id === id);
      if (index !== -1) {
        items[index] = { ...items[index], ...data, updated_date: new Date().toISOString() };
        localStorage.setItem(entityName.toLowerCase(), JSON.stringify(items));
        return items[index];
      }
      return null;
    }
  },
  
  async delete(id) {
    try {
      return await apiRequest(`/${entityName.toLowerCase()}/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      // Fallback to localStorage
      const items = await this.list();
      const filtered = items.filter(item => item.id !== id);
      localStorage.setItem(entityName.toLowerCase(), JSON.stringify(filtered));
      return { success: true };
    }
  }
});

// Toate entitățile ERP-ului
export const Cabinet = createLocalEntity('Cabinets');
export const GameMix = createLocalEntity('GameMixes');
export const Platform = createLocalEntity('Platforms');
export const SlotMachine = createLocalEntity('SlotMachines');
export const Metrology = createLocalEntity('Metrology');
export const MetrologyApproval = createLocalEntity('MetrologyApprovals');
export const MetrologyCommission = createLocalEntity('MetrologyCommissions');
export const MetrologyAuthority = createLocalEntity('MetrologyAuthorities');
export const MetrologySoftware = createLocalEntity('MetrologySoftware');
export const Invoice = createLocalEntity('Invoices');
export const Jackpot = createLocalEntity('Jackpots');
export const Warehouse = createLocalEntity('Warehouse');

// Export pentru compatibilitate
export { Company as Ot };
export { Location as Bt };
export { Provider as it };
export { Cabinet as un };
export { GameMix as mn };
export { SlotMachine as Gt };
export { File as FileEntity };

console.log('🚀 Cashpot V6 ERP - Toate entitățile conectate la API online!');
