import React from 'react'
import Event from './event'
import "./category.css"

export const Category = () => {

  // const addCategory(cat) = {
  // }

  return (
    <div className="category">
        const eventList = [];
        <h2 id = "category-header">
            Categories
        </h2>

        <div className = "category-grid">
            <ul>
              <li>
                <Event
                  image= "https://media.licdn.com/dms/image/C5622AQEp1OwuO8WezA/feedshare-shrink_1280/0/1676658904610?e=1680134400&v=beta&t=2WKQ2dCJs-HacAtIgMBUNwiAcD0gYO0oM9JkdHioSoY"
                  post="Category 1"
                  description="This is going to be the best event ever!"
                  link= "https://devclub.ca/"
                />
              </li>

              <li>
                <Event
                  post="Category 2"
                  description="This is going to be the best event ever!"
                  link= "google.com"
                  
                />
              </li>

              <li>
                <Event
                  post="Category 3"
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
