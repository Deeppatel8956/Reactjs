import React from 'react';
import './LoginPage.css'
import Layout from '../Layout';
function LoginPage(props) {
    return (
        <>
        <Layout/>
        <div className='section'>
          <div className="main">
            <form action="">
                <h1>Login</h1>
                <label htmlFor="" className='email'>Email:</label><br />
                <br />
                <input type="text" placeholder='Enter name' />
                <br />
                <br />
                <label htmlFor="" className='pass'>Enter passowrd</label>
                <br />
                <br />
                <input type="text" placeholder='Enter name' />
                <br />
                <br />
                <span className='Span'>Not A member?<a href="">Signup now</a></span>
                <br />
                <br />
                
                <button className='Btn'>Sign</button>
               
            </form>
         </div> 
         </div>  
        </>
    );
}

export default LoginPage;