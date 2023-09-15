import React from 'react';
import {
   
    Link,
  } from "react-router-dom";
function Navigate(props) {
    return (
        <>
            <div className='container mt-5'>
              <Link to='/row' className='btn btn-primary'>Row</Link><br /><br />
              <Link to='/board' className='btn btn-success'>Board</Link><br /><br />
              <Link to='/refandstate' className='btn btn-info'>Ref and state</Link><br /><br />
              <Link to='/project' className='btn btn-warning'>Form</Link><br /><br />
              <Link to='/localstorage' className='btn btn-danger'>Storage Session</Link><br /><br />
              <Link to='/challange' className='btn btn-dark'>Challange</Link><br /><br />
            </div>
        </>
    );
}

export default Navigate;