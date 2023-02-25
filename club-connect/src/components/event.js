import React from 'react'




const event = ({ image, link ,post, description }) => {
  return (
    <div className="event-post">
        <h3>{post}</h3>
        <p>{description}</p>
        <div class = 'more-info-button'>
            <a href= {link} >
                <button>More Info</button>
            </a>
    
        </div>
        
      </div>
  )
}

export default event