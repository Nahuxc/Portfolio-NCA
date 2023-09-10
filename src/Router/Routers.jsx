import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Skills from "../components/Skills/Skills"
import Portfolio from "../components/Portfolio/Portfolio"
import PartServices from "../components/PartServices/PartServices"
import Contact from '../components/Contact/Contact'
import NotFound from '../components/NotFound/NotFound'
import Footer from '../components/Footer/Footer'

const Routers = () => {
  return (
    <BrowserRouter>

      {/* HEADER Y NAVEGACION  */}
      <Navbar/>
      {/* CONTENIDO CENTRAL  */}
      <section className='content'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Skills' element={<Skills/>} />
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Services' element={<PartServices/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </section>
      {/* FOOTER  */}
      <Footer/>
    </BrowserRouter>
  )
}

export default Routers