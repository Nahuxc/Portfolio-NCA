import React from 'react'
import "./PartServices.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const PartServices = () => {
  return (
    <div>
      <div className='sect-services'>
        <h2 className='titleServices'>Services</h2>
      <div className='services' >
            <div className='box-services'>
              <div className='services-titles'>
                <FontAwesomeIcon to={faCode} />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias voluptas delectus sequi quia architecto incidunt. Illum, minus. Aspernatur quo est quia, officia eos hic tempore eaque? Non, ipsa. Consectetur.</p>
              </div>
              <div className='services-titles'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias voluptas delectus sequi quia architecto incidunt. Illum, minus. Aspernatur quo est quia, officia eos hic tempore eaque? Non, ipsa. Consectetur.</p>
              </div>
              <div className='services-titles'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias voluptas delectus sequi quia architecto incidunt. Illum, minus. Aspernatur quo est quia, officia eos hic tempore eaque? Non, ipsa. Consectetur.</p>
              </div>
                <div className='services-icons'>
                  <Link target='_blank' to={"https://github.com/Nahuxc"} ><FontAwesomeIcon className='github-icon' icon={faGithub} /></Link>
                  <Link target='_blank' to={"https://www.linkedin.com/in/nahuel-coronel-09a846229/"} ><FontAwesomeIcon className='linkedin-icon' icon={faLinkedin} /></Link> 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PartServices