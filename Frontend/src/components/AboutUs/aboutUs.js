import React from "react";
import logo from '../../img/logo1.png';
import { Link } from "react-router-dom";
import "./aboutUs.css"
import imgAboutUs from '../../img/imgAboutUs.jpg'
import whatsApp from "../../img/media-icons/whatsApp.svg"   

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <header className="aboutUsHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo" alt="logo"/>
                        <div className='textoBienvenida'>
                            <div className='nombreMarca'><h1>TrabajosYA</h1></div>
                            <p>Acerca de Nosotros</p>
                            <p className='aboutUsText'>TrabajosYa es una compañía marplatense dedicada a conectar las necesidades de nuestros usuarios. Está orientada fundamentalmente a vincular a aquellos que necesitan solucionar un inconveniente doméstico -ya sea un problema eléctrico, de plomería, o mantenimiento en general, entre miles de otras opciones- con quien SABE COMO SOLUCIONARLO. 
                            El objetivo de nuestra plataforma es ofrecer un entorno seguro para que trabajadores de diversos oficios y clientes cercanos geográficamente puedan conectar y ayudarse mutuamente. Es por eso que nos tomamos muy en serio nuestra tarea, y contamos con mecanismos de validación de identidad, calificación de usuarios, currículum e historial de todos nuestros usuarios registrados. 
                            Los que hacemos TrabajosYa, sabemos lo importante que es poder contar con una solución cercana y confiable en momentos de apuros o inconvenientes domésticos, y para eso te acercamos la mejor solución! </p>
                        </div> 
                        <div className="imgContainer">
                        <img src={imgAboutUs} className="imgAboutUs" alt="aboutUs"/>  
                        </div>
                        
                    <Link className="CTAButton" to="/home">Volver a Inicio</Link>
                </div>
                <div className="whatsapp">
                    <p className="whatsappContact">¡Estamos disponibles en WhatsApp las 24hs!</p>
                    <a className="btn-wsp" href="https://api.whatsapp.com/send?phone=2235403055" role="button"><i
                        className="whatsapp"><img src={whatsApp} alt="" /></i>
                    </a>
                </div>
            </header>
        </div>
    )
};

export default AboutUs