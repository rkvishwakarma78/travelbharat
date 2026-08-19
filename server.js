/**
 * TRAVELBHARAT - EXPRESS API SERVER & FRONTEND HOST (backend/server.js)
 * Main server entry point serving REST API routes and static frontend files.
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// REST API Routes
app.use('/api/states', require('./routes/stateRoutes'));
app.use('/api/cities', require('./routes/cityRoutes'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/inquiries', require('./routes/inquiryRoutes'));

// API Health Check
app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'TravelBharat REST API is operational 🇮🇳',
    version: '1.0.0',
    endpoints: {
      states: '/api/states',
      cities: '/api/cities',
      destinations: '/api/destinations',
      search: '/api/destinations/search/query?q={keyword}',
      inquiries: '/api/inquiries'
    }
  });
});

// Serve Static Frontend
const frontendPath = path.join(__dirname, '..');
app.use(express.static(frontendPath));

// API 404 handler
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint '${req.originalUrl}' not found.`
  });
});

// SPA Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('🔥 [Server Error]:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 TravelBharat Server is running on port ${PORT}`);
  console.log(`🌐 Website URL : http://localhost:${PORT}`);
  console.log(`📡 REST API    : http://localhost:${PORT}/api`);
  console.log(`🛠️ Admin Panel : http://localhost:${PORT}/admin.html`);
  console.log(`======================================================\n`);
});