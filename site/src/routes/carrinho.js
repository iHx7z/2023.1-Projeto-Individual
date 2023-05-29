var express = require("express");
var router = express.Router();

var carrinhoController = require("../controllers/carrinhoController");

router.get("/", function (req, res) {
    carrinhoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    carrinhoController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de carrinhoController.js
router.post("/cadastrar", function (req, res) {
    carrinhoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    carrinhoController.entrar(req, res);
});

module.exports = router;