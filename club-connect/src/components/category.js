import React, {useState} from 'react'
import Event from './event'
import NewCategoryForm from './newCategoryForm'
import "./category.css"

export const Category = () => {

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
            <ul id="category-list">
            {categories.map((item) => (
              <li>{item}</li>
            ))}
            </ul>
        </div>

        <div>
          <NewCategoryForm onAddItem = {handleAddCategories}/>
        </div>
        
    </div>
  )
}

export default Category;
