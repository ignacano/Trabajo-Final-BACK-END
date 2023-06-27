import { Router } from "express";
import { busquedaController } from "../controllers/busqueda.controllers";

let busquedaRouter = Router();

busquedaRouter.post('/', busquedaController.cargarBusqueda)


export {busquedaRouter};