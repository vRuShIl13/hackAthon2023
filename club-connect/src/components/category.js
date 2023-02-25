import React from 'react'
import Event from './event'

export const Category = (events) => {
  const eventList = events.map((event) => <li>{event}</li>)

  return (
    <div>
        <h2>
            Category
        </h2>

        <div>
            <ul>
              {eventList}
            </ul>
        </div>

        
    </div>
  )
}

export default Category;
