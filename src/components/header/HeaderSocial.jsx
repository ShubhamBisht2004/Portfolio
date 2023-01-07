import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'



const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/shubham-bisht-6482aa22a/?original_referer=https%3A%2F%2Flinktr.ee%2F' target="_blank"><BsLinkedin/></a>
        <a href='https://instagram.com/20bishtshubham?igshid=NTdlMDg3MTY=' target='_blank'><BsInstagram/></a>
        <a href='https://www.youtube.com/channel/UCAftts9XexBaqA1D-DlwgcA' target='_blank'><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocial 