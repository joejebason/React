import React, { useContext } from 'react'
import { Context } from '../context/contextUser';
// import { Context } from '../App';
// import ContextUser from '../context/contextUser';

const ContextApi = () => {

    let {events, error} = useContext(Context);
    console.log(events,'events');
    
  return (
    <div>
      <h1 className='text-lg font-bold mt-20 text-black' >Context API</h1>
        {error && <p>Error loading events</p>}
      <ul>
        {events.map((event, i) => (
          <li key={i}>{event.attributes.title}</li>
        ))}
      </ul>

    </div>
  )
}

export default ContextApi;