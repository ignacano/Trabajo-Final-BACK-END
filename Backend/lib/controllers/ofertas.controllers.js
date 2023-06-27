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
exports.ofertasController = void 0;
const firebase_service_1 = require("../services/firebase.service");
exports.ofertasController = {
    cargarOfertas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const docRef = yield firebase_service_1.db.collection('ofertas').add({
                    email: req.body.email,
                    nombre: req.body.nombre,
                    edad: req.body.edad,
                    dni: req.body.dni,
                    actividad: req.body.actividad.toLowerCase()
                });
                let busquedas = (yield firebase_service_1.db.collection('busquedas').where('actividad', '==', req.body.actividad.toLowerCase()).get()).docs.map(doc => doc.data());
                if (busquedas.length === 0) {
                    return res.status(200).json({
                        id: docRef.id
                    });
                }
                else {
                    return res.status(200).json({
                        id: docRef.id,
                        busquedas: busquedas
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
    //permite moficiar solamente la actividad, a partir del DNI. 
    modificarOferta(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //busco el doc
                let documento = (_a = (yield firebase_service_1.db.collection('ofertas').where('dni', '==', req.body.dni).get())) === null || _a === void 0 ? void 0 : _a.docs.map(doc => {
                    return Object.assign({ id: doc.id }, doc.data());
                });
                //tiene que estar igual
                if (documento.length !== 0) {
                    let nuevaActividad = req.body.actividad;
                    //aca es .delete
                    yield firebase_service_1.db.collection('ofertas').doc(documento[0].id).update({
                        actividad: nuevaActividad
                    });
                    return res.status(200).json({
                        status: true
                    });
                }
                else {
                    return res.status(200).json({
                        message: 'Este DNI no está registrado en nuestra base de datos'
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
    //permite moficiar solamente la actividad, a partir del DNI. 
    borrarOferta(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //busco el doc
                let documentos = (_a = (yield firebase_service_1.db.collection('ofertas').where('dni', '==', req.body.dni).get())) === null || _a === void 0 ? void 0 : _a.docs.map(doc => {
                    return Object.assign({ id: doc.id }, doc.data());
                });
                if (documentos.length !== 0) {
                    yield firebase_service_1.db.collection('ofertas').doc(documentos[0].id).delete();
                    return res.status(200).json({
                        status: true
                    });
                }
                else {
                    return res.status(200).json({
                        message: 'Este DNI no está registrado en nuestra base de datos'
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    message: error.message
                });
            }
        });
    }
};
