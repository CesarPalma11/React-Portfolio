import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='container'>
        <div className="nav">
                <ul>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/skills" className='link'>Skills</Link></li>
                    <li><Link to="/projects" className='link'>Projects</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                </ul>
                  
                
            </div>
    </div>
    </>
  )
}

export default Navbar