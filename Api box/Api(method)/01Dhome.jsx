import axios from 'axios';
import React, { useState } from 'react';

function Dhome(props) {
    const [title,setTitle]=useState("")
    const [userName,setUserName]=useState("")
    const [lastName,setLastName]=useState("")

    const post_data=()=>{
        axios.post('http://localhost:3000/useres',{
            title:title,
            userName:userName,
            lastName:lastName
        })
    }
    return (
        <>
          <div className='container mt-5'>
            <form action="" onSubmit={post_data}>
            <label htmlFor="">Title</label><br />
            <input type="text" className='form-control' name="" id="" onChange={(e)=>setTitle(e.target.value)} /> <br />
            <label htmlFor="">Username</label><br />
            <input type="text" className='form-control' name="" id="" onChange={(e)=>setUserName(e.target.value)} /> <br />
            <label htmlFor="">Lastname</label><br />
            <input type="text" className='form-control' name="" id="" onChange={(e)=>setLastName(e.target.value)} /> <br />
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>   
        </>
    );
}

export default Dhome;