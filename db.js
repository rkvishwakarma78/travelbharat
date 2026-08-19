/**
 * TRAVELBHARAT - MONGODB DATABASE CONNECTION (backend/config/db.js)
 * Manages Mongoose connection lifecycle with reconnection logic and logging.
 */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travelbharat';
    
    const conn = await mongoose.connect(connUri, {
      serverSelectionTimeoutMS: 5000
    });

    console.log(`✅ [MongoDB Connected]: Host -> ${conn.connection.host}, Database -> ${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`❌ [MongoDB Connection Error]: ${error.message}`);
    console.log(`⚠️ Note: If you don't have MongoDB running locally, the server will still run and serve static frontend files.`);
  }
};

module.exports = connectDB;