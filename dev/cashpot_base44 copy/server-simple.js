const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Data storage (in production, use a real database)
let dataStore = {
  invoices: [],
  metrology: [],
  companies: [],
  locations: [],
  providers: [],
  cabinets: [],
  gameMixes: [],
  slotMachines: [],
  users: [],
  jackpots: []
};

// Load data from file if exists
const dataFile = path.join(__dirname, 'data.json');
if (fs.existsSync(dataFile)) {
  try {
    dataStore = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  } catch (error) {
    console.log('No existing data file found, starting fresh');
  }
}

// Save data to file
const saveData = () => {
  fs.writeFileSync(dataFile, JSON.stringify(dataStore, null, 2));
};

// Generic CRUD endpoints
const createEndpoints = (entityName) => {
  // GET all
  app.get(`/api/${entityName}`, (req, res) => {
    res.json(dataStore[entityName] || []);
  });

  // GET by ID
  app.get(`/api/${entityName}/:id`, (req, res) => {
    const item = dataStore[entityName].find(item => item.id === req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });

  // POST create
  app.post(`/api/${entityName}`, (req, res) => {
    const newItem = {
      id: `${entityName}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...req.body,
      created_date: new Date().toISOString()
    };
    
    if (!dataStore[entityName]) {
      dataStore[entityName] = [];
    }
    
    dataStore[entityName].push(newItem);
    saveData();
    res.status(201).json(newItem);
  });

  // PUT update
  app.put(`/api/${entityName}/:id`, (req, res) => {
    const index = dataStore[entityName].findIndex(item => item.id === req.params.id);
    if (index !== -1) {
      dataStore[entityName][index] = {
        ...dataStore[entityName][index],
        ...req.body,
        updated_date: new Date().toISOString()
      };
      saveData();
      res.json(dataStore[entityName][index]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });

  // DELETE
  app.delete(`/api/${entityName}/:id`, (req, res) => {
    const index = dataStore[entityName].findIndex(item => item.id === req.params.id);
    if (index !== -1) {
      dataStore[entityName].splice(index, 1);
      saveData();
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });
};

// Create endpoints for all entities
const entities = ['invoices', 'metrology', 'companies', 'locations', 'providers', 'cabinets', 'gameMixes', 'slotMachines', 'users', 'jackpots'];
entities.forEach(createEndpoints);

// File upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({
    filename: req.file.filename,
    originalName: req.file.originalname,
    url: `/uploads/${req.file.filename}`,
    size: req.file.size,
    mimetype: req.file.mimetype
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Data stored in: ${dataFile}`);
  console.log(`📂 Uploads directory: ${uploadsDir}`);
});

module.exports = app;
