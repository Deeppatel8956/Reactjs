import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function Form(props) {
    const [data,setData]=useState('');
    const inref=useRef('');
    const Btnclick=()=>{
        console.log("submitted");
        console.log(inref.current.value);
        if (inref.current.value==="") {
            alert("please enter the value");
            inref.current.focus();
        }
    }

    const handelchang=()=>{
        if (data=='') {
            alert("please enter the value");
        }
    }
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col">
                    <form action="#" onSubmit={handelchang}>
                        <label htmlFor="">Name:</label>
                        {/* <input type="text" name="name" id="" className='form-control' ref={inref} /> */}
                        <input type="text" name="name" id="" onChange={(e)=>{(e.target.value(setData))}} className='form-control'/>
                        <button type='submit' className='btn btn-warning mt-2' name='submit'>submit</button>
                        </form></div></div></div>  
        </>
    );
}

export default Form;