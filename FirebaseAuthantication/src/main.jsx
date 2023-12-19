import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signpage from './Compo/Signpage.jsx'
import Loginpage from './Compo/Loginpage.jsx'
import Header from './Compo/Header.jsx'
import Footer from './Compo/Footer.jsx'
import Layout from './Layout.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";
import Cart from './components/Cart.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/sign' element={<Signpage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Signpage/> */}
    {/* <Loginpage/> */}
    {/* <Header/> */}
    {/* <Footer/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
