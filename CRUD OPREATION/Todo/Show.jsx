import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { GetApiAction,DeleteApiAction } from '../Actions/index';
import {Link} from'react-router-dom';
function Show(props) {
    const dispatch=useDispatch()
    const respince=useSelector((state)=>state.reducers.details)
    console.log(respince)
    //Delete
    const datadelete=useSelector((state)=>state.reducers.isDeleteResponce)
    useEffect(()=>{
        dispatch(GetApiAction())
    },[dispatch])
    if(datadelete){
        window.location.reload(false)
    }
    const result=respince?respince.map((data,id)=>{
        return <>
           <tr key={id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.country}</td>
            <td><button className='btn btn-danger'onClick={()=>dispatch(DeleteApiAction(data.id))}>Delete</button></td>
            <td><Link to={`update/${data.id}`}><button className='btn btn-info' type='button'>Update</button></Link></td>
           </tr>
        </>
    }):null
    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-5">
                        <table className='table table table-bordered'>
                           <thead>
                             <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>country</th>
                                <th>Delete</th>
                                <th>Update</th>
                             </tr>
                           </thead>
                           <tbody>
                            {result}
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Show;