import React, { useReducer } from 'react'
// defautl value
const inital={count:0}

// create function
// here state is access vale
// here action to value update
// here type is define opreation
function reducer(state,action) {
    switch (action.type) {
        case "Increment": 
            return {count :state.count+1}
        case "Decrement":
            return {count :state.count-1}
        case "Reset":
            return {count :state.count=0}
        default:
            return {count :state.count};
    }
}
export default function Usecount() {
    const [state,dispatch]=useReducer(reducer,inital)
  return (
    <>
    <div className='text-center'>
        <h1>{state.count}</h1>
        <button className='btn btn-warning' onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button className='btn btn-danger mx-2' onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button className='btn btn-info' onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </div>
    </>
  )
}
