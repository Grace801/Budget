const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const transaRoutes = require('./routes/transaction');

const userRoutes = require('./routes/users');

const app = express();

app.use(express.json());

// CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/api/transaction', transaRoutes);
// Routes utilisateur
app.use('/api/auth', userRoutes);



module.exports = app;
