import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/logoBlanco.png'

const NavBar = () => {
  return (
        <nav className='navBar'>
            <div className='box'>
                <img src={logo} className='logo'/>
            </div>
            <div className='box'>
                <ul className='menu'>
                    <li>HISTORIA</li>
                    <li>SERVICIOS</li>
                    <li>PATRONES PDF</li>
                    <li>TU COLOR IDEAL</li>
                    <li>BLOG</li>
                    <li>CONTACTO</li>
                </ul>
            </div>
            <div className='box'>
                <div className='language'>
                    <select className='select'>
                        <option className='idioma' value="" disabled selected>IDIOMA</option>
                        <option value="es">ESPAÑOL</option>
                        <option value="fr">FRANCÉS</option>
                        <option value="en">INGLÉS</option>
                    </select>
                </div>
            </div>
        </nav>
  )
}

export default NavBar