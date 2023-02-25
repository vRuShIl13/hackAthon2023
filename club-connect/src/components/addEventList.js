import React, { useState } from 'react';
import Event from './event.js';

function EventsList() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const removeEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Events List</h1>
      <button onClick={() => addEvent({ name: 'New Event', description: '', link: '', image: '' })}>
        Add Event
      </button>
      {events.map((event, index) => (
        <div key={index}>
          <Event {...event} />
          <button onClick={() => removeEvent(index)}>Remove Event</button>
        </div>
      ))}
    </div>
  );
}

export default EventsList;
