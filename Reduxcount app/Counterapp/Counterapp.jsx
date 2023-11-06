import React from 'react';
import { increment,decrement } from '../Actions/index';
import { useDispatch, useSelector } from 'react-redux';
function Counterapp(props) {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.change)
    return (
        <div>
           <div className="container">
            <button className="btn btn-warning" onClick={()=>dispatch(increment())}>Increment</button>
            <h1>{data}</h1>
            <button className="btn btn-danger" onClick={()=>dispatch(decrement())}>DEcrement</button>
            </div> 
        </div>
    );
}

export default Counterapp;