import React from 'react';
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgfacebook from '../../img/media-icons/facebook.svg'
import imgtwitter from '../../img/media-icons/twitter.svg'
import imggoogle from '../../img/media-icons/google.svg'
import imginstagram from '../../img/media-icons/instagram.svg'
import imglinkedin from '../../img/media-icons/linkedin.svg'

const Footer = () => {
    return(
        <footer className='footerContainer'> 
            <div className="mb-4">
            <h3 className='trademark'>TrabajosYa® es una marca registrada. Todos los derechos se encuentran reservados. Si tenes dudas, podés comunicarte las 24hs al 0800-333-2514.</h3>            
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"><i
                        className="fab fa-facebook-f"><img src={imgfacebook}/></i></a>

                <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com" role="button"><i
                        className="fab fa-twitter"><img src={imgtwitter} alt=""/></i></a>

                <a className="btn btn-outline-light btn-floating m-1" href="https://google.com" role="button"><i
                        className="fab fa-google"></i>
                    <img src={imggoogle} alt=""/></a>

                <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com" role="button"><i
                        className="fab fa-instagram"></i>
                    <img src={imginstagram} alt=""/></a>

                <a className="btn btn-outline-light btn-floating m-1" href="https://linkedin.com" role="button"><i
                        className="fab fa-linkedin-in"><img src={imglinkedin} alt=""/></i></a>

            </div>
        </footer>

        
    )
};



export default Footer;