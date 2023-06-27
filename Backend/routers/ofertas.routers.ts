import { Router } from "express";
import { ofertasController } from "../controllers/ofertas.controllers";

let ofertasRouter = Router();

ofertasRouter.post('/create', ofertasController.cargarOfertas);
ofertasRouter.post('/update', ofertasController.modificarOferta);
ofertasRouter.post('/delete', ofertasController.borrarOferta);

export {ofertasRouter};