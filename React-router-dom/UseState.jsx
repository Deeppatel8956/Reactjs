import React from 'react';
import { useState } from 'react';
function UseState(props) {

    const [name,setName]=useState('');
    const [age,setAge]=useState('');

    const Btnclick=()=>{
        setName("deep");
        setAge(21);
    }
    return (
        <>
<div className='container text-center'>
    <div className="row mt-5">
        <div className="col">
    
    <h1>Name :{name}</h1>
    <h1> age :{age}</h1>
    <button className='btn btn-warning mt-3' onClick={Btnclick}>click</button>
</div>
</div>
</div>
        </>
    );
}

export default UseState;