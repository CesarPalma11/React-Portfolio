import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {



  return (
 <>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <div class="container">
    <Link to='home' class="navbar-brand fs-4"></Link>
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-4">
        <Link to='home' class="nav-link mx-2" aria-current="page">Inicio</Link>
        <Link to='skills' class="nav-link mx-2">Sobre mi</Link>
        <Link to='projects' class="nav-link mx-2">Proyectos</Link>
        <Link to='contact' class="nav-link mx-2">Contacto</Link>
      </div>
    </div>
  </div>
</nav>









</>
  )
}

export default Navbar