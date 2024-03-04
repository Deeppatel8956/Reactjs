import React, { useReducer, useState } from 'react'

function boxReducer(state,action) {
    switch (action.type) {
        case "MOVE":
            return{
                ...state,
                left:action.payload.left,
                top:action.payload.top
            }
            
    
        default:
            return state;
    }
}
export default function Deaggable() {
    const[boxState,dispatch]=useReducer(boxReducer,{top:0,left:0})
    const [isDragging,setIsDragging]=useState(false)
    const [initalX,setInitalX]=useState(0)
    const [initalY,setInitalY]=useState(0)
//    let isDragging=false
//    let initalX=0
//    let initalY=0

    const handelmousedown=(e)=>{
         setIsDragging(true)
         setInitalX(e.clientx-boxState.left);
         setInitalY(e.clientY-boxState.top);
    }
    const handelmouseup=(e)=>{
        setIsDragging(false)
    }
    const handelmousemove=(e)=>{
       if (isDragging) {
        const left=e.clientx-initalX
        const top=e.clientY-initalY
        dispatch({type:"MOVE",payload:{left,top}})
       }
    }
  return (
    <div onMouseDown={handelmousedown}
    onMouseUp={handelmouseup}
    onMouseMove={handelmousemove}
    style={{left:boxState.left,top:boxState.top,position:"absolute"}}>
        Draggable
    </div>
  )
}
