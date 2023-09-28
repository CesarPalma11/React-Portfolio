import React from 'react'
import './home.css'
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <> 
    <div className='linea'>
    
    
    <div className='home'>
        <div className='content'>
          <h1>Fullname</h1> 
          <p> lorem ipsum</p>
        </div>
        <div className='btn'>
          <Link to='/' className='btn_ct'>Contact</Link>
          <a href='/documents/CV-Cesar+Gastón+Palma.pdf' download className='btn_cv' without rel='noreferrer' >Download CV </a>
          
        </div>
        <a href='https://wa.me/5491160185717/?text=Hola,%20queria%20comunicarme%20con%20usted!'  className='btn_wsp' without rel="noreferrer" ><BsWhatsapp /> </a>
        <div className='icons'>
          <button ><AiFillLinkedin className='buttom' /></button>
          <button ><AiOutlineTwitter className='buttom'/></button>
          <button ><AiOutlineInstagram className='buttom'/></button>
        </div>
          <div className='arrow'><AiOutlineArrowDown /></div>
        </div>
        </div>
    </>
  )
}

export default Home