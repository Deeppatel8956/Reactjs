import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home(props) {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then((res)=>{
            console.log(res)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    // navigate page
    const navigate=useNavigate()

    // delete
    const handeldelete=(id)=>{
        const conform=window.confirm('would you like to delete')
        if (conform) {
        axios.delete(`http://localhost:3000/user/${id}`)
        .then((res)=>{
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
    return (
        <div>
            <Link to='/create' className='btn btn-secondary'>Add +</Link>
            <table className=' table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Mobile</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        {data.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.name}</td>
                                <td>{d.city}</td>
                                <td>{d.salary}</td>
                                <td>{d.Mobile}</td>
                                <td><Link to={`/read/${d.id}`} className='btn btn-info'>Read</Link></td>
                                <td><Link to={`/update/${d.id}`} className='btn btn-primary'>Edit</Link></td>
                                <td><button onClick={(e)=>handeldelete(d.id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;