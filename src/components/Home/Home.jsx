import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='box-home'>
      <div className='box-home-contentText'>
        <div className='text-presentation'>
          <p><span className='spanText'>Welcome</span>, It´s Me</p>
          <h2><span className='h2-span1'>N</span>ahuel <span className='h2-span2'>A</span>lexander <span className='h2-span3'>C</span>oronel</h2>
          <h3>And I´m <span className='h3-span2'>Full Stack Developer</span></h3>
        </div>
        <div className='text-description'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, suscipit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam labore molestiae dolor eos neque culpa molestias esse pariatur tempora optio!</p>
        </div>
        <div className='btn-cv'>
          <button>DOWNLOAD CV</button>
        </div>
      </div>
    </div>
  )
}

export default Home