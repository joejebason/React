import React from "react";

const ObjectKey = ()=>{

    // const Person ={
    //     name:'joe',
    //     age:23,
    //     departmanet:'Computer Science'
    // }

    const Subject = ['Science']

    return(
        <>
        <div>
            {/* {Object.keys(Person).map((key) =>(    // Object.Keys -> convert onject into array
                <p>{Person[key]}</p>
            ))} */}

            {Subject.length ? Subject.map((name)=>(
                <p className="text-white font-bold">{name}</p>
            )) : <p className="text-white font-bold" >there is no Subject</p>} 

        </div>
        </>
    )
}

export default ObjectKey;