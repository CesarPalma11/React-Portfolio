import React from 'react'
import { Link } from 'react-scroll'
import {useRef} from 'react'
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
        <nav ref={navRef}>
                <ul>
                    <li><Link to="home" spy={true} smooth={true} offset={50} duration={700} className='link'>Inicio</Link></li>
                    <li><Link to="skills" spy={true} smooth={true} offset={50} duration={700} className='link'>Sobre mi</Link></li>
                    <li><Link to="projects" spy={true} smooth={true} offset={50} duration={700} className='link'>Proyectos</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} offset={50} duration={700} className='link'>Contacto</Link></li>
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