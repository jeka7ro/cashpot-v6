const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Data file path
const DATA_FILE = path.join(__dirname, 'data.json');

// Helper function to read data
function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
    return {};
  } catch (error) {
    console.error('Error reading data:', error);
    return {};
  }
}

// Helper function to write data
function writeData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}

// Generic CRUD endpoints
function createCRUDRoutes(entityName) {
  // GET /api/data/:entity
  app.get(`/api/data/${entityName}`, (req, res) => {
    try {
      const data = readData();
      const entities = data[entityName] || [];
      res.json(entities);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read data' });
    }
  });

  // POST /api/data/:entity
  app.post(`/api/data/${entityName}`, (req, res) => {
    try {
      const data = readData();
      const entities = data[entityName] || [];
      
      const newItem = {
        id: `${entityName}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        ...req.body,
        created_date: new Date().toISOString(),
        updated_date: new Date().toISOString()
      };
      
      entities.push(newItem);
      data[entityName] = entities;
      
      if (writeData(data)) {
        res.json(newItem);
      } else {
        res.status(500).json({ error: 'Failed to save data' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to create item' });
    }
  });

  // PUT /api/data/:entity/:id
  app.put(`/api/data/${entityName}/:id`, (req, res) => {
    try {
      const data = readData();
      const entities = data[entityName] || [];
      const id = req.params.id;
      
      const index = entities.findIndex(item => item.id === id);
      if (index === -1) {
        return res.status(404).json({ error: 'Item not found' });
      }
      
      entities[index] = {
        ...entities[index],
        ...req.body,
        id,
        updated_date: new Date().toISOString()
      };
      
      data[entityName] = entities;
      
      if (writeData(data)) {
        res.json(entities[index]);
      } else {
        res.status(500).json({ error: 'Failed to save data' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update item' });
    }
  });

  // DELETE /api/data/:entity/:id
  app.delete(`/api/data/${entityName}/:id`, (req, res) => {
    try {
      const data = readData();
      const entities = data[entityName] || [];
      const id = req.params.id;
      
      const filteredEntities = entities.filter(item => item.id !== id);
      data[entityName] = filteredEntities;
      
      if (writeData(data)) {
        res.json({ success: true });
      } else {
        res.status(500).json({ error: 'Failed to save data' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete item' });
    }
  });
}

// Create routes for all entities
const entities = [
  'companies', 'locations', 'providers', 'cabinets', 'gameMixes', 
  'platforms', 'slotMachines', 'invoices', 'metrology', 
  'metrologyApprovals', 'metrologyCommissions', 'metrologyAuthorities', 
  'metrologySoftware', 'jackpots', 'users'
];

entities.forEach(createCRUDRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

module.exports = app;
