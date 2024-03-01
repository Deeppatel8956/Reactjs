import React, { useEffect, useState } from 'react'
import { fetachapi } from './Api'
export default function Reverse() {
    const [person,setPerson]=useState("Alice")
    const [bio,setBio]=useState(null)

    useEffect(()=>{
        let igoner=false
        setBio(null)
        fetachapi(person).then(result=>{
            if (!igoner) {
                setBio(result)
            }
        });
        return ()=>{
            igoner=true
        }
    },[person])
  return (
    <>
    <select value={person} onChange={(e)=>setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="god">god</option>
    </select>
    <hr />
    <p><i>{bio ?? "Loading ..."}</i></p>
    </>
  )
}
