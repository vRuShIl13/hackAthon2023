import React from 'react'
import Event from './event'
import EventContent from './eventList'
import "./category.css"

export const Category = () => {

  // const addCategory(cat) = {
  // }

  return (
    <div className="category">
        <h2 id = "category-header">
            Categories
        </h2>

        <div className = "category-grid">
            <ul className = "grid">
                EventContent.map((obj, i) => {
                  return (
                    <li>
                      <div key = {i} className = "card">
                        <Event
                          post={obj.post}
                          description={obj.description}
                          link = {obj.link}
                          image={obj.image}
                        />
                      </div>
                    </li> 
                  )

                }
                )
                

              

            </ul>
        </div>

        
    </div>
  )
}

export default Category;
