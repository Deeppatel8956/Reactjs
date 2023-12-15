import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className="navbar">
          <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_makers_project_variation_preview/v1/attachments/makers_project_variation/static_output_file/3d0c8e5aa5b28ffa16a5f59a0aaf8c87-1691068412105238/Logo%20Preview.png" width="230" alt="" className='image' />
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/sign">Signup</Link></li>
          <li><Link to="/About">About</Link></li>
        </nav>
      </header>
    </>
  )
}

export default App
