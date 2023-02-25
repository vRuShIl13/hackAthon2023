import React from 'react'




const event = ({ post, description }) => {
  return (
    <div className="event-post">
        <h3>{post}</h3>
        <p>{description}</p>
        <button>Find out more </button>
      </div>
  )
}

export default event