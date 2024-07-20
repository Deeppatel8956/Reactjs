import React, { useState } from 'react';

function Regi(props) {
    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:""
    })

    const handel=(e)=>{
        const {name , value}=e.target
        setUser((pre)=>({...pre,[name]:value}))
    }

    const handelsubmit=(e)=>{
        e.preventDefault()
        const formdata={
            firstname:"firstname",
            lastname:"lastname",
            email:"email",
            phone:"phone"
        }
        console.log(formdata)
    }
    return (
        <div>
           <form onSubmit={handelsubmit}>
            
            <label htmlFor="firstname">
                <b>firstname:</b>
            </label><br />
            <input type="text" name='firstname' value={user.firstname} required  onChange={handel}/><br />

            <label htmlFor="lastname">
                <b>Lastname:</b>
            </label><br />
            <input type="text" name='lastname' value={user.lastname} required  onChange={handel}/><br />

            <label htmlFor="email">
                <b>Email:</b>
            </label><br />
            <input type="email" name='email' value={user.email} required  onChange={handel}/><br />

            <label htmlFor="phone">
                <b>Phone:</b>
            </label><br />
            <input type="number" name='phone' value={user.phone} required  onChange={handel}/><br />

            <div>
                <button type="submit">submit</button>
            </div>
            </form>            
        </div>
    );
}

export default Regi;