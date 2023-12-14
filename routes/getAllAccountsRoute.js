module.exports = function(app, compteModel) {
    app.get('/getAllAccounts', (req, res) => {
        compteModel.getAllAccounts((err, results) => {
            if (err) {
                res.status(500).send('Erreur lors de la récupération des comptes');
            } else {
                res.json(results);
            }
        });
    });
};
