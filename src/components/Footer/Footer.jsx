import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <ul className='contact-info'>
          <li><Link target='_blank' to={"https://github.com/Nahuxc"} ><FontAwesomeIcon className='github-icon' icon={faGithub} /></Link></li>
          <li><Link target='_blank' to={"https://www.linkedin.com/in/nahuel-coronel-09a846229/"} ><FontAwesomeIcon className='linkedin-icon' icon={faLinkedin} /></Link></li>
          <li> <FontAwesomeIcon className='envelope' icon={faEnvelope} /> </li>
          <li><FontAwesomeIcon className='faphone' icon={faPhone} /></li>
        </ul>
      </div>
      <div className="autor-copyright">
            <div className="bar"></div>
            <p>©<b> Portfolio / Nahuel Alexander Coronel</b></p>
        </div>
    </footer>
  )
}

export default Footer