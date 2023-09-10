import {useState} from 'react'
import "./SubNavbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCode, faInbox, faHouseLaptop, faEnvelopesBulk, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const SubNavbar = () => {


    const [deploy, setDeploy] = useState(false)

    const deploysideBar = ()=>{
        if(deploy === false){
            setDeploy(true)
            document.querySelector(".sideBar").classList.toggle("on")
            document.querySelector(".btn-sideBar").classList.toggle("move-btn")
        }else if( deploy === true){
            setDeploy(false)
            document.querySelector(".sideBar").classList.remove("on")
            document.querySelector(".btn-sideBar").classList.remove("move-btn")
        }
    }


  return (
    <div>
        <button onClick={()=> deploysideBar()} id='box-interfaz-btn-submenu'>
            {
                deploy === false ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/>
            }
        </button>
        <div className='sideBar'>
            <div className='sideBar-content'>
                <NavLink to="/home" className={({isActive})=> isActive ? "active" : ""} ><FontAwesomeIcon icon={faHome} /></NavLink>
                <NavLink to="/Skills" className={({isActive})=> isActive ? "active" : ""} ><FontAwesomeIcon icon={faCode} /></NavLink>
                <NavLink to="/Portfolio" className={({isActive})=> isActive ? "active" : ""} ><FontAwesomeIcon icon={faInbox} /></NavLink>
                <NavLink to="/Services" className={({isActive})=> isActive ? "active" : ""} ><FontAwesomeIcon icon={faHouseLaptop} /></NavLink>
                <NavLink to="/Contact" className={({isActive})=> isActive ? "active" : ""} ><FontAwesomeIcon icon={faEnvelopesBulk} /></NavLink>
            </div>
        </div>
    </div>
  )
}

export default SubNavbar