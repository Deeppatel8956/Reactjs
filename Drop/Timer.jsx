import React, { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
    const[time,setTime]=useState(60)
    useEffect(()=>{
        if (time>0) {
            const timed=setTimeout(() => 
                setTime(time-1)
            , 1000)
            return ()=>clearTimeout(timed)
        }
    },[time])
  return (
    <>
    <div className="text-center">
        Time left is {time}
    </div>
    </>
  )
}

export default Timer