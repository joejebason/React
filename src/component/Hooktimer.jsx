import React,{useState} from 'react';

const Hooktimer = () =>{

    

    const time =()=>{
        return new Date().toLocaleTimeString();
    }

    const [timer, setTimer] = useState(time());

    const update = ()=>{
        setTimer(time());
    }

    setInterval(update,1000);

    return (
        <>
            <div>{timer}</div>
        </>
    )
}

export default Hooktimer;