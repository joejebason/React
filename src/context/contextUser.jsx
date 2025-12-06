import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext();



const ContextUser = ({children}) => {

     const [events, setEvents] = useState([]);
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
    <Context.Provider value={{events, error}}>
        {children}
    </Context.Provider>
  )
}

export default ContextUser