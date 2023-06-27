import React from "react";
import logo from '../../img/logo1.png';
import { Link } from "react-router-dom";
import "./landing.css"

const Landing = () => {
    return (
        <div className="landing">
            <header className="landingHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo" alt="logo"/>
                        <div className='textoBienvenida'>
                            <p>Bienvenidos a <div className='nombreMarca'><h1>TrabajosYA</h1></div></p> 
                            <p>¡La primera plataforma argentina dedicada a vincular la oferta y demanda de trabajadores cuentapropistas!</p>
                            <p className='knowMore'>¿Querés saber más?</p>
                        </div>   
                    <Link className="CTAButton" to="/home">¡Ingresá Aquí!</Link>
                </div>
            </header>
        </div>
    )
};

export default Landing