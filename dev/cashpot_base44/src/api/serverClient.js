// Real-time data synchronization
class ServerClient {
  constructor(entityName) {
    this.entityName = entityName;
  }

  async request(endpoint = '', options = {}) {
    // Wait for API to be available
    while (!window.CashpotAPI) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const method = options.method || 'GET';
    
    try {
      switch (method) {
        case 'GET':
          return await window.CashpotAPI.get(this.entityName);
        case 'POST':
          return await window.CashpotAPI.create(this.entityName, JSON.parse(options.body));
        case 'PUT':
          const id = endpoint.replace('/', '');
          return await window.CashpotAPI.update(this.entityName, id, JSON.parse(options.body));
        case 'DELETE':
          const deleteId = endpoint.replace('/', '');
          return await window.CashpotAPI.delete(this.entityName, deleteId);
        default:
          return [];
      }
    } catch (error) {
      console.error(`API request failed for ${this.entityName}:`, error);
      throw error;
    }
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
