import React, { useState } from 'react';

function SpreadwithObject(props) {
    const [myobject,setMyobject]=useState({
        myname:"vinod",myage:30,myno:12313156
    })
    const handel=()=>{
        setMyobject({...myobject,myname:"thapa",myage:29})
    }
    return (
        <>
         <div className="container">
            <h1>{myobject.myname}:  {myobject.myage}&age:  {myobject.myno}&No</h1>
            <button className='btn btn-outline-info' onClick={handel}>Update</button>
            </div>   
        </>
    );
}

export default SpreadwithObject;