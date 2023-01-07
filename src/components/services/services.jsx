import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        


        
      <article className='service'>
          <div className='service__head'>
            <h3>Video Editing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Up to 10 minutes running time</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Color Grading
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sound design & mixing
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Subtitles
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Day Delivery
              </p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Thumbnail (Add On)
              </p>
            </li>
          </ul>
        </article>



        <article className='service'>
          <div className='service__head'>
            <h3>Web Developement</h3>
          </div>

          <ul className='service__list'>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>One Responsive Page Static Website
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>One page website with 5 sections based on your design/prototyp
              </p>
            </li>
            
     
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Functional website
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social media icons
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>2 Days Delivery 
              </p>
            </li>
            
          </ul>
        </article>




      </div>
    </section>
  )
}

export default services