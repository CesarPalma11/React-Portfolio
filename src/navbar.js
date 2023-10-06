import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='container'>
        <div className="nav">
                <ul>
                    <li><Link to="/" className='link'>Inicio</Link></li>
                    <li><Link to="/skills" className='link'>Sobre mi</Link></li>
                    <li><Link to="/projects" className='link'>Proyectos</Link></li>
                    <li><Link to="/contact" className='link'>Contacto</Link></li>
                </ul>
                  
                
            </div>
    </div>
    </>
  )
}

export default Navbar