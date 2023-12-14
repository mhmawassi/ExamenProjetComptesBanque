module.exports = function(app, compteModel) {
app.delete('/closeAccount/:numero', (req, res) => {
    const numero = req.params.numero;
    compteModel.closeAccount(numero, (err, result) => {
        if (err) {
            res.status(500).send('Erreur lors de la suppression du compte');
        } else {
            if (result.affectedRows > 0) {
                res.send('Compte supprimé avec succès');
            } else {
                res.status(404).send('Compte non trouvé ou déjà supprimé');
            }
        }
    });
});
};