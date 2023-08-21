import React from 'react';
import { useState } from 'react';

function Usestate(props) {
    const [age,setAge]=useState('');
    
    const Btn=()=>{
        setAge(29);
    }
    return (
        <>
          <div className="container">
            <h1>Age  :{age}</h1>
            <button className='btn btn-success' onClick={Btn}>Updata</button>
            </div>  
        </>
    );
}

export default Usestate;