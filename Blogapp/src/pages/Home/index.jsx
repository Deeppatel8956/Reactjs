import React, { useState } from 'react'
import Header from '../../components/pages/Header/indeex'
import Search from '../../components/pages/Search'
import BlogList from '../../components/pages/Bloges'
import { blogList } from '../../conf/data'
import Empty from '../../components/common/Empty/Empty'

const Home = () => {
  const [blogs,setBlogs]=useState(blogList)
  const [searhkey,setSearchkey]=useState(" ")

  const handelsubmit=(e)=>{
    e.preventDefault()
    handelsearchresult()
  }

  const handelsearchresult=()=>{
    const allblog=blogList
    const filterblog=allblog.filter((blog)=>blog.category.toLowerCase().includes(searhkey.toLowerCase().trim()))
    setBlogs(filterblog)
  }

  const handelclearsearch=()=>{
   setBlogs(blogList)
    setSearchkey(' ')
    console.log('click')
  }
  return (
    <>
    <h1>
        {/* you write header part */}
        <Header/>

        {/* wite search item */}
        <Search
        value={searhkey}
        formsubmit={handelsubmit}
        handelsearchkey={(e)=>setSearchkey(e.target.value)}
        clearsearch={handelclearsearch}/>

        {/* write the bolog */}
     {!blogs.length  ? <Empty/> :   <BlogList blogs={blogs}/>}
    </h1> 
    </>
  )
}

export default Home