import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Header from './Bootstrapintro/Header'
import './Bootstrapintro/css/style.css'
// import './Bootstrapintro/js/main';
import Herosection from './Bootstrapintro/Herosection'
import About from './Bootstrapintro/About'
import Counts from './Bootstrapintro/Counts'
import Video from './Bootstrapintro/Video'
import Clients from './Bootstrapintro/Clients'
import Testimonials from './Bootstrapintro/Testimonials'
import Services from './Bootstrapintro/Services'
import Cta from './Bootstrapintro/Cta'
import Portfolio from './Bootstrapintro/Portfolio'
import Team from './Bootstrapintro/Team'
import Pricing from './Bootstrapintro/Pricing'
import Frequently from './Bootstrapintro/Frequently'
import Contact from './Bootstrapintro/Contact'
import Footer from './Bootstrapintro/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Herosection/>
    <About/>
    <Counts/>
    <Video/>
    <Clients/>
    <Testimonials/>
    <Services/>
    <Cta/>
    <Portfolio/>
    <Team/>
    <Pricing/>
    <Frequently/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
