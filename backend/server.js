require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');

// Connexion MongoDB
connectDB();

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
