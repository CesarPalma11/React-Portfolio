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

<div className='container-cards' id='projects'>
    <div className='row'>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
          <img src='./img/project1.png' alt='img' className='card-img-top'></img>
          <div className='card-body'>
            <h5 className='card-title'>Nike Store</h5>
            <p className='card-text'> Realizado con ReactJS - Bootstrap</p>
            <a href='https://github.com/CesarPalma11/Nike_Store/tree/master' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{marginLeft: '3rem'}}><AiFillGithub />Repositorio</a>

            <a href='https://replynikestore.netlify.app' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{marginLeft: '2rem'}}><AiOutlineDribbble />View</a>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4'>
      <div className='card'>
          <img src='./img/project3.png' alt='img' className='card-img-top'></img>
          <div className='card-body'>
            <h5 className='card-title'>Audi Reply</h5>
            <p className='card-text'> Realizado con ReactJS - Bootstrap</p>
            <a href='https://github.com/CesarPalma11/audi_agency' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{marginLeft: '3rem'}}><AiFillGithub />Repositorio</a>

            <a href='https://audireply.netlify.app/' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{marginLeft: '2rem'}}><AiOutlineDribbble />View</a>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4'>
      <div className='card'>
          <img src='./img/pf_img.png' alt='img' className='card-img-top'></img>
          <div className='card-body'>
            <h5 className='card-title'>Portafolio</h5>
            <p className='card-text'> Realizado con ReactJS - Bootstrap</p>
            <a href='https://github.com/CesarPalma11/React-Portfolio' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{marginLeft: '3rem'}}><AiFillGithub />Repositorio</a>

            <a href='cesarpalma.netlify.app' target='_blank' rel='noopener noreferrer' className='btn btn-primary' style={{marginLeft: '2rem'}}><AiOutlineDribbble />View</a>
          </div>
        </div>
      </div>
    </div>
</div>


    </>
  )
}
export default Projects

