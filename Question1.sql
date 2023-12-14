CREATE DATABASE IF NOT EXISTS bmczzcyu3kmviytgogsx;

USE bmczzcyu3kmviytgogsx;

CREATE TABLE IF NOT EXISTS Compte (
    numero CHAR(6) PRIMARY KEY,
    typeCompte VARCHAR(7) NOT NULL CHECK (typeCompte IN ('Cheque', 'Epargne', 'CELI')),
    solde DECIMAL(10, 2) NOT NULL,
    devise VARCHAR(3) NOT NULL CHECK (devise IN ('CAD', 'USD', 'EUR')),
    image VARCHAR(50)
);

INSERT INTO Compte (numero, typeCompte, solde, devise, image) VALUES
('C-0001', 'Cheque', 1000, 'CAD', 'Depense.jpg'),
('C-0002', 'Epargne', 2000, 'USD', 'Epargne.jpg'),
('C-0003', 'CELI', 3000, 'CAD', 'investissement.jpg'),
('C-0004', 'Epargne', 4000, 'EUR', 'Epargne.jpg'),
('C-0005', 'Cheque', 5000, 'CAD', 'Depense.jpg');
