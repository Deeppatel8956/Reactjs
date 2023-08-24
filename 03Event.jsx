import React from 'react';

function Event(props) {
    const Btn=()=>{
        alert("paly")
    }
    return (
        <>
         <div className="container">
            <button className="btn-dark" onClick={Btn}>Click me</button>
            <button className="btn-warning" onClick={()=>alert('palay')}>Click me</button>
            <AlertArea message="playing">watch</AlertArea>
            </div>   
        </>
    );
}

export default Event;

function AlertArea({message,children}) {
    return (
        <>
        <button className='btn-primary' onClick={()=>alert(message)}>{children}</button>
        </>
    )
}