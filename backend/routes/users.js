const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');
console.log(userCtrl);

// Routes utilisateur
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
