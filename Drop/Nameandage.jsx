import React, { useReducer } from 'react'
function reducer(state,action) {
    switch (action.type) {
        case "Increment":{
            return{
                name:state.name,
                age:state.age+1
            }
        }
        case "Change_name":{
            return {
                name:action.nextNext,
                age:state.age
            }
        }    
    throw Error("unknown error")
        
    }
}
const inital={name:"tailyor",age:20}
export default function Nameandage() {
    const[state,dispatch]=useReducer(reducer,inital)

    // input
    function handelinput(e) {
        dispatch({
            type:"Change_name",
            nextNext:e.target.value
        })
    }

    // age
    function handelage() {
        dispatch({
            type:"Increment"
        })
    }
  return (
    <>
    <div className="text-center">
        <input type="text" value={state.name} onChange={handelinput} />
        <button className='btn btn-danger' onClick={handelage}>Increment</button>
        <p>{state.name}. You are{state.age}</p>
    </div>
    </>
  )
}
