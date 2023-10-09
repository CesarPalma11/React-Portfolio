import React from 'react'
import './home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import {AiOutlineArrowDown, AiFillGithub} from 'react-icons/ai'
import {GoMail} from 'react-icons/go'
import {BsWhatsapp} from 'react-icons/bs'
import {LuMapPin} from 'react-icons/lu'
import { Link } from 'react-scroll'

const Home = () => {

  const [text] = useTypewriter({
    words: [' Developer', ' Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  return (
    <> 
    
    
    <div className='home'>
        <div className='content'>
          <h1>¡Hey👋!<br></br>soy <span style={{color:'yellow'}}>cesar palma</span><br></br> {''}
          <span style={{color:'yellow'}}>{text}</span>
          <span style={{color:'yellow'}}>
            
            <Cursor  cursorStyle='<' />
          </span>
          </h1> 
          
        </div>
        <div className='btn_div'>
        <p className='pin'>Argentina <LuMapPin className='pin_color' /> </p>
        <div className='btn'>

          <Link to='contact' spy={true} smooth={true} offset={50} duration={700} className='btn_ct'>Contacto</Link>
          <a href='/documents/CV-Cesar+Gastón+Palma.pdf' download className='btn_cv' without rel='noreferrer' >Descargar CV </a>
          </div>
        </div>
        <a href='https://wa.me/5491160185717/?text=Hola,%20queria%20comunicarme%20con%20usted!'  className='btn_wsp' without rel="noreferrer" ><BsWhatsapp /> </a>
        <div className='icons'>
          <a href='mailto:cesarpalmag16@gmail.com' className='buttom_mail' without rel='noreferrer' target='_blank'><GoMail /></a>
          <a href='https://www.linkedin.com/in/cesarpalma11/' className='buttom' without rel='noreferrer'><AiFillLinkedin /></a>
          <a href='https://htmlcolorcodes.com/es/' className='buttom' without rel='noreferrer'><AiOutlineTwitter /></a>
          <a href='https://github.com/CesarPalma11' className='buttom' without rel='noreferrer'><AiFillGithub /></a>
        </div>
          <div className='arrow'><AiOutlineArrowDown /></div>
        </div>
        

    </>
  )
}

export default Home