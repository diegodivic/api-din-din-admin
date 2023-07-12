import express from 'express';
import CursoController from '../controllers/cursos.controller';

const routes = express.Router();

routes.post("/cursos", CursoController.cadastrarCurso);

export default routes;