const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  contact_person: { type: String },
  email: { type: String },
  phone: { type: String },
  avatar: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Provider', providerSchema);
