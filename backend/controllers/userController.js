// userController.js

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Function to register a new user
exports.register = async (req, res) => {
  try {
    // Extract user details from request body
    const { username, email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to log in a user
exports.login = async (req, res) => {
  try {
    // Extract login credentials from request body
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to fetch user profile
exports.getProfile = async (req, res) => {
  try {
    // Extract user ID from request object
    const userId = req.user.id;

    // Find user by ID
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with user profile
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to update user profile
exports.updateProfile = async (req, res) => {
  try {
    // Extract user ID from request object
    const userId = req.user.id;

    // Update user profile in database
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true }).select('-password');
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with updated user profile
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to log out a user (optional)
exports.logout = async (req, res) => {
  // You can implement logout logic here if needed
  res.status(200).json({ message: 'Logout successful' });
};
