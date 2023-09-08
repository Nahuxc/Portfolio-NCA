import React from 'react'
import "./Portfolio.css"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Portfolio = () => {

  const works = [
    {
        "id": 1,
        "name": "Book Store Cursos",
        "url": "https://nahuxc.github.io/Book-Store-cursos/",
        "img":"Book-Store-Courses-Home.png",
        "tecnologies" : "HTML, CSS, JS, SASS",
        "categorias": "Desarrollo Web"
    },
    {
        "id": 2,
        "name": "E-commerce Nike Project",
        "url": "https://nahuxc.github.io/Book-Store-cursos/",
        "img":"E-commerce-Nike.png",
        "tecnologies" : "JS, React, Node, FireBase",
        "categorias": "Aplicaciones"
    },
    {
        "id": 3,
        "name": "Pelicoms",
        "url": "https://nahuxc.github.io/Book-Store-cursos/",
        "img":"PeliComs.png",
        "tecnologies" : "JS, React",
        "categorias": "Aplicaciones"
    }
]

  return (
    <div className='sect-portfolio'>
        <h2 className='titlePort'>Portfolio | Proyectos</h2>
      <div className='portfolio' >
        {
          works.map((work)=>{
            return (
            <div key={work.id} className='box-works'>
              <div>
                <img src={"../../../public/images/" + work.img} alt="" />
              </div>
              <div className='work-titles'>
                <h2>{work.name}</h2>
                <h3>{work.tecnologies} </h3>
                <span>{work.categorias} </span>
              </div>
                <Link target='_blank' to={work.url} ><button>Visitar Web</button></Link>
                <div className='work-icons'>
                   <Link target='_blank' to={"https://github.com/Nahuxc"} ><FontAwesomeIcon className='github-icon' icon={faGithub} /></Link>
                  <Link target='_blank' to={"https://www.linkedin.com/in/nahuel-coronel-09a846229/"} ><FontAwesomeIcon className='linkedin-icon' icon={faLinkedin} /></Link> 
                </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio