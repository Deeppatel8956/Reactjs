import React from 'react';
import { useState } from 'react';
function intro(props) {
    const[name,setName]=useState("");
    const [age,setAge]=useState(10);
    const Btclick=()=>{
        setName('Red&White');
        setAge(100);
    }

    return (
        <>
          <div className="container">
            <h1>Name:  {name}</h1>
            <h2>Age: {age}</h2>
            </div>  
        </>
    );
}

export default intro;