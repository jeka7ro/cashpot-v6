const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', locationSchema);
