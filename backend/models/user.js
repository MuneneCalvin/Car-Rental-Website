const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  // Additional fields
  name: {
    type: String,
    trim: true
  },
  // Add more fields as needed
}, { timestamps: true });

// Hash password before saving to database
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

// Create and export User model
const User = mongoose.model('User', userSchema);
module.exports = User;
