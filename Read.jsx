import React,{useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
function Read(props) {
    const [data,setData]=useState([])

    // unique id
    const { id }=useParams()

    // data get particuler id
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <strong>{data.name}</strong>
                                <strong>{data.city}</strong>
                                <strong>{data.salary}</strong>
                                <strong>{data.Mobile}</strong>
                                <div>
                <Link to={`/update/${id}`} className='btn btn-info'>Edit</Link>
                <Link to='/' className='btn btn-dark'>Back</Link>
            </div>
        </div>
    );
}

export default Read;