import React, { useState } from "react";

const Shopping = () =>{
    
       const [items, setItems]= useState([
        
    { id: 1, name: 'oil', completed: 'yes' },
    { id: 2, name: 'rice', completed: 'yes' },
    { id: 3, name: 'wheat', completed: 'yes' }
       ]);

       const [submit,setSubmit]=useState();

       const inputName = (event)=>{
        setItems(event.target.value)
       }
       const handleClick = (event) => {
        setSubmit("")
        event.preventDefault();
      }

        return(
            <>
          <div className="bg-blue-200 p-14 rounded-lg">
        <p className="text-[2rem] font-bold text-black">Shopping List</p>

        <div className="pt-10">
          <div>
            {
              items.map((item) => ( // Remove index from map function
                <ul key={item.id}>
                  <li>{item.name}</li>
                </ul>
              ))
            }
          </div>
          <form onSubmit={handleClick}>
            <input value={submit} onChange={inputName} className="p-3 outline-none rounded-sm text-black" type="text" placeholder="Enter a Groceries" />
            <div className="mt-4">
              <button className="w-28 h-10 text-lg bg-slate-500 rounded-md border-none" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
            </>
        )
    
}

export default Shopping;