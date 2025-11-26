const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const TransactionCtrl = require('../controllers/transaControllers'); // <- require ajouté

// Routes transaction
router.post('/', auth, TransactionCtrl.createTransaction);
router.put('/:id', auth, TransactionCtrl.modifyTransaction);
router.delete('/:id', auth, TransactionCtrl.deleteTransaction);
router.get('/:id', auth, TransactionCtrl.getOneTransaction);
router.get('/', auth, TransactionCtrl.getAllTransaction);

module.exports = router;
