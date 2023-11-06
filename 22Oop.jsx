import React, { useReducer } from 'react';
const inital={count:0};
function Reducer(state,action) {
    switch (action.type) {
        case "INCREMENT":
            return{
                count:state.count+1
            }
        case "DECREMENT":
            return{
                count:state.count-1
            }    
            
    
        default:
            return state;
    }
}
function Oop(props) {
    const[state,dispath]=useReducer(Reducer,inital);

    return (
        <div>
            <div className="container">
                <h1>{state.count}</h1>
                <button className='btn btn-danger' onClick={()=>dispath({type:"INCREMENT"})}>plus</button>
                <button className='btn btn-warning' onClick={()=>dispath({type:"DECREMENT"})}>plus</button>
            </div>
        </div>
    );
}

export default Oop;