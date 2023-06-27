import React from 'react';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Landing from './components/Landing/landing'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar'
import Legal from './components/Legal/legal'
import FormularioBusco from './components/FormularioBusco/formularioBusco';
import FormularioOfrezco from './components/FormularioOfrezco/formularioOfrezco';
import AboutUs from './components/AboutUs/aboutUs';

const App = () => {
  return(
    
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/formularioBusco" element={<FormularioBusco />} />
          <Route path="/formularioOfrezco" element={<FormularioOfrezco />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer/>
        </div>
        );
  };

export default App;
