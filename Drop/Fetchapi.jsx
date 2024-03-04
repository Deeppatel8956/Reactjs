import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Fetchapi() {
    const [use,setUse]=useState([])
    const [use2,setUse2]=useState([])

    function add_Use() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((rse)=>
        setUse(rse.data)).catch((err)=>console.log(err))

        // second button
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((rse)=>
        setUse2(rse.data)).catch((err)=>console.log(err))

    }
    useEffect(()=>{
        add_Use()
    },[])
  return (
    <div>Fetchapi</div>
  )
}
