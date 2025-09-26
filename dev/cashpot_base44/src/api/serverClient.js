// MongoDB Backend API
class ServerClient {
  constructor(entityName) {
    this.entityName = entityName;
    this.baseUrl = 'https://cashpot-v6-production.up.railway.app/api';
  }

  async request(endpoint = '', options = {}) {
    const method = options.method || 'GET';
    const url = `${this.baseUrl}/${this.entityName}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: options.body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API request failed for ${this.entityName}:`, error);
      // Fallback to localStorage if server is down
      return this.fallbackToLocalStorage(endpoint, options);
    }
  }

  fallbackToLocalStorage(endpoint, options) {
    console.log(`Using localStorage fallback for ${this.entityName}`);
    const key = `cashpot_${this.entityName}`;
    
    if (options.method === 'GET' || !options.method) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    }
    
    if (options.method === 'POST') {
      const newItem = JSON.parse(options.body);
      const data = JSON.parse(localStorage.getItem(key) || '[]');
      newItem.id = newItem.id || `${this.entityName}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      newItem.created_date = newItem.created_date || new Date().toISOString();
      newItem.updated_date = new Date().toISOString();
      data.push(newItem);
      localStorage.setItem(key, JSON.stringify(data));
      return newItem;
    }
    
    if (options.method === 'PUT') {
      const updatedItem = JSON.parse(options.body);
      const data = JSON.parse(localStorage.getItem(key) || '[]');
      const index = data.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        updatedItem.updated_date = new Date().toISOString();
        data[index] = updatedItem;
        localStorage.setItem(key, JSON.stringify(data));
        return updatedItem;
      }
      throw new Error('Item not found');
    }
    
    if (options.method === 'DELETE') {
      const id = endpoint.replace('/', '');
      const data = JSON.parse(localStorage.getItem(key) || '[]');
      const filteredData = data.filter(item => item.id !== id);
      localStorage.setItem(key, JSON.stringify(filteredData));
      return { success: true };
    }
    
    return [];
  }

  async list(sortBy = '') {
    try {
      const data = await this.request();
      
      if (sortBy) {
        const isDesc = sortBy.startsWith('-');
        const field = isDesc ? sortBy.substring(1) : sortBy;
        
        return data.sort((a, b) => {
          const aVal = a[field];
          const bVal = b[field];
          
          if (aVal < bVal) return isDesc ? 1 : -1;
          if (aVal > bVal) return isDesc ? -1 : 1;
          return 0;
        });
      }
      
      return data;
    } catch (error) {
      console.error(`Error listing ${this.entityName}:`, error);
      return [];
    }
  }

  async get(id) {
    try {
      const data = await this.request();
      return data.find(item => item.id === id) || null;
    } catch (error) {
      console.error(`Error getting ${this.entityName}:`, error);
      return null;
    }
  }

  async create(item) {
    try {
      return await this.request('', {
        method: 'POST',
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error(`Error creating ${this.entityName}:`, error);
      throw error;
    }
  }

  async update(id, item) {
    try {
      return await this.request(`/${id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error(`Error updating ${this.entityName}:`, error);
      throw error;
    }
  }

  async delete(id) {
    try {
      return await this.request(`/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error(`Error deleting ${this.entityName}:`, error);
      throw error;
    }
  }
}

export default ServerClient;
