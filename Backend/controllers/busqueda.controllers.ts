import { Request, Response } from "express";
import { db } from "../services/firebase.service";

export const busquedaController= {
    async cargarBusqueda (req: Request, res: Response) { 
        try {
            console.log(req.body)
            const docRef= await db.collection('busquedas').add({ 
                email: req.body.email,
                nombre: req.body.nombre,
                edad: req.body.edad,
                dni: req.body.dni,
                actividad: req.body.actividad.toLowerCase()
            });
   
            let ofertas = (await db.collection('ofertas').where('actividad', '==', req.body.actividad.toLowerCase()).get()).docs.map(doc => doc.data())

            if (ofertas.length === 0) {
                return res.status(200).json({
                    id: docRef.id
                })
            } else {
                return res.status(200).json({
                    id: docRef.id,
                    ofertas: ofertas
                })
            } 


        } catch (error: any) {
            return res.status(500).json({
                message: error.message
            })
        }
    },
};


