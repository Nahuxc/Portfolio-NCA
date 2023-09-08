import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='contact-info'>
        <li><FontAwesomeIcon className='linkedin' icon={faLinkedin} /></li>
        <li><FontAwesomeIcon className='github' icon={faGithub} /></li>
        <li> <FontAwesomeIcon className='envelope' icon={faEnvelope} /> </li>
        <li><FontAwesomeIcon className='faphone' icon={faPhone} /></li>
      </div>
      <div className="autor-copyright">
            <div className="bar"></div>
            <p>©<b> Portfolio / Nahuel Alexander Coronel</b></p>
        </div>
    </footer>
  )
}

export default Footer