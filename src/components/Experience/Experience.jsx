import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience' className='exp'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className=" container experience__container">


        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
              </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>

              </div>
              
            </article>

          </div>
        </div>



        <div className="experience__backend">
          <h3>Video Editing</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>Premiere Pro</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>After Effects</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>VSDC</h4>
                <small className='text-light'>Experienced</small>
              </div>
                
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>Kinemaster</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
                <h4>Canva</h4>
                <small className='text-light'>Intermediate</small>

              </div>
              
            </article>

          

          </div>
        </div>
      
      
      
      </div>
    </section>
  )
}

export default Experience