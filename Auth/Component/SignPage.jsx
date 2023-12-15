import React, { useEffect, useState } from 'react';
import './SignPage.css'
import { auth ,provider } from '../Firebase/Firebase';
import { signInWithPopup } from 'firebase/auth';
import Layout from '../Layout';
import LoginPage from './LoginPage';
import About from './About';
function SignPage(props) {

    const [value,setValue]=useState('')

    const handelclick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
           setValue(data.user.email)
           localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem("email",))
        
    })
    return (
        <>
        <Layout/>
             <div className='section'>
          <div className="main">
        
                <h1>Signup</h1>
                <label htmlFor="" className='email'>Email:</label><br />
                <br />
                <input type="text" placeholder='Enter name' />
                <br />
                <br />
                <label htmlFor="" className='pass'>Enter passowrd:</label>
                <br />
                <br />
                <input type="text" placeholder='Enter name' />
                <br />
                <br />
                <span className='Span'>Already amember?<a href="">Login</a></span>
                <br />
                <br />
                <button className='Btn'>Login</button>
                <div>
                    {value?<button className='boat' onClick={handelclick}>Google Signup</button>:<About/>}
                {/* {value?<button className='boat' onClick={handelclick}>Google Signup</button>:
                <About/>
                } */}
                </div>
         </div> 
         </div>
        </>
    );
}

export default SignPage;