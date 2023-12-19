import React, { useState } from 'react';
import './Signpage.css'
import firebase from '../Firebase/Firebase'
import { Link } from 'react-router-dom';
function Signpage(props) {
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")

    const submit=async(e)=>{
           e.preventDefault()
           try {
              const user=await firebase.auth().createUserWithEmailAndPassword(email,pass)
              if(user){
                alert("Account created successfully ")
              }
           } catch (error) {
               alert(error)
           }
    }
    return (
        <>
        <div className="main">
            <form action="">
                
                <h1 className='nto'>Sign up</h1>
                
                <label htmlFor="" className='name'>Name:</label>
                <br />
                <input type="text" name="" id="old" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />
                <br />
                <br />
                <br />
                <label htmlFor="" className='email'>E-mail:</label>
                <br />
                <input type="email" name="" id="demon" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' />
                <br />
                <br />
                <br />
                <label htmlFor="" className='pass'>Password:</label>
                <br />
                <input type="password" name="" id="" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Enter password' />
                <br /><br />
                <span className='one'>Already a member?<Link to="/login">Login </Link></span>
                <button className='btnn' onClick={submit}>Sign</button>
            </form>
        </div>
        </>
    );
}

export default Signpage;