import React, { useState } from 'react';
import './todo.css'
function Todo(props) {
    const [todoes,setTodoes]=useState([])
    const [inputvalue,setInputvalue]=useState('')
    const [editmode,setEditmode]=useState(false)
    const [editid,setEditid]=useState(null)
    const [editvalue,setEditvalue]=useState('')
    const addTodo=()=>{
       if (inputvalue.trim()!== ' ') {
        const newtodo={
            id:new Date().getTime(),
            text:inputvalue
        }
        setTodoes([...todoes,newtodo]);
        setInputvalue(' ');
       }
    }

    const deletetodo=(id)=>{
        const updatetodo=todoes.filter((todo)=>todo.id !== id)
        setTodoes(updatetodo)
    }

    const edittodo=(id,text)=>{
        setEditmode(true),
        setEditid(id),
        setInputvalue(text)
    }

    const ediupdate=()=>{
        const update=todoes.map((todo)=>{
            if (todo.id===editid) {
                return {...todo,text:editvalue}
            }
        })
        setTodoes(update)
        setEditmode(false)
        setEditvalue('')
        setEditid(null)
    }
    return (
        <>
         <h1 className='hcenter'>Todo list</h1>
         <input type="text" name="" id="" onChange={(e)=>setInputvalue(e.target.value)}/>   
         <button className='hbtn' onClick={addTodo}>Add</button>
         {
            editmode ?(
                <div>
                    <input type="text" name="" id=""
                    value={editvalue}
                    onChange={(e)=>setEditvalue(e.target.value)} />
                    <button onClick={ediupdate}>update</button>
                </div>
            ):(
                <button onClick={addTodo}></button>
            )
         }
         <ul>
            {todoes.map((todo)=>{
               return <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>deletetodo(todo.id)} className='hbtn'>Delete</button>
                    <button onClick={()=>edittodo(todo.id,todo.text)} className='hbtn'>Edit</button>
                </li>
            })}
         </ul>
        </>
    );
}

export default Todo;