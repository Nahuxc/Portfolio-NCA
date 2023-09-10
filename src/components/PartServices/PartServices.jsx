import React from 'react'
import "./PartServices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGlobe, faUsers} from '@fortawesome/free-solid-svg-icons'

const PartServices = () => {
  return (
    <div className='sect-services'>
      <h2 className='titleServices'>Services</h2>
      <div className='box-services' >
              <div className='box-services-titles'>
                <FontAwesomeIcon className='iconServices' icon={faCode} />
                <h2>Website Code</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias voluptas delectus sequi quia architecto incidunt. Illum, minus. Aspernatur quo est quia, officia eos hic tempore eaque? Non, ipsa. Consectetur.</p>
              </div>
              <div className='box-services-titles'>
              <FontAwesomeIcon className='iconServices' icon={faGlobe} />
                <h2>Create Websites In Wordpress</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias voluptas delectus sequi quia architecto incidunt. Illum, minus. Aspernatur quo est quia, officia eos hic tempore eaque? Non, ipsa. Consectetur.</p>
              </div>
              <div className='box-services-titles'>
              <FontAwesomeIcon className='iconServices' icon={faUsers} />
                <h2>Support Websites</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias voluptas delectus sequi quia architecto incidunt. Illum, minus. Aspernatur quo est quia, officia eos hic tempore eaque? Non, ipsa. Consectetur.</p>
              </div>
      </div>
    </div>
  )
}

export default PartServices