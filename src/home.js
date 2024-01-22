import React, { useEffect } from 'react'
import './home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { AiFillLinkedin } from 'react-icons/ai';
import {AiOutlineArrowDown, AiFillGithub} from 'react-icons/ai'
import {GoMail} from 'react-icons/go'
import {BsWhatsapp} from 'react-icons/bs'
import {LuMapPin} from 'react-icons/lu'
import { Link } from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2500});
  }, [])

  const [text] = useTypewriter({
    words: [' Developer', ' Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  return (
    <> 
    
    <div className='home'>
        

        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
            <img src='./img/photo.jpeg' alt='img' className='img-fluid'/> 
            <div className='icons'>
              <a href='mailto:cesarpalmag16@gmail.com' className='buttom_mail' without rel='noreferrer' target='_blank'><GoMail /></a>
              <a href='https://www.linkedin.com/in/cesarpalma11/' className='buttom' without rel='noreferrer'><AiFillLinkedin /></a>
              <a href='https://github.com/CesarPalma11' className='buttom' without rel='noreferrer'><AiFillGithub /></a>
          </div>


            </div>
            <div className='col-md-6'>
              <div className='move'>
            <h1>¡Hey👋!<br></br>soy <span style={{color:'yellow'}}>cesar palma</span><br></br> {''}
          <span style={{color:'yellow'}}>{text}</span>
          <span style={{color:'yellow'}}>
          
            
            <Cursor  cursorStyle='<' />

            <p className='pin'>Argentina <LuMapPin className='pin_color' /> </p>
          </span>
          <div className='btn'>
          <Link to='contact' spy={true} smooth={true} offset={50} duration={700} className='btn_ct'>Contacto</Link>
          <a href='/documents/Cesar+Palma+FrontEnd+Developer.pdf' download className='btn_cv' without rel='noreferrer' >Descargar CV </a>
          
          </div>
          </h1> 
          </div>
            </div>
          </div>
        </div>

        <a href='https://wa.me/5491160185717/?text=Hola,%20queria%20comunicarme%20con%20usted!'  className='btn_wsp' without rel="noreferrer" ><BsWhatsapp /> </a>
        </div>
    </>
  )
}

export default Home