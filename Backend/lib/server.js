"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const busqueda_routers_1 = require("./routers/busqueda.routers");
const ofertas_routers_1 = require("./routers/ofertas.routers");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/busquedas', busqueda_routers_1.busquedaRouter);
app.use('/ofertas', ofertas_routers_1.ofertasRouter);
let port = 3001;
app.listen(port, () => console.log('escuchando en puerto: ', port));
