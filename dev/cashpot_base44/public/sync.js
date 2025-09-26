// Real-time data synchronization for GitHub Pages
(function() {
  'use strict';
  
  // Global data store
  window.CashpotData = window.CashpotData || {};
  
  // Entities
  const ENTITIES = [
    'companies', 'locations', 'providers', 'cabinets', 'gameMixes', 
    'platforms', 'slotMachines', 'invoices', 'metrology', 
    'metrologyApprovals', 'metrologyCommissions', 'metrologyAuthorities', 
    'metrologySoftware', 'jackpots', 'users'
  ];
  
  // Load data from GitHub Pages JSON
  async function loadFromGitHub() {
    try {
      const response = await fetch('./data.json');
      if (response.ok) {
        const data = await response.json();
        ENTITIES.forEach(entity => {
          window.CashpotData[entity] = data[entity] || [];
        });
        console.log('Data loaded from GitHub Pages');
        return true;
      }
    } catch (error) {
      console.log('GitHub data not available, using localStorage');
    }
    return false;
  }
  
  // Save data to localStorage
  function saveToStorage() {
    ENTITIES.forEach(entity => {
      localStorage.setItem(`cashpot_${entity}`, JSON.stringify(window.CashpotData[entity] || []));
    });
  }
  
  // Load data from localStorage
  function loadFromStorage() {
    ENTITIES.forEach(entity => {
      const data = localStorage.getItem(`cashpot_${entity}`);
      window.CashpotData[entity] = data ? JSON.parse(data) : [];
    });
  }
  
  // Initialize data
  async function init() {
    const loaded = await loadFromGitHub();
    if (!loaded) {
      loadFromStorage();
    }
    
    // Listen for storage changes (cross-tab sync)
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith('cashpot_')) {
        const entity = e.key.replace('cashpot_', '');
        if (ENTITIES.includes(entity)) {
          window.CashpotData[entity] = JSON.parse(e.newValue || '[]');
          // Notify components
          window.dispatchEvent(new CustomEvent('dataChanged', { 
            detail: { entity, data: window.CashpotData[entity] } 
          }));
        }
      }
    });
    
    console.log('Data sync initialized');
  }
  
  // API functions
  window.CashpotAPI = {
    // Get data for entity
    async get(entity) {
      if (!window.CashpotData[entity]) {
        window.CashpotData[entity] = [];
      }
      return window.CashpotData[entity];
    },
    
    // Create new item
    async create(entity, data) {
      if (!window.CashpotData[entity]) {
        window.CashpotData[entity] = [];
      }
      
      const newItem = {
        id: `${entity}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        ...data,
        created_date: new Date().toISOString(),
        updated_date: new Date().toISOString()
      };
      
      window.CashpotData[entity].push(newItem);
      localStorage.setItem(`cashpot_${entity}`, JSON.stringify(window.CashpotData[entity]));
      
      // Notify all tabs
      window.dispatchEvent(new CustomEvent('dataChanged', { 
        detail: { entity, data: window.CashpotData[entity] } 
      }));
      
      return newItem;
    },
    
    // Update item
    async update(entity, id, data) {
      if (!window.CashpotData[entity]) {
        window.CashpotData[entity] = [];
      }
      
      const index = window.CashpotData[entity].findIndex(item => item.id === id);
      if (index !== -1) {
        window.CashpotData[entity][index] = {
          ...window.CashpotData[entity][index],
          ...data,
          id,
          updated_date: new Date().toISOString()
        };
        
        localStorage.setItem(`cashpot_${entity}`, JSON.stringify(window.CashpotData[entity]));
        
        // Notify all tabs
        window.dispatchEvent(new CustomEvent('dataChanged', { 
          detail: { entity, data: window.CashpotData[entity] } 
        }));
        
        return window.CashpotData[entity][index];
      }
      throw new Error('Item not found');
    },
    
    // Delete item
    async delete(entity, id) {
      if (!window.CashpotData[entity]) {
        window.CashpotData[entity] = [];
      }
      
      window.CashpotData[entity] = window.CashpotData[entity].filter(item => item.id !== id);
      localStorage.setItem(`cashpot_${entity}`, JSON.stringify(window.CashpotData[entity]));
      
      // Notify all tabs
      window.dispatchEvent(new CustomEvent('dataChanged', { 
        detail: { entity, data: window.CashpotData[entity] } 
      }));
      
      return { success: true };
    }
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
