// authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Function to register a new user
exports.register = async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
};

// Function to login an existing user
exports.login = async (req, res) => {
  try {
    // Extract login credentials from request body
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found, respond with error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is invalid, respond with error
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token
    res.status(200).json({ token });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
