import './App.css'
import "./AppResponsive.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHtml5, faJs, faNodeJs, faNode } from '@fortawesome/free-brands-svg-icons'
import Routers from './Router/Routers'


function App() {
  

  return (
    <div>
      <Routers/>
    </div>
  )
}

library.add(faHtml5, faJs, faNodeJs, faNodeJs)
export default App
