import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './Component/LoginPage.jsx'
// import SignPage from './Component/SignPage.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Home from './Component/Home.jsx'
import SignPage from './Component/SignPage.jsx'
import About from './Component/About.jsx'
import Layout from './Layout.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginPage/> */}
    {/* <SignPage/> */}
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign' element={<SignPage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
