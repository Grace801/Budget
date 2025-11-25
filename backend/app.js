const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/users');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Routes
app.use('/api/auth', userRoutes);

app.post('/',)
app.get('/', (req, res) => {
    res.json({ message: 'API opérationnelle !' });
});

module.exports = app;
