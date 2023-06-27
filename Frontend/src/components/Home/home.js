import React from "react";
import logo from '../../img/logo1.png';
import arrowDown from '../../img/arrowDown.png';
import { Link } from "react-router-dom";
import './home.css'

const Home = () => {
    return(
        <div className="home">
            <header className="homeHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo-home" alt="logo"/>
                        <div className='textoBienvenida'>
                            <p><div className='nombreMarca'><h1 className="textoMarca">TrabajosYA</h1></div></p> 
                            <p className="descripcionServicio">TrabajosYA funciona como un marketplace laboral en tiempo real. Encontrá al instante trabajadores disponibles cerca de tu zona y solucioná todos tus inconvenientes domésticos de una forma práctica y efectiva. <p className="resaltarEnunciado">Para tu completa tranquilidad, podrás acceder a datos, curriculum, y valoración de la experiencia de otros usuarios sobre todos los postulantes registrados!</p></p>
                            <p className='knowMore'>¡Registrate gratis en nuestra App!</p>
                            <img src={arrowDown} className="arrowDown" alt="arrowDown"/> 
                        </div>  
                    <Link className="botonBusco" to="/formularioBusco">¿Buscás trabajo?</Link>
                    <Link className="botonBusco" to="/formularioOfrezco">¿Ofrecés trabajo?</Link>
                </div>
            </header>
        </div>
    )
};

export default Home;