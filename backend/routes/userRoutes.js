// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
router.post('/register', userController.register);

// Route for user login
router.post('/login', userController.login);

// Route for fetching user profile
router.get('/profile', authMiddleware.authenticate, userController.getProfile);

// Route for updating user profile
router.put('/profile', authMiddleware.authenticate, userController.updateProfile);

// Route for user logout
router.post('/logout', authMiddleware.authenticate, userController.logout);

module.exports = router;
