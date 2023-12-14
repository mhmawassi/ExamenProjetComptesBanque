module.exports = function(app, compteModel) {
app.get('/getAccount/:numero', (req, res) => {
    const numero = req.params.numero;
    compteModel.getAccount(numero, (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération du compte');
        } else {
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).send('Compte non trouvé');
            }
        }
    });
});
};