import React from 'react'
import {AiOutlineDribbble, AiFillGithub} from 'react-icons/ai'
import './projects.css'

const Projects = () => {
  return (
    <>
    {/* PROJECT 1*/}
      <div className='projects section' id='projects'>
        <div className='section_title-1'>
          <span>Projects</span>
        </div>
        <div className='projects_container'>
          <div className='projects_card'>
            <div className='projects_image'>
              <img src='./img/project1.png' alt='' className='projects_img'></img>

              
            </div>
            
            <div className='projects_content'>
              <h3 className='projects_subtitle'>Website</h3>
              <h2 className='projects_title'>Nike Store Website</h2>

              <p className='projects_description'>
                Project that you carry out in the design and structure of the layout
              </p>
            </div>
            <div className='projects_buttons'>
              <a href='https://github.com/CesarPalma11/Nike_Store/tree/master' target='_blank' rel='noopener noreferrer' className='projects_link'>
                <AiFillGithub /> View
                
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
        <div className='projects_container'>
          <div className='projects_card'>
            <div className='projects_image'>
              <img src='./img/project1.png' alt='' className='projects_img'></img>

            </div>
            
            <div className='projects_content'>
              <h3 className='projects_subtitle'>Website</h3>
              <h2 className='projects_title'>Nike Store Website</h2>

              <p className='projects_description'>
                Project that you carry out in the design and structure of the layout
              </p>
            </div>
            <div className='projects_buttons'>
              <a href='https://github.com/CesarPalma11/React-Portfolio' target='_blank' rel='noopener noreferrer' className='projects_link'>
                 <AiFillGithub /> View
                 
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

