import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create(props) {
    const [valeu,setValue]=useState({
        name:'',
        email:''
    })
    
    const navigate=useNavigate()
    const handelsubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/user',valeu)
        .then((res)=>{
            console.log(res)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
      <form action="" onSubmit={handelsubmit}>
        <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className=' form-control' placeholder='Enter your name'
            onChange={(e)=> setValue({...valeu,name:e.target.value})}/>
        </div>
        <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input type="email" name="email" className=' form-control' placeholder='Enter your Email'
            onChange={(e) => setValue({...valeu,email:e.target.value})}/>
        </div>
      <button className=' btn btn-dark'>Submit</button>
      <Link to='/' className='btn btn-primary'>Back</Link>

      </form>
        </div>
    );
}

export default Create;