import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4dfak5x', 'template_vy05oni', form.current, 'SddJZOnegLhdzj-pX')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        
        <div className="contact__options">
          <artical className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>shubhambisht2411@gmail.com</h5>
            <a href="mailto:shubhambisht2411+contact@gmail.com" target='_blank'>Send a message</a>
          </artical>


          <artical className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@20bishtshubham</h5>
            <a href="https://instagram.com/20bishtshubham?igshid=NTdlMDg3MTY=" target='_blank'>Send a message</a>
          </artical>


          <artical className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9855551122</h5>
            <a href="https://wa.me/qr/OKIQUHTEHIAXP1" target='_blank'>Send a message</a>
          </artical>
        </div>
        
        
        
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Full Name' required/>
          <input type="text" name='Email' placeholder='Your Email' required/>
          <textarea name="Message" rows="10" placeholder='Your Message' required></textarea>
          <button type='Submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default Contact