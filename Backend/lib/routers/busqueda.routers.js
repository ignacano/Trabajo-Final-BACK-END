"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.busquedaRouter = void 0;
const express_1 = require("express");
const busqueda_controllers_1 = require("../controllers/busqueda.controllers");
let busquedaRouter = (0, express_1.Router)();
exports.busquedaRouter = busquedaRouter;
busquedaRouter.post('/', busqueda_controllers_1.busquedaController.cargarBusqueda);
