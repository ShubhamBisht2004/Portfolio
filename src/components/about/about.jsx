import React from 'react'
import './about.css'
import ME from '../../Assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>      
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className = 'about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className = 'about__icon'/>
              <h5>Clients</h5>
              <small>7+ Clients</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className = 'about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>

            

            
          </div>
          <p>I am Shubham Bisht, an 18-year-old,  freelancer who enjoys programming and learning about the latest technology. In my free time, I like to listen to music, learn about FPV drones, and DJ. I also frequently devote my time to learning new skills. Some of my long-term goals include being financially free and Earning a steady passive income. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>


    </section>
  )
}

export default about