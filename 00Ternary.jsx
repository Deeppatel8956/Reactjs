import React from 'react';
import { useState } from 'react';

function Ternary(props) {
    const [islogin,setIslogin]=useState(false);
    const Login=()=>{
        setIslogin(true);
        // document.body.style.backgroundColor='red'
    }

    const Logout=()=>{
        setIslogin(false);
        // document.body.style.backgroundColor='blue';
    }
    return (
        <>
         <div className='text-center'>
            {islogin ?(
                <div>
                <h1 className='text-primary'>You have successfully logged out</h1>
                <button className='btn btn-primary mt-2'onClick={Logout}>Logout</button>
                </div>
            ):(
                <div>
                <h1 className='text-danger'>You will be able to login as long as you want.</h1>
                <button className='btn btn-danger mt-2'onClick={Login}>Login</button> 
                </div>
            )}
            </div>   
        </>
    );
}

export default Ternary;