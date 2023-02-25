import React from 'react'
import Event from './event'
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
              <li>
                <div className = "card">
                  <Event
                    image= "https://media.licdn.com/dms/image/C5622AQEp1OwuO8WezA/feedshare-shrink_1280/0/1676658904610?e=1680134400&v=beta&t=2WKQ2dCJs-HacAtIgMBUNwiAcD0gYO0oM9JkdHioSoY"
                    post="Category 1"
                    description="This is going to be the best event ever!"
                    link= "https://devclub.ca/"
                  />
                </div>
              </li>

              

            </ul>
        </div>

        
    </div>
  )
}

export default Category;
