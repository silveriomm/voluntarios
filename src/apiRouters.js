const express = require("express");
const db = require("./db");

var router = express.Router();

router.get('/busca', (req, resp, next) => {
    const query = "SELECT id, email, descricao, titulo, cidade FROM anuncios WHERE LIKE(?, LOWER(cidade || descricao || titulo)) ORDER BY id DESC";
    if (req.query.key) {
        db.all(query, [`%${req.query.key}%`], (err, vagas) => {
            if (err) {
                console.log(err.message);
                return next(err);
            }
            resp.json(vagas);
        });
    } else {
        resp.status(500).json("O key deve ser informado!");    
    } 
});

module.exports = router;