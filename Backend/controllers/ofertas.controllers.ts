import { Request, Response } from "express";
import { db } from "../services/firebase.service";


export const ofertasController= {
    async cargarOfertas (req: Request, res: Response) { 
        try {
            console.log(req.body)
            const docRef= await db.collection('ofertas').add({ 
                email: req.body.email,
                nombre: req.body.nombre,
                edad: req.body.edad,
                dni: req.body.dni,
                actividad: req.body.actividad.toLowerCase()
            });

            let busquedas = (await db.collection('busquedas').where('actividad', '==', req.body.actividad.toLowerCase()).get()).docs.map(doc => doc.data())
            
            if (busquedas.length === 0) {
                return res.status(200).json({
                    id: docRef.id
                })
            } else {
                return res.status(200).json({
                    id: docRef.id,
                    busquedas: busquedas
                })
            } 
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            })
        }
    },
    //permite moficiar solamente la actividad, a partir del DNI. 
    async modificarOferta (req: Request, res: Response) {
        try {
            //busco el doc
            let documento = (await db.collection('ofertas').where('dni', '==', req.body.dni).get())?.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            //tiene que estar igual
            if (documento.length !== 0) {
                let nuevaActividad = req.body.actividad;
//aca es .delete
                await db.collection('ofertas').doc(documento[0].id).update({
                    actividad: nuevaActividad
                })

                return res.status(200).json({
                    status: true
                })
            } else {
                return res.status(200).json({
                    message: 'Este DNI no está registrado en nuestra base de datos'
                })
            } 
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            })
        }
    },
    //permite moficiar solamente la actividad, a partir del DNI. 
    async borrarOferta (req: Request, res: Response) {
        try {
            //busco el doc
            let documentos = (await db.collection('ofertas').where('dni', '==', req.body.dni).get())?.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            
            if (documentos.length !== 0) {
                
                await db.collection('ofertas').doc(documentos[0].id).delete();

                return res.status(200).json({
                    status: true
                })
            } else {
                return res.status(200).json({
                    message: 'Este DNI no está registrado en nuestra base de datos'
                })
            } 
        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
};


