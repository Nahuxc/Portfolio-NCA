import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NotFound.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className='not-found-box'>
      <div className='not-found'>
        <p className='error'>err<span>O</span>r</p>
        <span>404*</span>
        <h2> <FontAwesomeIcon icon={faMagnifyingGlass} /> La Direccion buscada no existe </h2>
        <NavLink to="/home" className='btn-back'>Volver Al Inicio</NavLink>
      </div>
    </div>
  )
}

export default NotFound