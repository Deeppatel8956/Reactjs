import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create(props) {
   const [value,setValue]=useState({
    name:'',
    city:'',
    salary:'',
    mobile:''
   })

//    navigate page
  const navigate=useNavigate()


    const handelsubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/user',value)
        .then((res)=>{
            navigate('/')
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className=' container'>
            <form action="" onSubmit={handelsubmit}>
                <h1 className=' text-center'>Create Form</h1>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label mt-3">Salary:</label>
                    <input type="text" name='name' onChange={(e) => setValue({ ...value, name: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter salary" />
                </div>
                <select className="form-select" name='city' onChange={(e) => setValue({ ...value, city: e.target.value })} aria-label="select city">
                    <option selected>select city</option>
                    <option value="Ahemdabad">Ahemdabad</option>
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="Nadiyad">Nadiyad</option>
                    <option value="surat">surat</option>
                </select>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label mt-3">Salary:</label>
                    <input type="text" name='salary' onChange={(e) => setValue({ ...value, salary: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter salary" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label mt-3">Salary:</label>
                    <input type="text" name='mobile' onChange={(e) => setValue({ ...value, mobile: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter mobile number" />
                </div>
    
                <button className='btn btn-info'>Submit</button>
                <Link to='/' className='btn btn-dark'>Back</Link>
            </form>
        </div>
    );
}

export default Create;