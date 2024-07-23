import React, { useState } from 'react';

function Home(props) {
    const[user,setUser]=useState([]);
    const [title,setTitle]=useState("");
    const [userName,setUsername]=useState("");
    const [lastName,setLastname]=useState("");

    const add_user=()=>{
        if (title&&userName&&lastName) {
            fetch('http://localhost:3000/useres',{
                method:"POST",
                body:JSON.stringify({
                    title,
                    userName,
                    lastName
                }),
                headers:{
                    "Content-type": "application/json; charset=UTF-8",
                }
            }).then((res)=>res.json())
            .then((responce)=>{
                console.log(responce)
                setTitle("")
                setUsername("")
                setLastname("")
            })
        }
    }
    return (
        <div className='container mt-5'>
            <form action="" onSubmit={add_user}>
            <label htmlFor="">Title</label><br />
            <input type="text" className='form-control' name="" id="" onChange={(e)=>setTitle(e.target.value)} /> <br />
            <label htmlFor="">Username</label><br />
            <input type="text" className='form-control' name="" id="" onChange={(e)=>setUsername(e.target.value)} /> <br />
            <label htmlFor="">Lastname</label><br />
            <input type="text" className='form-control' name="" id="" onChange={(e)=>setLastname(e.target.value)} /> <br />
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Home;