import { Request, Response } from "express";
import listaDeCursos from '../models/cursos.json'
import fs from "fs";

interface Curso{
  titulo:string
  professor:string
  descricao:string
}

const CursoController = {
  cadastrarCurso(req:Request, res:Response) {
    listaDeCursos as Curso []
    const { titulo, descricao, professor } = req.body;

    if (!titulo || !descricao || !professor) {
      return res
        .status(400)
        .json({ error: "Você precisa passar os atributos corretamente" });
    }

    listaDeCursos.push({
      titulo,
      descricao,
      professor,
    });

    fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

    res.status(201).json({ message: "Cadastro efetuado com sucesso!" });
  },
};

export default CursoController;
