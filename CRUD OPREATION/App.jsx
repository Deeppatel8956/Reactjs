import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {
  
  Routes,
  Route,

} from "react-router-dom";
import Marge from './Marge/Marge'
import Update from './Todo/Update'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Marge/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </>
  )
}

export default App
