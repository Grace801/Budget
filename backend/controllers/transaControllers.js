const Transaction = require('../models/transaction');



exports.createTransaction = (req, res) => {
  const transaction = new Transaction({ ...req.body });
  transaction.save()
    .then(() => res.status(201).json({ message: 'Transaction enregistrée !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyTransaction = (req, res) => {
  Transaction.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Transaction modifiée !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteTransaction =  (req, res) => {
  Transaction.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Transaction supprimée !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneTransaction = (req, res) => {
  Transaction.findOne({ _id: req.params.id })
    .then(transaction => res.status(200).json(transaction))
    .catch(error => res.status(404).json({ error }));
};

exports.getAllTransaction = (req, res) => {
  Transaction.find()
    .then(transactions => res.status(200).json(transactions))
    .catch(error => res.status(400).json({ error }));
};

