const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

// Import models
const Company = require('./models/Company');
const Location = require('./models/Location');
const Provider = require('./models/Provider');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Companies API
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await Company.find().sort({ created_date: -1 });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/companies', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Locations API
app.get('/api/locations', async (req, res) => {
  try {
    const locations = await Location.find().sort({ created_date: -1 });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/locations', async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/locations/:id', async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/locations/:id', async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Providers API
app.get('/api/providers', async (req, res) => {
  try {
    const providers = await Provider.find().sort({ created_date: -1 });
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/providers', async (req, res) => {
  try {
    const provider = new Provider(req.body);
    await provider.save();
    res.json(provider);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/providers/:id', async (req, res) => {
  try {
    const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }
    res.json(provider);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/providers/:id', async (req, res) => {
  try {
    const provider = await Provider.findByIdAndDelete(req.params.id);
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = config.PORT;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;