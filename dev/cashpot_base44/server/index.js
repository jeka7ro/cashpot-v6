const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Data file path
const DATA_FILE = path.join(__dirname, 'data.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({}));
}

// Load data from file
const loadData = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading data:', error);
    return {};
  }
};

// Save data to file
const saveData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
};

// Routes
app.get('/api/data/:entity', (req, res) => {
  try {
    const { entity } = req.params;
    const data = loadData();
    const entityData = data[entity] || [];
    res.json(entityData);
  } catch (error) {
    console.error('Error getting data:', error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

app.post('/api/data/:entity', (req, res) => {
  try {
    const { entity } = req.params;
    const newItem = req.body;
    
    const data = loadData();
    if (!data[entity]) {
      data[entity] = [];
    }
    
    // Generate ID if not provided
    if (!newItem.id) {
      newItem.id = `${entity}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    // Add created_date if not provided
    if (!newItem.created_date) {
      newItem.created_date = new Date().toISOString();
    }
    
    // Add updated_date
    newItem.updated_date = new Date().toISOString();
    
    data[entity].push(newItem);
    
    if (saveData(data)) {
      res.json(newItem);
    } else {
      res.status(500).json({ error: 'Failed to save data' });
    }
  } catch (error) {
    console.error('Error creating data:', error);
    res.status(500).json({ error: 'Failed to create data' });
  }
});

app.put('/api/data/:entity/:id', (req, res) => {
  try {
    const { entity, id } = req.params;
    const updatedItem = req.body;
    
    const data = loadData();
    if (!data[entity]) {
      data[entity] = [];
    }
    
    const index = data[entity].findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    // Preserve original created_date
    updatedItem.created_date = data[entity][index].created_date;
    updatedItem.updated_date = new Date().toISOString();
    updatedItem.id = id;
    
    data[entity][index] = updatedItem;
    
    if (saveData(data)) {
      res.json(updatedItem);
    } else {
      res.status(500).json({ error: 'Failed to update data' });
    }
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Failed to update data' });
  }
});

app.delete('/api/data/:entity/:id', (req, res) => {
  try {
    const { entity, id } = req.params;
    
    const data = loadData();
    if (!data[entity]) {
      data[entity] = [];
    }
    
    const index = data[entity].findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    data[entity].splice(index, 1);
    
    if (saveData(data)) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to delete data' });
    }
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Failed to delete data' });
  }
});

// Get all data
app.get('/api/data', (req, res) => {
  try {
    const data = loadData();
    res.json(data);
  } catch (error) {
    console.error('Error getting all data:', error);
    res.status(500).json({ error: 'Failed to get data' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// For Vercel
module.exports = app;

// For local development
if (require.main === module) {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Data file: ${DATA_FILE}`);
});
}
