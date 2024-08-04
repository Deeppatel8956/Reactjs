import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';

function Update(props) {
    const [value,setValue]=useState({
        name:'',
    city:'',
    salary:'',
    mobile:''
    })

    // id
    const { id }=useParams()

    // navigate page
    const navigate=useNavigate()

    // get data
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then((res)=>{
            console.log(res)
            setValue(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handelupdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/user/${id}`,value)
        .then((res)=>{
            navigate('/')
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='container'>
              <form action="" onSubmit={handelupdate}>
                <h1 className=' text-center'>Create Form</h1>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label mt-3">Salary:</label>
                    <input type="text" name='name' value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter salary" />
                </div>
                <select className="form-select" name='city'value={value.city} onChange={(e) => setValue({ ...value, city: e.target.value })} aria-label="select city">
                    <option selected>select city</option>
                    <option value="Ahemdabad">Ahemdabad</option>
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="Nadiyad">Nadiyad</option>
                    <option value="surat">surat</option>
                </select>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label mt-3">Salary:</label>
                    <input type="text" name='salary' value={value.salary} onChange={(e) => setValue({ ...value, salary: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter salary" />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label mt-3">Salary:</label>
                    <input type="text" name='mobile' value={value.mobile} onChange={(e) => setValue({ ...value, mobile: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter mobile number" />
                </div>
    
                <button className='btn btn-info'>Update</button>
                <Link to='/' className='btn btn-dark'>Back</Link>
            </form>
        </div>
    );
}

export default Update;