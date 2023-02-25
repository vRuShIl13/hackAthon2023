import React, {useState} from 'react'
import Event from './event'
import NewCategoryForm from './newCategoryForm'
import "./category.css"
//import eventContent from "./eventList"

export const Category = () => {

  const eventContent = [
    {
        image: "https://media.licdn.com/dms/image/C5622AQEp1OwuO8WezA/feedshare-shrink_1280/0/1676658904610?e=1680134400&v=beta&t=2WKQ2dCJs-HacAtIgMBUNwiAcD0gYO0oM9JkdHioSoY",
        post:"Category 1",
        description:"This is going to be the best event ever!",
        link: "https://devclub.ca/"
    },
    {
        image: "https://media.licdn.com/dms/image/C5622AQEp1OwuO8WezA/feedshare-shrink_1280/0/1676658904610?e=1680134400&v=beta&t=2WKQ2dCJs-HacAtIgMBUNwiAcD0gYO0oM9JkdHioSoY",
        post:"Category 1",
        description:"This is going to be the best event ever!",
        link: "https://devclub.ca/"
    },
    {
        image: "https://media.licdn.com/dms/image/C5622AQEp1OwuO8WezA/feedshare-shrink_1280/0/1676658904610?e=1680134400&v=beta&t=2WKQ2dCJs-HacAtIgMBUNwiAcD0gYO0oM9JkdHioSoY",
        post:"Category 1",
        description:"This is going to be the best event ever!",
        link: "https://devclub.ca/"
    },
    {
        image: "https://media.licdn.com/dms/image/C5622AQEp1OwuO8WezA/feedshare-shrink_1280/0/1676658904610?e=1680134400&v=beta&t=2WKQ2dCJs-HacAtIgMBUNwiAcD0gYO0oM9JkdHioSoY",
        post:"Category 1",
        description:"This is going to be the best event ever!",
        link: "https://devclub.ca/"
    }

  ]

  const [categories, setCategories] = useState([]);

  const handleAddCategories = (newCategory) => {
    setCategories([...categories, newCategory]);
  }

  return (
    <div className="category">
        <h2 id = "category-header">
            Categories
        </h2>

        <div className = "category-grid">
            <ul>
              <li>
                <div>
                  eventContent.
                </div>
              </li>
            </ul>
        </div>

        <div>
          <NewCategoryForm onAddItem = {handleAddCategories}/>
        </div>
        
    </div>
  )
}

export default Category;
