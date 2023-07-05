//Importamos nuestro enrutador de express
import {Router} from "express";
import { methodsHTTP as categoriasController } from "../controllers/categoria.controllers.js";

const router = Router();

//Respuestas a req y res
router.get("/",categoriasController.getCategorias);
router.post("/",categoriasController.addCategories);
router.get("/:id",categoriasController.getCategoria);
router.delete("/:id",categoriasController.delteCategoria);
router.put("/:id",categoriasController.updateCategoria);
//Exportamos nuestro enrutador
export default router;