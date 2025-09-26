const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  registration_number: { type: String, required: true },
  tax_number: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Company', companySchema);
