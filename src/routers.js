const express = require("express");
const db = require("./db");

var router = express.Router();

// Rotas da aplicação
router.get('/', (req, resp, next) => {
    const query = "SELECT id, email, descricao, titulo, cidade FROM anuncios ORDER BY id DESC LIMIT 10";
    db.all(query,(err, vagas) => {
        if (err) {
            console.log(err.message);
            return next(err);
        }
        resp.render("index", { vagas })
    });
    
});

router.get('/busca', (req, resp) => resp.render("busca"));

router.get('/cadastro', (req, resp) => resp.render("cadastro"));

router.post('/cadastro', (req, resp, next) => {
    const query = "INSERT INTO anuncios (email, descricao, titulo, cidade) VALUES (?,?,?,?)";
    db.run(query, [req.body.email, req.body.descricao, req.body.titulo, req.body.cidade], err => {
        if (err) {
            console.log(err.message);
            return next(err);
        }
        resp.redirect("/")    
    });
});

router.get("/anuncio/:id", (req, resp) => {
    const query = "SELECT id, email, descricao, titulo, cidade FROM anuncios WHERE id = ?";
    if (req.params.id) {
        db.get(query, [req.params.id], (err, vaga) => {
            if (err) {
                console.log(err.message);
                return next(err);
            }
            resp.render("anuncio", {vaga});
        })
    }
});

module.exports = router;