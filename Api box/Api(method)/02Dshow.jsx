import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Dshow() {
    const [use,setUse]=useState([]);
    function Adddate() {
        axios.get('http://localhost:3000/useres').then((ers)=>{
            setUse(ers.data)
            console.log(ers)
        })
    }
    useEffect(()=>{
        Adddate()
    },[])
  return (
    <div>
        {use.map((ele,id)=>{
            return(<>
            <ul key={id}>
                <li>{ele.id}</li>
            </ul>
            <ul>
                <li>{ele.title}</li>
            </ul>
            <ul>
                <li>{ele.userName}</li>
            </ul>
            <ul>
                <li>{ele.lastName}</li>
            </ul><br />
            
            
            </>)
        })}


    </div>
  )
}

export default Dshow