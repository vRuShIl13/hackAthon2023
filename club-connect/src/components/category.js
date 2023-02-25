import React from 'react'
import Event from './event'
import "./category.css"

export const Category = () => {

  // const addCategory(cat) = {
  // }

  return (
    <div>
        <h2 id = "category-header">
            Category
        </h2>

        <div className = "category-grid">
            <ul>
              <li>
                <Event
                  post="event 1"
                  description="This is going to be the best event ever!"
                  link= "umanitoba.ca"
                />
              </li>

              <li>
                <Event
                  post="event 2"
                  description="This is going to be the best event ever!"
                  link= "google.com"
                  
                />
              </li>

              <li>
                <Event
                  post="event 3"
                  description="This is going to be the best event ever!"
                  link= "https://framer.com/projects/Untitled--8Pm1x2UVirWdLBtKdaJs-eKBUt?reason=web-signup&id=325517ef-e665-45e5-b5c7-4f0c853a08ca&preview=1&node=WQLkyLRf1"
                />
              </li>
            </ul>
        </div>

        
    </div>
  )
}

export default Category;
