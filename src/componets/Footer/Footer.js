import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><Link to="/Contenido">Soporte</Link></li>
                <li><Link to="/Contenido">FAQ</Link></li>
                <li><Link to="/Contenido">Política de privacidad</Link></li>
                <li><Link to="/Contenido">Métodos de pago</Link></li>
                <li><Link to="/Contenido">Envíos</Link></li>
                <li><Link to="/Contenido">Cambios y Devoluciones</Link></li>
                <li><Link to="/">Atención telefónica: 0-800-345-6325</Link></li>
            </ul>
            <p>
                © Copyright 2022 OSVALDO S.A. Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default Footer;