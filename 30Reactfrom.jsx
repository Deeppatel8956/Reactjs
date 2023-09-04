import React from 'react';
import { useState } from 'react';

function Reactfrom(props) {
    const[password,setPassword]=useState('');
    const [email,setEamil]=useState("");
    const submit=(e)=>{
         password=`/^[a-zA-Z0-9!@#$%^&*]{6,16}$/`
         var min=8;
         var max=10;
        if (email=="") {
            alert("please enter the email ")
        }
        else if (password<min||password>max) {
            alert("please enter the password");
        }
        e.preventDefault()
    }
    return (
        <>
        <form action="" method="post" onSubmit={submit}>
        <div className="container mt-3">
           <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email:</label>
    <input type="email" className="form-control" id="eamil" value={email} onChange={(e)=>{setEamil(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword" className="form-label">Password:</label>
    <input type="password" className="form-control" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div> 
  </form>  
        </>
    );
}

export default Reactfrom;