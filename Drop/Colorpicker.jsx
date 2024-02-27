import React, { useState } from 'react'

const Colorpicker = () => {
    const[selectedcolor,setSelectedcolor]=useState("red")

    const change_Color=(e)=>{
        setSelectedcolor(e.target.value)
    }
  return (
    <>
    <div className="container ">
        <input type="color" onChange={change_Color} style={{cursor:"pointer"}} />
        <div style={{width:"300px",height:"150px",backgroundColor:selectedcolor}}></div>
    </div>
    </>
  )
}

export default Colorpicker