import React, { useState } from "react";


const Form = ()=>{

    const [name, setName] = useState(""); // array 
    const [submit,setSubmit]=useState();


    const inputName = (event)=>{
        setName(event.target.value)
    }

    const handleClick = (event)=>{
        setSubmit(name);
        event.preventDefault();
        
    }

    return(
        <>
        <div>
           <p> my name is {name}</p>
            My name is {submit}
        </div>
        <form onSubmit={handleClick}>
            <div>
            <input onChange={inputName} type="text" placeholder="Enter your Name" />
            <button type="submit" >Submit</button>
            </div>
        </form>
        </>
    )
}

export default Form;