import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../Logo/Logo'
import SubNavbar from './SubNavbar/SubNavbar'

const Navbar = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 800px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <nav className='interfaz-nav'>
      {
        !matches ? (
        <ul className='box-interfaz'>
          <Logo/>
          <SubNavbar/>
        </ul>
        ) : (
      <ul className='box-interfaz'>
        <Logo/>
        <NavLink to="/home" className={({isActive})=> isActive ? "active" : ""} >Home</NavLink>
        <NavLink to="/skills" className={({isActive})=> isActive ? "active" : ""} >Skills</NavLink>
        <NavLink to="/portfolio" className={({isActive})=> isActive ? "active" : ""} >Portfolio</NavLink>
        <NavLink to="/services" className={({isActive})=> isActive ? "active" : ""} >Services</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive ? "active" : ""} >Contact</NavLink>
      </ul>
        )
      }
    </nav>
  )
}

export default Navbar