import React from 'react'
import Event from './event'
import EventContent from './eventList'
import "./category.css"

export const Category = () => {

  // const addCategory(cat) = {
  // }

  return (
    <div className="category">
        <div className="header-part">
          <h2 id = "category-header">
              Categories
          </h2>

        </div>

        <div className = "category-grid">
            <ul className = "grid">
                {EventContent.map((obj, i) => {
                  return (
                    <li>
                      <div key = {i} className = "card">
                        <Event
                          category={obj.category}
                          description={obj.description}
                          link = {obj.link}
                          src={obj.src}
                        />
                      </div>
                    </li> 
                  )

                }
                )}
                

              

            </ul>
        </div>

        
    </div>
  )
}

export default Category;
