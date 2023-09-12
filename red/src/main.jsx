import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './Boot/css/style.css'
// import './Boot/js/main'
import Heade from './Boot/01Heade'
import Sec from './Boot/02Sec'
import About from './Boot/03About'
import Service from './Boot/04Service'
import Feature from './Boot/05Feature'
import Test from './Boot/06Test'
import Portfolio from './Boot/Portfolio'
import Pricing from './Boot/08Pricing'
import Question from './Boot/09Question'
import Contact from './Boot/10Contact'
import Footer from './Boot/11Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Heade/>
    <Sec/>
    <About/>
    <Service/>
    <Feature/>
    <Test/>
    <Portfolio/>
    <Pricing/>
    <Question/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
