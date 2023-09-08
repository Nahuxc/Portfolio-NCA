import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faCss3, faFigma, faBootstrap, faReact, faSass, faGit , faNodeJs, faPython} from '@fortawesome/free-brands-svg-icons'
import iconTypescript from "../assets/img/typescript.png"
import iconMysql from "../assets/img/mysql.png"
import iconMongodb from "../assets/img/mongodb.svg"
import visualCodeIco from "../assets/img/visualCode.png"
import "./Skills.css"

const Skills = () => {
  return (
    <div className='blog'>
      <div className='studios'>
        <div className='studios-sect'>
          <h2>titulo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, maiores.</p>
        </div>
        <div className='studios-sect'>
          <h2>titulo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, maiores.</p>
        </div>
        <div className='studios-sect'>
          <h2>titulo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, maiores.</p>
        </div>
      </div>
        <div className='skill-sect'>
            <h2 className='titleSkills'> <span>S</span>kills</h2>
          <div className='skll-sect-habilities'>
              <div className='skill-box'>
                <FontAwesomeIcon className='fahtml5' icon={faHtml5} />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='facss3' icon={faCss3} />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='fajs' icon={faJs} />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='fareact' icon={faReact} />
              </div>
              <div className='skill-box'>
                <img className='typescriptIco' src={iconTypescript} alt="typescript" />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='fasass' icon={faSass} />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='fabootstrap' icon={faBootstrap} />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='fapython' icon={faPython} />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='fanode' icon={faNodeJs} />
              </div>
              <div className='skill-box'>
                <img src={iconMysql} alt="mysql" />
              </div>
              <div className='skill-box'>
                <img className='mongodbIco' src={iconMongodb} alt='MongoDB icon by Icons8' ></img>
              </div>
              <div className='skill-box'>
                <img className='visualCodeIco' src={visualCodeIco} alt='visual studios code' ></img>
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='fagit' icon={faGit} />
              </div>
              <div className='skill-box'>
                <FontAwesomeIcon className='faFigma' icon={faFigma}  />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skills