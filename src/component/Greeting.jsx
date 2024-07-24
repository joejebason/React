import React from "react";
import User from "./user";
import Guest from "./Guest";

const Greeting = (props) =>{
    const isLoggedin = props.isLoggedin

    if(isLoggedin){
        return <User/>
        
    }

    return <Guest/>
    
}

export default Greeting;