import React, { useEffect, useState } from 'react'

export default function Time() {
    const[getsec,setGetsec]=useState(0)
    const[getmin,setGetmin]=useState(0)

    
    
    useEffect(()=>{
        
        if(getsec<=60){
            setTimeout(() => {
               setGetsec(getsec+1) 
            },1000 );
        }else{
            setGetsec(0)
            setGetmin(getmin+1)
        }
    },[getsec,getmin])
  return (
    <>
    <div className='text-center'>
        <h1>hello</h1>
        <h2>{getmin} minutes {getsec} second</h2>
    </div>
    </>
  )
}
