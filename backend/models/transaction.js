const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  userId: { type: String, required: true },
  type: { type: String, required: true, enum: ['revenu', 'depense'] },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String } 
});

module.exports = mongoose.model('Transaction', transactionSchema);
