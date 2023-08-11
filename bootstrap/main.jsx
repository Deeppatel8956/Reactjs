import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './style.css'
import 'bootstrap5/src/css/bootstrap.min.css'
// import 'bootstrap5/src/js/bootstrap.min.js'
// import State from './Compo/02state.jsx'
// import Props from './Compo/03props.jsx'
// import Lifecycle from './Compo/05LifeCycle.jsx'
import Bootstrapintro from './Templet/01bootstrap_intro.jsx'
import Navbar from './Templet/02Navbar'
import Slider from './Templet/03Slider'
import Footer from './Templet/04Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    {/* <Props/> */}
    {/* <Lifecycle/> */}
    <Bootstrapintro/>
    <Navbar/>
    <Slider/>
    <Footer/>
  </React.StrictMode>,
)
