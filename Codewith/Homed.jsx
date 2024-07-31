import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Homed(props) {
    const [datas,setDatas]=useState([])
    
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then((res)=>setDatas(res.data))
        .catch((error)=>console.log(error))
    },[])

    // delete
    const handeldelte=(id)=>{
        const conform=window.confirm('would you like to delete')
        if (conform) {
        axios.delete(`http://localhost:3000/user/${id}`)
        .then((res)=>{
            location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
    return (
        <div className=' container'>
            <h1 className=' text-center'>List of Data </h1>
            <div className=''>
                <Link to='/create' className='btn btn-success'>Add +</Link>
            </div>
            <table className=' table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((d,i)=>(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>
                                <Link to={`/read/${d.id}`} className=' btn btn-info mx-2'>Read</Link>
                                <Link to={`/updates/${d.id}`} className='btn btn-danger mx-2'>Edit</Link>
                                <button onClick={(e)=>handeldelte(d.id)} className=' btn btn-primary'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}

export default Homed;