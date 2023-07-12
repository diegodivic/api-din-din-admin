const express = require("express");
const CursosController = require("../../controllers/cursos.controller");

const routes = express.Router();

routes.post("/cursos", CursosController.cadastrarCurso);

module.exports = routes;
