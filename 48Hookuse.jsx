import React, { useEffect, useState } from 'react';

function Hookuse(props) {
    const[count,setCount]=useState(0)
    // useEffect(()=>{
    //     document.title=`counter (${count})`
    // })

    useEffect(()=>{
        if (count>=1) {
            document.title=`count (${count})`
        } else {
            document.title=`count`
        }
    },[count])
    return (
        <>
            <div className="container">
              <h1>{count}</h1>
              <button className='btn btn-outline-info' onClick={()=>{setCount(count+1)}}>Increment value</button>
            </div>
        </>
    );
}

export default Hookuse;