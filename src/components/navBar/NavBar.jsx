import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/logo_negro.png'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <div className='box'>
            <img src={logo} className='logo'/>
        </div>
        <div className='box'>
            <ul className='menu'>
                <li>Historia</li>
                <li>Servicios</li>
                <li>Patrones en pdf</li>
                <li>Tu color ideal</li>
                <li>Blog</li>
                <li>Contacto</li>
            </ul>
        </div>
        <div className='box'>
            <div>
                <select>
                    <option>Español</option>
                    <option>Frances</option>
                    <option>Ingles</option>
                </select>
            </div>
        </div>
    </nav>
  )
}

export default NavBar