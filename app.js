const express = require('express');
const mysql = require('mysql2');
const CompteModel = require('./models/CompteModel');

const app = express();
app.use(express.json());

// Configuration de la connexion à la base de données
const dbConfig = {
    host: 'bmczzcyu3kmviytgogsx-mysql.services.clever-cloud.com',
    user: 'utm7ghfn3gim255b',
    password: 'GUigrGCbVY2kF6TXhwBn',
    database: 'bmczzcyu3kmviytgogsx',
    port: '3306',
};

const db = mysql.createConnection(dbConfig);

const compteModel = new CompteModel(db);

// Inclure les routes
const getAllAccountsRoute = require('./routes/getAllAccountsRoute');
const getAccountRoute = require('./routes/getAccountRoute');
const closeAccountRoute = require('./routes/closeAccountRoute');

getAllAccountsRoute(app, compteModel);
getAccountRoute(app, compteModel);
closeAccountRoute(app, compteModel);

app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil de l\'API de Comptes Banque.');
});


app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
