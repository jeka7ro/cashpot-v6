// GitHub Pages + JSON synchronization
class ServerClient {
  constructor(entityName) {
    this.entityName = entityName;
    this.storageKey = `cashpot_${entityName}`;
    this.dataUrl = 'https://jeka7ro.github.io/cashpot-v6/data.json';
  }

  async request(endpoint = '', options = {}) {
    // Try to load from GitHub Pages JSON first
    try {
      const response = await fetch(this.dataUrl);
      if (response.ok) {
        const allData = await response.json();
        const data = allData[this.entityName] || [];
        
        if (options.method === 'GET' || !options.method) {
          return data;
        }
        
        // For other methods, use localStorage as fallback
        return this.fallbackToLocalStorage(endpoint, options);
      }
    } catch (error) {
      console.log(`GitHub Pages data not available, using localStorage for ${this.entityName}`);
    }
    
    // Fallback to localStorage
    return this.fallbackToLocalStorage(endpoint, options);
  }

  fallbackToLocalStorage(endpoint, options) {
    console.log(`Using localStorage for ${this.entityName}`);
    const key = this.storageKey;
    
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
      
      // Store in global sync object for cross-browser sync
      this.syncToGlobal();
      
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
        
        // Store in global sync object for cross-browser sync
        this.syncToGlobal();
        
        return updatedItem;
      }
      throw new Error('Item not found');
    }
    
    if (options.method === 'DELETE') {
      const id = endpoint.replace('/', '');
      const data = JSON.parse(localStorage.getItem(key) || '[]');
      const filteredData = data.filter(item => item.id !== id);
      localStorage.setItem(key, JSON.stringify(filteredData));
      
      // Store in global sync object for cross-browser sync
      this.syncToGlobal();
      
      return { success: true };
    }
    
    return [];
  }

  // Sync localStorage to global object for cross-browser sync
  syncToGlobal() {
    try {
      // Create a simple sync mechanism
      const allData = {};
      const entities = ['companies', 'locations', 'providers', 'cabinets', 'gameMixes', 'platforms', 'slotMachines', 'invoices', 'metrology', 'metrologyApprovals', 'metrologyCommissions', 'metrologyAuthorities', 'metrologySoftware', 'jackpots', 'users'];
      
      entities.forEach(entity => {
        const data = localStorage.getItem(`cashpot_${entity}`);
        allData[entity] = data ? JSON.parse(data) : [];
      });
      
      // Store in a global sync object
      window.cashpotSyncData = allData;
      
      // Also store in sessionStorage for cross-tab sync
      sessionStorage.setItem('cashpotSyncData', JSON.stringify(allData));
      
      console.log('Data synced globally');
    } catch (error) {
      console.error('Sync error:', error);
    }
  }

  async list(sortBy = '') {
    try {
      // First try to load from global sync
      const globalData = this.loadFromGlobalSync();
      if (globalData && globalData.length > 0) {
        console.log(`Loaded ${globalData.length} ${this.entityName} from global sync`);
        return this.sortData(globalData, sortBy);
      }
      
      // Fallback to normal request
      const data = await this.request();
      
      if (sortBy) {
        return this.sortData(data, sortBy);
      }
      
      return data;
    } catch (error) {
      console.error(`Error listing ${this.entityName}:`, error);
      return [];
    }
  }

  loadFromGlobalSync() {
    try {
      // Try sessionStorage first (cross-tab sync)
      const sessionData = sessionStorage.getItem('cashpotSyncData');
      if (sessionData) {
        const allData = JSON.parse(sessionData);
        return allData[this.entityName] || [];
      }
      
      // Try global object
      if (window.cashpotSyncData) {
        return window.cashpotSyncData[this.entityName] || [];
      }
      
      return null;
    } catch (error) {
      console.error('Error loading from global sync:', error);
      return null;
    }
  }

  sortData(data, sortBy) {
    if (!sortBy) return data;
    
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
