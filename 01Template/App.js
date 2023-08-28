import logo from './logo.svg';
import './App.css';
import Navbar from './01Template/Navbar';
import Textform from './01Template/Textform';
import About from './01Template/About';
import React , { useState } from 'react';
import Alert from './01Template/Alert';
// import Row from '/01Template/Row';
function App() {
  const [mode,setMode]=useState('light');
  let [alert,setAlert]=useState(null)
  
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggemode=()=>{
    if (mode==='light') {
    setMode('dark')
    document.body.style.backgroundColor='#2a4056';
    showAlert("Dark mode is enable","success");
    // #2a4056
  } else {
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode is enable","info");
  }
}
  return (
  <>
  <Navbar Title="Textutils" mode={mode} togg={toggemode} />
  <Alert alert={alert}/>
    <div className='container mt-3'>
    <Textform  showAlert={showAlert} heading="Enter the text" mode={mode}/>
    {/* <About/> */}
    </div>
  </>
  );
}

export default App;
