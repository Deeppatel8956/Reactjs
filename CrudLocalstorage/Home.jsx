import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate=useNavigate()
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        const blogs=localStorage.setItem('blogs')
        setBlogs(JSON.stringify(blogs))
    },[blogs])

    const handeldelte=(blogOutIndex)=>{
        const _blogs=blogs.filter((blog,blogIndex)=>{
            if (blogIndex!==blogOutIndex) {
                return blog
            }
        })
        console.log(_blogs)
        setBlogs(_blogs)
        localStorage.setItem('blogs',JSON.stringify(_blogs))
    }

    // edit
    const handleEdit = (blogIndex) => {
        localStorage.setItem('editIndex', blogIndex)
        navigate('/edit')
    }
    return (
        <div>
            <Link to='/add' className=' btn btn-outline-warning' >Add +</Link>
            {
                blogs&&blogs.length > 0 ?
                blogs.map((blog,blogIndex)=>{
                    return <>
                           <p>{blog?.title}</p>
                           <p>{blog?.dec}</p>
                           <button className='btn btn-outline-info' onClick={()=>handleEdit(blogIndex)}>Edit</button>
                           <button className='btn  btn-outline-primary' onClick={()=>handeldelte(blogIndex)}>Edit</button>
                          </>
                }):<p> data not found </p>
            }
        </div>
    );
}

export default Home;