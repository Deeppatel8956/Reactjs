import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Dapi() {
    const [title,setTitle]=useState("")
    const [userName,setUserName]=useState("")
    const [lastName,setLastName]=useState("")
    const [use,setUse]=useState([]);


    // post
    function postd() {
        axios.post('http://localhost:3000/useres',{
            title:title,
            userName:userName,
            lastName:lastName
        })
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    // get
    function add() {
        axios.get('http://localhost:3000/useres')
        .then((res)=>{
            // console.log(res.data)
            setUse(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        add()
    },[])
   
    // update
    function updated(id) {
        axios.put(`http://localhost:3000/useres/${id}`,{
            title:title,
            userName:userName,
            lastName:lastName
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    // delete
    function deleted(id) {
        axios.delete(`http://localhost:3000/useres/${id}`,{
            title:title,
            userName:userName,
            lastName:lastName
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
      <div className="container mt=2">
        <label htmlFor="">Title</label><br />
        <input type="text" name="" id="told" onChange={(e)=>setTitle(e.target.value)} className='form-control' /> <br />
        <label htmlFor="">Username:</label> <br />
        <input type="text" name="" id="take" onChange={(e)=>setUserName(e.target.value)}  className='form-control' /> <br />
        <label htmlFor="">lastName:</label><br />
        <input type="text" name="" id="take" onChange={(e)=>setLastName(e.target.value)} className='form-control' /> <br />
        <button className='btn btn-info' onClick={postd}>submit</button>
        {
            use.map((data,index)=>{
                return(
                    <>
                    <div className="container text-center mt-3" key={index}>
                    <h1 >title : {data.title}</h1>
                    <h2>User name: {data.userName}</h2>
                    <h3>Last Name : {data.lastName}</h3>
                    <button className='btn btn-warning mx-2'onClick={()=>updated(data.id)}>Update</button>
                    <button className='btn btn-danger' onClick={()=>deleted(data.id)}>Delete</button> <br />
                    <br />
                    </div>
                    </>
                )
            })
        }
      </div>
    
    </>
  )
}

export default Dapi