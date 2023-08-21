import React, { useState } from 'react';

function Use(props) {
    const[data,setData]=useState({counter:0});
    const But=()=>{
        setData({counter:data.counter+1})
    }
    const Bit=()=>{
        setData({counter:data.counter-1})
    }
    return (
        <>
          <div className="container text-center">
            <h1>counter :{data.counter}</h1>
            <button className="btn btn-warning mt-2" onClick={But}>Increment</button>
            <button className="btn btn-danger  mt-2 mx-2" onClick={Bit}>Decrement</button>
            </div>  
        </>
    );
}

export default Use;