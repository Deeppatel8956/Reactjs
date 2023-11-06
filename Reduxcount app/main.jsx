import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import 'bootstrap5/src/css/bootstrap.min.css'
import store from './store.jsx'
import { Provider } from 'react-redux'
import Counterapp from './Counterapp/Counterapp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <Counterapp/>
    </Provider>
  </React.StrictMode>,
)
