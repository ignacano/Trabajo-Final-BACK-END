import React, { useState } from "react";
import logo from '../../img/logo1.png';
import arrowDown from '../../img/arrowDown.png';
import './formularioOfrezco.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioOfrezco = () => {

    let [email, setEmail] = useState('')
    let [nombre, setNombre] = useState('')
    let [edad, setEdad] = useState('')
    let [dni, setDni] = useState('')
    let [actividad, setActividad] = useState('')

    const saveForm = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:3001/ofertas/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, //pegarle a la API y cargar una solicitud
            body: JSON.stringify({
                email: email,
                nombre: nombre,
                edad: edad,
                dni: dni,
                actividad: actividad,
            })
        })

        const data = await response.json();
        
        if (data.error)
            alert(data.error);
        else {
            
            let emails = data.busquedas?.map(busqueda => '» ' + busqueda.email + '\n');
            let message = ''
            if (emails) {
                message= 'Hay personas que buscan la actividad que registraste: \n';
                alert(message + emails);
            } else {
                message= 'Tu oferta ha sido registrada correctamente'
                alert(message);
            };

        };
    };

    const updateActividad = async (e) => {
        e.preventDefault();

        let DNI = prompt('Ingrese su DNI:');
        let nuevaActividad = prompt('Ingresa tu nueva actividad:');

        const response = await fetch('http://127.0.0.1:3001/ofertas/update/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, //pegarle a la API y modificar una solicitud
            body: JSON.stringify({
                dni: DNI,
                actividad: nuevaActividad,
            })
        });

        let data = await response.json();

        if (!data.status)
            alert(data.message);
        else {
            alert('Tu actividad fue actualizada correctamente');
        }
    }

    const deleteOferta = async (e) => {
        e.preventDefault();

        let DNI = prompt('Ingrese su DNI:');

        const response = await fetch('http://127.0.0.1:3001/ofertas/delete/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, //pegarle a la API y modificar una solicitud
            body: JSON.stringify({
                dni: DNI
            })
        });

        let data = await response.json();

        if (!data.status)
            alert(data.message);
        else {
            alert('Tu solicitud fue eliminada correctamente');
        }
    }
    
    return(
        <div className="formOfrezco">
            <header className="formOfrezcoHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo-home" alt="logo"/>
                        <div className='textoBienvenida'>
                            <p><div className='nombreMarca'><h1 className="textoMarca">TrabajosYA</h1></div></p> 
                            <p className="descripcionServicio">Para poder registrarte en nuestra plataforma, necesitaremos algunos datos sobre ti.</p>
                            <p className='knowMore'>Por favor, completa el siguiente formulario y haz click en <p className="enviarSolicitud">"Publicar mi oferta"</p></p>
                            <img src={arrowDown} className="arrowDown" alt="arrowDown"/> 
                            <div>
                            <Form className="formBuscoForm" method="POST">
                            <Form.Group className="mb-3" controlId="formBasicEmail" name="Email">
                                <Form.Label>Dirección de E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName" name="Name">
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control refs="text" type="text" placeholder="Ingresa tu nombre completo" value={nombre} onChange={(event) => setNombre(event.target.value)} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAge" name="Age">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="number" placeholder="Ingresa tu edad" value={edad} onChange={(event) => setEdad(event.target.value)} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId" name="ID">
                                <Form.Label>D.N.I (Exclusivo Argentina)</Form.Label>
                                <Form.Control type="number" placeholder="Ingresa tu nro. de DNI" value={dni} onChange={(event) => setDni(event.target.value)} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicActivity" name="Activity">
                                <Form.Label>Necesidad/Oferta laboral</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu necesidad/Oferta" value={actividad} onChange={(event) => setActividad(event.target.value)} required/>
                            </Form.Group>
                            <p className="text-muted">Tené en cuenta que todos tus datos son privados, y TrabajosYA nunca compartirá tu información personal con terceros.</p>   
                            <div className="botonContainer">
                            <Button className="botonSubmit"  type="submit" value='send' onClick={saveForm}>Publicar mi oferta</Button>                            
                            </div>
                            <div className="botonContainer">
                            <Button className="botonSubmit"  type="submit" value='send' onClick={deleteOferta}>Declinar mi oferta</Button>                            
                            </div>
                            <div className="botonContainer">
                            <Button className="botonSubmit"  type="submit" value='send' onClick={updateActividad}>Modificar mi oferta</Button>                            
                            </div>
                            </Form>
                            </div>
                        </div>  
                </div>
            </header>
        </div>
    )
};

export default FormularioOfrezco;
    