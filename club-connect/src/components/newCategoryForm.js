import React from 'react'
import Event from './event'
import {useState} from 'react'
import "./newCategoryForm.css"

export const NewCategoryForm = (onAddItem) =>{

    const [newItem, setNewItem] = useState("");

    const handleNewItemChange = (event) => {
        onAddItem(event);
      };

    function submitForm(){
        const title = document.getElementById("title")
        const description = document.getElementById("description")
        const link = document.getElementById("link")
        const image = document.getElementById("image")

        handleNewItemChange(<Event post={title} description={description} link={link} image={image} />)
    }

    return(
        <form>
            <label>Title:</label>
            <input id="title" type="text"></input>
            <label>Description:</label>
            <input id="description" type="text"></input>
            <label>Link:</label>
            <input id="link" type="url"></input>
            <label>Image URL:</label>
            <input id="image" type="url"></input>
            <input id="creator" type="submit" value="Create Category" onClick={submitForm}></input>

        </form>
    )

}

export default NewCategoryForm;