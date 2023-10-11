import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../Actions';

function Todo(props) {
    const [inputdata,setInputdata]=useState("");
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.listdata.list)
    return (
        <>
         <div className="container">
            <input type="text" value={inputdata} onChange={(e)=>setInputdata(e.target.value)} className='form-control' />
            <button className='btn btn-dark' onClick={()=>dispatch(AddTodo(inputdata),setInputdata(""))}>Addtodo butt</button>
            {list.map((ele,i)=>{
                return(
                    <h1 key={i}>{ele.data}</h1>
                )
            })}
        </div>   
        </>
    );
}

export default Todo;