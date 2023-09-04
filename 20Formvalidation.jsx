import React, { useState } from 'react';

function Formvalidation(props) {
const[name,setName]=useState('');
const[email,setEamil]=useState('');
const [pwd,setpwd]=useState('');
const blur=(e)=>{
    if (name=='') {
        alert('name')
    }
    else if (email=="") {
        alert("email")
    }
    else if(pwd==""){
        alert("pwd")
    }
    e.preventDefault();
    
}
    return (
        <>
            <div className="container">
                <form action="" method="post" onSubmit={blur}>
                <table className='table'>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" className='form-control' id="name" onChange={(e)=>{setName(e.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" className='form-control' id="email" onChange={(e)=>{setEamil(e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td>password:</td>
                        <td><input type="text" name="name" className='form-control' id="pwd" onChange={(e)=>{setpwd(e.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="" name='submit' /></td>
                    </tr>
                </table>
                </form>
            </div>
        </>
    );
}

export default Formvalidation;