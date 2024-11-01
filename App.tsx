import React, { useState } from 'react';
import logo from './logo.svg';
import Inputfiled from './component/Inputfiled';
import { Todo } from './model/model';
import TodoList from './component/TodoList';
// import './App.css';

const App:React.FC=()=> {
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([])

  // inputfiled handeladd
  const handeladd=(e:React.FormEvent)=>{
    e.preventDefault();

    if (todo) {
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
  return (
    <>
    <span>Todo</span>
    <Inputfiled todo={todo} setTodo={setTodo} handeladd={handeladd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
