import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
  import UseState from './UseState';
  import Cardes from './39Cardes';
  import Board from './11Board';

function Menu(props) {
    return (
        <>
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/board">Board</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/cardes">Cardes</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="usestate">UseState</Link></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
<Routes>
    <Route path='/usestate' element={<UseState/>}/>
    <Route path='/cardes' element={<Cardes/>} />
    <Route path='/board' element={<Board/>} />
</Routes>
</Router>
        </>
    );
}

export default Menu;