const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route pour obtenir tous les comptes
app.get('/getAllAccounts', (req, res) => {
    // Logique pour récupérer tous les comptes
});

// Route pour obtenir un compte spécifique
app.get('/getAccount', (req, res) => {
    // Logique pour récupérer un compte par son numéro
});

// Route pour fermer un compte
app.delete('/closeAccount', (req, res) => {
    // Logique pour supprimer un compte
});

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
