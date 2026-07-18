const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const itemRoutes = require("./routes/itemRoutes");

// Initialize App & Connect DB
const app = express();
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allows your frontend to connect safely
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes mounting
app.use('/api/items', itemRoutes);

// Basic base route
app.get('/', (req, res) => {
  res.send('API is running smoothly...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});