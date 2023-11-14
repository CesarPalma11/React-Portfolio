import React, { useEffect } from 'react'
import './skills.css'
import {GrReactjs} from 'react-icons/gr'
import {RiJavascriptFill} from 'react-icons/ri'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {BiLogoSass} from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

  return (
    <>
    <div className='skills' id='skills'>
        <div className='content'>
            
            <div className='info_parrafo'>
                <div className='edit_p' data-aos="fade-right">
                <h1>Sobre Mi</h1>
                <p className='parrafo'>Soy Programador FrontEnd con 1 año de experiencia trabajando en proyectos freelancer en busqueda
                 de nuevos desafios y aprendizajes,<br></br>Autodidacta y con buen desempeño en trabajos grupales. Responsable, puntual y con compromiso con el trabajo.</p>
                 </div>
                
                <div className='edit_p' data-aos="fade-left">
                <h1>Formacion</h1>
                <p className='parrafo'>Certificado de freeCodeCamp ~ Tecnico Informatico ~ Curso Full Stack Udemy ~ Curso Front End Udemy
                <br></br> Certificado Cybersecurity with Google ~ Python Programming MOOC 2023 ~ React Course Udemy</p>
                </div>
            </div>
            <h1 className='tec' data-aos="fade-up">Tecnologias</h1>
            
            <div className='info' data-aos="fade-up">
                <div className='icons'>
                    <p>ReactJS</p>
                    <GrReactjs />
                </div>
                <div className='icons'>
                    <p>JavaScript</p>
                    <RiJavascriptFill />
                </div>
                <div className='icons'>
                    <p>HTML5</p>
                    <AiFillHtml5 />
                </div>
                <div className='icons'>
                    <p>CSS</p>
                    <FaCss3Alt />
                </div>
                <div className='icons'>
                    <p>GIT</p>
                    <AiFillGithub />
                </div>
                <div className='icons'>
                    <p>SASS</p>
                    <BiLogoSass />
                </div>
                <div className='icons'>
                    <p>Redux</p>
                    <SiRedux />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills