import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
  const [events, setEvents] = useState([]);
  console.log(events, 'events');
  
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://cms.genaihealth.care/api/genai-events');
        setEvents(response.data.data);
        console.log(response.data.data, "data");
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>GenAI Events</h2>
      {error && <p style={{ color: 'red' }}>Failed to load events.</p>}
      <ul>
      {events.map((event,index)=>{
        return(
        <tr className='text-green-600' key={index} >{event.attributes.title}
        <td>{event.attributes.name}</td></tr>
      )})

      }
      </ul>
    </div>
  );
};

export default Axios;
