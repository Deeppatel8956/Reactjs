import React from 'react'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import {
  Routes,
  Switch,
  Route
}from 'react-router-dom'
const App = () => {
  return (
    <>
    <div className='container-wrap'>
    <Routes>
    
      
    <Route path='/'  element={<Home/>}/>
    <Route path='/blog/:id'  element={<Blog/>}/>
  
    </Routes>
    </div>
    </>
  )
}

export default App