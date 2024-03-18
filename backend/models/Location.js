const mongoose = require('mongoose');

// Define location schema
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  contact: {
    phone: String,
    email: String,
  },
  operatingHours: {
    type: String,
    required: true,
    trim: true
  },
  availableCarTypes: [String],
  parkingFacilities: {
    type: String,
    trim: true
  },
  additionalServices: {
    type: String,
    trim: true
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  photos: [String],
}, { timestamps: true });

// Create and export Location model
const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
