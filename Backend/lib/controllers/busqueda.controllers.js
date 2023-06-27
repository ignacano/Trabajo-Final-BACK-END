"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.busquedaController = void 0;
const firebase_service_1 = require("../services/firebase.service");
exports.busquedaController = {
    cargarBusqueda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const docRef = yield firebase_service_1.db.collection('busquedas').add({
                    email: req.body.email,
                    nombre: req.body.nombre,
                    edad: req.body.edad,
                    dni: req.body.dni,
                    actividad: req.body.actividad.toLowerCase()
                });
                let ofertas = (yield firebase_service_1.db.collection('ofertas').where('actividad', '==', req.body.actividad.toLowerCase()).get()).docs.map(doc => doc.data());
                if (ofertas.length === 0) {
                    return res.status(200).json({
                        id: docRef.id
                    });
                }
                else {
                    return res.status(200).json({
                        id: docRef.id,
                        ofertas: ofertas
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    message: error.message
                });
            }
        });
    },
};
