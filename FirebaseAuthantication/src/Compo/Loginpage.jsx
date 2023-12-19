import React, { useState } from 'react';
import './Loginpage.css'
import firebase from '../Firebase/Firebase'
import { Link } from 'react-router-dom';
function Loginpage(props) {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');


    //Check email and password
    const submit=async(e)=>{
        e.preventDefault()
        try {
           const user=await firebase.auth().signInWithEmailAndPassword(email,pass)
           if(user){
             alert("Login successfully ")
           }
        } catch (error) {
            alert(error)
        }
 }
    return (
        <>
         <div className="continue">
           <form action="">
            <h1 className='two'>Login</h1>
            <label htmlFor="" className='omg'>E-mail:</label>
            <br />
            <input type="email" name="" id="six" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
            <br />
            <br />
            <label htmlFor="" className='bun'>Password:</label>
            <br />
            <input type="password" name="" id="" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Enter Password' />
            <br />
            <br />
            <button className='logo' onClick={submit}><Link to="/cart">Login</Link></button>
            <br />
            <br />
            <span className='three'>Not a member?<Link to="/sign">Signup now</Link></span>
            </form>    
         </div>   
        </>
    );
}

export default Loginpage;