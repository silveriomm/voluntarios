// Importações
const express = require("express");
const routers = require("./src/routers");
const apiRouters = require("./src/apiRouters");
const bodyParser = require("body-parser");

// Instância do framework express
const app = express();

// Configurando a camada de visão
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.set("views", __dirname + "/src/views");

// Configurando o conteúdo estático
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());

// Configurar o request body
app.use(bodyParser.urlencoded({extended: true}));

// Rotas da aplicação
app.use(routers);
app.use("/api", apiRouters)

// Escutando a porta 3000
app.listen(3000, () => console.log('Mágica acontecendo na porta 3000'))