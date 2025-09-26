// GitHub Pages API for Companies
(function() {
  'use strict';
  
  // Data storage in localStorage as fallback
  const STORAGE_KEY = 'cashpot_companies';
  
  // Load data from GitHub Pages JSON
  async function loadFromGitHub() {
    try {
      const response = await fetch('./data.json');
      if (response.ok) {
        const data = await response.json();
        return data.companies || [];
      }
    } catch (error) {
      console.log('GitHub data not available, using localStorage');
    }
    return [];
  }
  
  // Save data to localStorage
  function saveToStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
  
  // Load data from localStorage
  function loadFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
  
  // API endpoints
  window.CashpotAPI = {
    // GET /api/companies
    async getCompanies() {
      const githubData = await loadFromGitHub();
      if (githubData.length > 0) {
        return githubData;
      }
      return loadFromStorage();
    },
    
    // POST /api/companies
    async createCompany(companyData) {
      const companies = await this.getCompanies();
      const newCompany = {
        id: `comp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        ...companyData,
        created_date: new Date().toISOString(),
        updated_date: new Date().toISOString()
      };
      companies.push(newCompany);
      saveToStorage(companies);
      
      // Trigger sync to other tabs
      window.dispatchEvent(new CustomEvent('cashpotDataChanged', { 
        detail: { entity: 'companies', data: companies } 
      }));
      
      return newCompany;
    },
    
    // PUT /api/companies/:id
    async updateCompany(id, companyData) {
      const companies = await this.getCompanies();
      const index = companies.findIndex(c => c.id === id);
      if (index !== -1) {
        companies[index] = {
          ...companies[index],
          ...companyData,
          id,
          updated_date: new Date().toISOString()
        };
        saveToStorage(companies);
        
        // Trigger sync to other tabs
        window.dispatchEvent(new CustomEvent('cashpotDataChanged', { 
          detail: { entity: 'companies', data: companies } 
        }));
        
        return companies[index];
      }
      throw new Error('Company not found');
    },
    
    // DELETE /api/companies/:id
    async deleteCompany(id) {
      const companies = await this.getCompanies();
      const filteredCompanies = companies.filter(c => c.id !== id);
      saveToStorage(filteredCompanies);
      
      // Trigger sync to other tabs
      window.dispatchEvent(new CustomEvent('cashpotDataChanged', { 
        detail: { entity: 'companies', data: filteredCompanies } 
      }));
      
      return { success: true };
    }
  };
  
  // Listen for data changes from other tabs
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      window.dispatchEvent(new CustomEvent('cashpotDataChanged', { 
        detail: { entity: 'companies', data: JSON.parse(e.newValue || '[]') } 
      }));
    }
  });
  
  // Listen for custom events
  window.addEventListener('cashpotDataChanged', (e) => {
    // Notify all components that data changed
    window.dispatchEvent(new CustomEvent('companiesUpdated', { 
      detail: e.detail 
    }));
  });
})();
