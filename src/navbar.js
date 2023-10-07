import React from 'react'
import { Link } from 'react-router-dom'
import {useRef} from 'react'
import {GoMail} from 'react-icons/go'
import { FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css'
const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
}

  return (
    <>
    <div className='container'>
        <div className="nav">
        <a href='mailto:cesarpalmag16@gmail.com' className='buttom_mail' without rel='noreferrer' target='_blank'><GoMail /></a>
        <nav ref={navRef}>
                <ul>
                    <li><Link to="/" className='link'>Inicio</Link></li>
                    <li><Link to="/skills" className='link'>Sobre mi</Link></li>
                    <li><Link to="/projects" className='link'>Proyectos</Link></li>
                    <li><Link to="/contact" className='link'>Contacto</Link></li>
                </ul>
                  <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                  </button>
          </nav>
            </div>
            <button className='nav-btn' onClick={showNavbar}>
              <FaBars />
            </button>
    </div>
    </>
  )
}

export default Navbar