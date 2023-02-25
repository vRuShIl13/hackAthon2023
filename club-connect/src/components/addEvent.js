import React, { useState } from 'react';


function AddEventForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { name, description, link, image };
    
    console.log(newEvent); // You can log or send this object to a server or update your state
    setName('');
    setDescription('');
    setLink('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Link:
        <input type="url" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEventForm;