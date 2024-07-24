import React, { useState } from 'react';

const Hookstate =  () =>{

    const [count, setCount] = useState(0);   // =>  array and 0 is a initial value
            //0  &  1 function
            // initialvalue


    const increament = ()=>{
        setCount(count + 1);   // increament condition
    }

    const decreament = ()=>{
        setCount(count - 1);    // decreament condition 
    }
    return (
        <>
        <div>
            This is Hook State {count}
        </div>
        <button onClick={increament} >Plus +</button>
        <button onClick={decreament}>Minus -</button>
        </>
    )
}

export default Hookstate;