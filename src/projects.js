import React, { useEffect } from 'react'
import {AiOutlineDribbble, AiFillGithub} from 'react-icons/ai'
import './projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

  useEffect(() => {
    Aos.init({duration: 2500});
  }, [])

  return (
    <>
    {/* PROJECT 1*/}
      <div className='projects section' id='projects'>
        <div className='section_title-1'>
          <h1>Proyectos</h1>
        </div>
        <div className='projects_container' data-aos="fade-right">
          <div className='projects_card' >
            <div className='projects_image'>
              <img src='./img/project1.png' alt='' className='projects_img'></img>

              
            </div>
            
            <div className='projects_content'>
              <h3 className='projects_subtitle'>Website</h3>
              <h2 className='projects_title'>Nike Store</h2>

              <p className='projects_description'>
                Proyecto hecho con ReactJS
              </p>
            </div>
            <div className='projects_buttons'>
              <a href='https://github.com/CesarPalma11/Nike_Store/tree/master' target='_blank' rel='noopener noreferrer' className='projects_link'>
                <AiFillGithub /> Repositorio
                
              </a>

              <a href='https://replynikestore.netlify.app' target='_blank' rel='noopener noreferrer' className='projects_link'>
                <AiOutlineDribbble /> View
                
              </a>
            </div>
          </div>
        </div>
      </div>

{/* PROJECT 2*/}

<div className='projects section' id='projects'>
        <div className='section_title-1'>
          
        </div>
        <div className='projects_container' data-aos="fade-left">
          <div className='projects_card'>
            <div className='projects_image'>
              <img src='./img/project3.png' alt='' className='projects_img'></img>

            </div>
            
            <div className='projects_content'>
              <h3 className='projects_subtitle'>Website</h3>
              <h2 className='projects_title'>Audi Reply</h2>

              <p className='projects_description'>
                Realizado con React JS
              </p>
            </div>
            <div className='projects_buttons'>
              <a href='https://github.com/CesarPalma11/audi_agency' target='_blank' rel='noopener noreferrer' className='projects_link'>
                 <AiFillGithub /> Repositorio
                 
              </a>

               <a href='https://audireply.netlify.app/' target='_blank' rel='noopener noreferrer' className='projects_link'>
                <AiOutlineDribbble /> View
                
              </a>
            </div>
          </div>
        </div>
      </div>

{/* PROJECT 3 */}

<div className='projects section' id='projects'>
        <div className='section_title-1'>
          
        </div>
        <div className='projects_container' data-aos="fade-right">
          <div className='projects_card'>
            <div className='projects_image'>
              <img src='./img/pf_img.png' alt='' className='projects_img'></img>

            </div>
            
            <div className='projects_content'>
              <h3 className='projects_subtitle'>Website</h3>
              <h2 className='projects_title'>Portafolio Personal</h2>

              <p className='projects_description'>
                Realizado con ReactJS
              </p>
            </div>
            <div className='projects_buttons'>
              <a href='https://github.com/CesarPalma11/React-Portfolio' target='_blank' rel='noopener noreferrer' className='projects_link'>
                 <AiFillGithub /> Repositorio
                 
              </a>

               <a href='cesarpalma.netlify.app' target='_blank' rel='noopener noreferrer' className='projects_link'>
                <AiOutlineDribbble /> View
                
              </a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default Projects

