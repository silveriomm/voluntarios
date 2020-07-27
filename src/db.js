const sqlite3 = require("sqlite3").verbose();

// Configuração do banco de dados
const db = new sqlite3.Database(
    "./db/voluntarios.db",
    sqlite3.OPEN_READWRITE,
    err => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log("Conectado com sucesso ao banco de dados!");
    }
    );

module.exports = db;