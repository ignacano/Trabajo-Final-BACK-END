import express from "express"
import cors from "cors"
import { busquedaRouter } from "./routers/busqueda.routers";
import { ofertasRouter } from "./routers/ofertas.routers";
import dotenv from "dotenv"

dotenv.config()
const app = express();
app.use(
    cors()
);

app.use(express.json());
app.use('/busquedas', busquedaRouter)
app.use('/ofertas', ofertasRouter)

let port = process.env.PORT || 3002
app.listen(
    port, ()=> console.log('escuchando en puerto: ', port)
);





