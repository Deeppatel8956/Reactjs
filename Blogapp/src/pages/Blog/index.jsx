import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from '../../conf/data'
import Chip from '../../components/common/Chip/Chip'
import { Link } from 'react-router-dom'
import Empty from '../../components/common/Empty/Empty'
import './bstyle.css'
const Blog = () => {
  const {id}=useParams()
  const[blog,setBlog]=useState(null)

  useEffect(()=>{
    let blog=blogList.find((blog)=>blog.id===parseInt(id))
    if (blog) {
      setBlog(blog)
    }
  },[id])
  return (
    <>
     <Link to='/' className='blog-goBack'>
            <span>&#8592;</span> <span>Go Back</span>
         </Link>  
           {
            blog?(<div className='blog-wrap'>
                <header>
                    <p className='blog-data'>Published {blog.createdAt}</p>
                    <h1>{blog.title}</h1>
                    <div className='blog-subCategory'>
                        {blog.subCategory.map((category,i)=>(<div key={i}>
                            <Chip label={category}/>
                        </div>
                         ))}
                    </div>
                </header>
                <img src={blog.cover} alt="cover" />
                <p className='blog-desc'>{blog.description}</p>
            </div>) :(
                <Empty/>
            )
           }
    </>
  )
}

export default Blog