class CompteModel {
    constructor(db) {
        this.db = db;
    }

    getAllAccounts(callback) {
        this.db.query('SELECT * FROM Compte', callback);
    }

    getAccount(numero, callback) {
        this.db.query('SELECT * FROM Compte WHERE numero = ?', [numero], callback);
    }

    closeAccount(numero, callback) {
        this.db.query('DELETE FROM Compte WHERE numero = ?', [numero], callback);
    }

}

module.exports = CompteModel;
