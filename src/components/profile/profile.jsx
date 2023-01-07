import React from 'react'
import './profile.css'
import IMG1 from '../../Assets/i1.jpeg'
import IMG2 from '../../Assets/i2.PNG'


const data = [
  {
    id: '1',
    title: 'video1',
    link:<iframe width="315" height="178" src="https://www.youtube.com/embed/4SWlMpIaeB0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    ytlink:'https://www.youtube.com/watch?v=4SWlMpIaeB0&t=3s'
  }

]


const datayt = [
  
  {
    id: '1',
    title: 'video1',
    image: IMG1,
    link:'https://drive.google.com/drive/folders/1Sxm_PRHWOmJyTI7okYy8CMCKGm353lHv?usp=share_link'
  }

]



const profile = () => {
  return (
    <section id='profile'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,title,ytlink,link}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  
                  {link}
                </div>
                <h3>{title}</h3>

                <a href={ytlink} className='btn' target='_blank'>Open YouTube</a>
              </article>
            ) 
          })
        }
        <div>
        {
          datayt.map(({id,title,image,link}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  
                 <img src={image} />  
                </div>
                <h3>{title}</h3>

                <a href={link} className='btn' target='_blank'>Open G-Drive</a>
              </article>
            ) 
          })
        }
        </div>
      </div>
    </section>
  )
}

export default profile