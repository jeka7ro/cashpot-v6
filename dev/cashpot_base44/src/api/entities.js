import ServerClient from './serverClient';

// Create server clients for each entity
const createEntity = (entityName) => {
  const client = new ServerClient(entityName);
  
  return {
    async list(sortBy = '') {
      console.log(`${entityName}.list() called - using server`);
      return await client.list(sortBy);
    },

    async get(id) {
      console.log(`${entityName}.get() called for ID: ${id}`);
      return await client.get(id);
    },

    async create(data) {
      console.log(`${entityName}.create() called with:`, data);
      return await client.create(data);
    },

    async update(id, data) {
      console.log(`${entityName}.update() called for ID: ${id} with:`, data);
      return await client.update(id, data);
    },

    async delete(id) {
      console.log(`${entityName}.delete() called for ID: ${id}`);
      return await client.delete(id);
    }
  };
};

// Export all entities
export const Company = createEntity('companies');
export const Location = createEntity('locations');
export const Provider = createEntity('providers');
export const Cabinet = createEntity('cabinets');
export const GameMix = createEntity('gameMixes');
export const Platform = createEntity('platforms');
export const SlotMachine = createEntity('slotMachines');
export const Invoice = createEntity('invoices');
export const Metrology = createEntity('metrology');
export const MetrologyApproval = createEntity('metrologyApprovals');
export const MetrologyCommission = createEntity('metrologyCommissions');
export const MetrologyAuthority = createEntity('metrologyAuthorities');
export const MetrologySoftware = createEntity('metrologySoftware');
export const Jackpot = createEntity('jackpots');
export const User = createEntity('users');

// Helper function to check server connection
export const checkServerConnection = async () => {
  // GitHub Pages doesn't need server connection check
  return true;
};

// Helper functions for data retrieval
export const getCommissionForSlot = (serialNumber) => {
  // This will be implemented when we have commission data
  return null;
};

export const getProviderName = (providerId, manufacturer) => {
  // This will be implemented when we have provider data
  return manufacturer || 'N/A';
};

export const getCabinetName = (cabinetId) => {
  // This will be implemented when we have cabinet data
  return 'N/A';
};

export const getGameMixName = (gameMixId) => {
  // This will be implemented when we have game mix data
  return 'N/A';
};

export const getLocationName = (locationId) => {
  // This will be implemented when we have location data
  return 'N/A';
};

export const getCompanyName = (locationId) => {
  // This will be implemented when we have company data
  return 'N/A';
};

export const getInvoiceNumber = (serialNumber) => {
  // This will be implemented when we have invoice data
  return 'N/A';
};

export const getMetrologyForSlot = (serialNumber) => {
  // This will be implemented when we have metrology data
  return null;
};

export const getMetrologyApprovalsForSlot = (serialNumber) => {
  // This will be implemented when we have metrology approval data
  return [];
};

export const getMetrologyAuthoritiesForSlot = (serialNumber) => {
  // This will be implemented when we have metrology authority data
  return [];
};

export const getMetrologySoftwareForSlot = (serialNumber) => {
  // This will be implemented when we have metrology software data
  return [];
};

export const getInvoiceForSlot = (serialNumber) => {
  // This will be implemented when we have invoice data
  return null;
};

export const getCabinetModel = (cabinetId) => {
  // This will be implemented when we have cabinet data
  return 'N/A';
};

export const getFullAddress = (locationId) => {
  // This will be implemented when we have location data
  return 'N/A';
};

export const getDaysUntilExpiry = (expiryDate) => {
  if (!expiryDate) return 0;
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diffTime = expiry - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getGameCount = (games) => {
  if (!games) return 0;
  if (Array.isArray(games)) return games.length;
  if (typeof games === 'string') return games.split(',').filter(g => g.trim()).length;
  return 0;
};

export const getPlatformName = (serialNumber) => {
  // This will be implemented when we have platform data
  return 'N/A';
};

export const getProviderAvatar = (providerId) => {
  // This will be implemented when we have provider data
  return null;
};

// GitHub Pages doesn't need server connection check
