const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },          // Nom de l'utilisateur
  email: { type: String, required: true, unique: true }, // Email unique
  password: { type: String, required: true },     // Mot de passe hashé
});

module.exports = mongoose.model('User', userSchema);
