import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Updates(props) {
    // const [datas,setDatas]=useState([])

    const{ id }=useParams()

    const [valeu,setValue]=useState({
        name:'',
        email:''
    })

    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((res)=>{
            setValue(res.data)
        })
        .catch((error)=>console.log(error))
    },[])

    const handelUpdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/user/${id}`,valeu)
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
            <div>
      <form action="" onSubmit={handelUpdate}>
        <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className=' form-control' placeholder='Enter your name'
            value={valeu.name} 
            onChange={(e)=> setValue({...valeu,name:e.target.value})}/>
        </div>
        <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input type="email" name="email" className=' form-control' placeholder='Enter your Email'
            value={valeu.email}
            onChange={(e) => setValue({...valeu,email:e.target.value})}/>
        </div>
      <button className=' btn btn-dark'>Update</button>
      <Link to='/' className='btn btn-primary'>Back</Link>

      </form>
        </div>
        </div>
    );
}

export default Updates;