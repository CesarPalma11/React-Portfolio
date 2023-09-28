import React from 'react'
import './skills.css'
import {GrReactjs} from 'react-icons/gr'
import {RiJavascriptFill} from 'react-icons/ri'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
const Skills = () => {
  return (
    <>
    <div className='linea'>
    <div className='skills'>
        <div className='content'>
            <h2>Conocimientos</h2>
            <div className='info'>
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

            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Skills