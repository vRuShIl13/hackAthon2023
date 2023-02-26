import React from 'react'
import './event.css'

const event = ({ image, link ,post, description }) => {
  return (
    <div className="event-post">
        <a href={link}>
          <img src={image} alt="event" className='event-img'></img>
        </a>
        <h3 className = 'event-title'>{post}</h3>
        <p className='event-description'>{description}</p>
        <div className = 'more-info-button'>
            <a href= {link} >
                <button className='event-btn'>More Info</button>
            </a>
    
        </div>
        
      </div>
  )
}

export default event