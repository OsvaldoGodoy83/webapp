import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ titulopagina, color}) {
    return (
        <nav style={{ backgroundColor: color}}>
            <h2>{titulopagina}</h2>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Phone">Smartphones</NavLink></li>
                <li><NavLink to="/Phone">Smart TV</NavLink></li>
                <li><NavLink to="/Contenido">Cámaras</NavLink></li>
                <li><NavLink to="/Formulario">Soporte</NavLink></li>
            </ul>
        </nav>
    )
}
