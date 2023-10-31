import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap5/src/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store.jsx'
import Show from './Todo/Show.jsx'
import Home from './Todo/Home.jsx'
import Marge from './Marge/Marge.jsx'

import {
  BrowserRouter,
  
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <BrowserRouter>
      {/**/}
      {/* <Home/> */}
      {/* <Show/>  */}
      {/* <Marge/> */}
      <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
