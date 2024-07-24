import React from 'react';

const Object = () =>{

    const People = [
        {
            name: 'Joe',
            skills:[
                {name:'React JS', type:'Front end Developer'},
            ]
        },
        {
            name: 'Bala',
            skills:[
                {name:'Node JS',type:'Back end Developer'},
            ]
        }
    ]

    return(
        <>
        <div>
            {
               People.map((person,index) =>(
                <div key={index} >
                   <p>{person.name}</p> 
                   <div>
                        {person.skills.map((skill,i)=>(
                            <div key={i} >
                                <p>{skill.name} and {skill.type}</p>
                            </div>
                        ))
                        }
                    </div>
                    </div>
                    
               ))
            }
        </div>
        
        </>
    )
}

export default Object;