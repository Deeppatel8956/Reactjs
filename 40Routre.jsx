import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import About2 from './40About2';
  import Row from './Row';
  import Project from './Project';
  import Board from './11Board';
  import Usestate from './file/01Usestate';
  import Use from './file/02Use';
  import Event from './file/03Event';
  import Condition from './file/04Condition';
  import Ternary from './file/00Ternary'
  import Bhot from './file/Bhot';
  import RefandState from './RefandState';
  import Session from './37Session';
  import Useref from '../Compo/14Useref';
  import Simpleclock from '../Compo/12Simpleclock';
  import Set from '../Compo/13Set';
  import ClassCycle from '../Compo/05ClassCycle';
import State from '../Compo/02state';
import Props from '../Compo/03props';
function Routre(props) {
    const menu ={'/about':'About','/row':'Row','/project':'Project','/board':'Board','/usestate':'Usestate','/use':'Use'
                  ,'/event':'Event' ,'/condition':'Condition','/ternary':'Ternary' ,'/bhot':'Bhot' ,'/refandState':'RefandState'
                ,'/session':'Session' ,'/useref':'Useref','/simpleclock':'Simpleclock','/set':'Set'}
    const All=Object.entries(menu).map((ele,i)=>{
        console.log(ele);
        return <li key={i}><Link class="dropdown-item" to={ele[0]}>{ele[1]}</Link></li>
    })
    const deep={'/classcycle':'Classcycle' ,'/state':'State','/props':'Props'}
    const data=Object.entries(deep).map((ele,l)=>{
      console.log(ele);
      return <li key={l}><Link class="dropdown-item" to={ele[0]}>{ele[1]}</Link></li>
    })
    return (
        
        <>
        <Router>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Function based
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {All}
           
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Class based
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {data}
            
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav> 
<Routes>
    <Route path='/about' element ={<About2/>} />
    <Route path='/row' element ={<Row/>} />
    <Route path='/project' element={<Project/>}/>
    <Route path='/board' element={<Board/>}/>
    <Route path='/usestate' element={<Usestate/>}/>
    <Route path='/use' element ={<Use/>} />
    <Route path='/event' element ={<Event/>} />
    <Route path='/condition' element ={<Condition/>} />
    <Route path='/ternary'   element={<Ternary/>}/>
    <Route path='/bhot' element={<Bhot/>} />
    
</Routes>
<Routes>
<Route path='/refandState' element={<RefandState/>} />
<Route path='/session' element={<Session/>}/>
<Route path='/useref' element={<Useref/>} />
<Route path='/simpleclock' element={<Simpleclock/>}/>
<Route path='/set' element={<Set/>} />
</Routes>
<Routes>
  <Route path='/ClassCycle' element={<ClassCycle/>}/>
  <Route path='/state' element={<State/>}/>
  <Route path='/props' element={<Props/>}/>
</Routes>

</Router>
        </>
    );
}

export default Routre;