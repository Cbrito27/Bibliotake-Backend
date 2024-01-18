import { Router } from "express";
import {
  publicarLibro,
  obtenerLibros,
  obtenerLibroId,
  actualizarLibro,
} from "../controllers/libroController.js";
import cargarImagenesMiddleware from "../middleware/cargarImagenes.js";

const router = Router();

router.get("/libros", obtenerLibros);

router.get("/libro/:id", obtenerLibroId);
 
router.post("/libro", cargarImagenesMiddleware, publicarLibro);

router.put("/libro/:id", actualizarLibro);

export default router;
