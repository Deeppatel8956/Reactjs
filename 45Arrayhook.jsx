import React, { useState } from 'react';
import Previues from './44Previues';
function Arrayhook(props) {
    
        const information =[
            {
                id:0,myname:"Vinod",Age:22
            },{
                id:1,myname:"Harry",Age:25
            },{
                id:2,myname:"Phantam",Age:50
            }
        ]
        console.log(information);
    const [myarray,setMyarray]=useState(information);
    const toggle=()=>{
        setMyarray([])
    }
    return (
        <>
        <div className='container mt-5  text-center'>
            {
                myarray.map((ele,id)=>{
                    return <h1 className='hstyle' key={id}>Name:{ele.myname} &Age:{ele.Age} &Id:{ele.id}</h1>
                })
            }
            <button className='btn btn-info mt-5 btn-lg' onClick={toggle}>Clear</button>
            <Previues/>
            </div>
        </>
    );
}

export default Arrayhook;