const mongoose = require('mongoose');

// Define location schema
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  // Add more fields as needed
}, { timestamps: true });

// Create and export Location model
const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
