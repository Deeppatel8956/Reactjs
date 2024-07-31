import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function Read(props) {
    const [datas,setDatas]=useState([])

    const{ id }=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((res)=>setDatas(res.data))
        .catch((error)=>console.log(error))
    },[])
    return (
        <div className=' container'>
            <strong>{datas.id}</strong>
            <strong>{datas.name}</strong>
            <strong>{datas.email}</strong>
            <div>
                <Link to={`/updates/${id}`} className='btn btn-info'>Edit</Link>
                <Link to='/' className='btn btn-dark'>Back</Link>
            </div>
        </div>
    );
}

export default Read;