const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection string
    const uri = 'mongodb+srv://brianmwenda255:2abgPcHNrY9HZ3vX@cluster0.pogwgwc.mongodb.net/carrental';
    
    // Establish MongoDB connection
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { connectDB, mongoose };
