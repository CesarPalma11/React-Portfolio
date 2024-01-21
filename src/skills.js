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
        Aos.init({duration: 3000});
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
                <div className='container-skills'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card card-tec'>
                                <div className='card-body'>
                                    <p className='card-text card-text-tec'>HTML <AiFillHtml5 className='logo-tec'/></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card card-tec'>
                                <div className='card-body'>
                                    <p className='card-text card-text-tec'>CSS <FaCss3Alt className='logo-tec'/></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card card-tec'>
                                <div className='card-body'>
                                    <p className='card-text card-text-tec'>JavaScript <RiJavascriptFill className='logo-tec'/></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card card-tec'>
                                <div className='card-body'>
                                    <p className='card-text card-text-tec'>GIT <AiFillGithub className='logo-tec'/></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card card-tec'>
                                <div className='card-body'>
                                    <p className='card-text card-text-tec'>SASS <BiLogoSass className='logo-tec'/></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card card-tec'>
                                <div className='card-body'>
                                    <p className='card-text card-text-tec'>Redux <SiRedux className='logo-tec'/></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card card-tec'>
                                <div className='card-body'>
                                    <p className='card-text card-text-tec'>ReactJS <GrReactjs className='logo-tec'/></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    
    </>
  )
}

export default Skills