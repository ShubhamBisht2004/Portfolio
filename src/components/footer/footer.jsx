import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'




const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Shubham Bisht</a>
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#Experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#profile">profile</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://facebook.com" target="_blank"><FaFacebook/></a> */}
        <a href="https://instagram.com/20bishtshubham?igshid=NTdlMDg3MTY=" target="_blank"><FiInstagram/></a>
        {/* <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a> */}
      </div>


      <div className="footer__copyright">
        <small>&copy; Shubham Bisht. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer