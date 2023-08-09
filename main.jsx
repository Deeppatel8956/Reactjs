import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './style.css'
import State from './Compo/02state.jsx'
import Props from './Compo/03props.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <State /> */}
    <Props/>
  </React.StrictMode>,
)
