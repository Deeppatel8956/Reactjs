import React, { useRef } from 'react';

function UseRef(props) {
    let ref=useRef(0);
    // console.log(ref.current);
    let inputref=useRef("");
    console.log(inputref.current)
    const Btn=()=>{
        console.log("clicked");
        // ref.current=ref.current+1;
        // alert('you have click '+ ref.current + 'times !')
        // inputref.current.focus();
        if(inputref.current.value =="") {
            alert("please enter value !");
        }
    }
    return (
        <>
         <div className="container mt-5 ">
            <div className="row">
                <div className="col">
                    <input type="text" ref={inputref} />
                    <button className='btn btn-danger' onClick={Btn}>click me</button>
                </div>
            </div>
            </div>   
        </>
    );
}

export default UseRef;