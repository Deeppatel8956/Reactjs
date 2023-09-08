import React, { useCallback, useEffect, useRef, useState } from 'react';

function Project1(props) {
    const [length,setLength]=useState(8);
    const [characterallowed,setCharacterallowed]=useState(false);
    const[numbarallowed,setNumbarallowed]=useState(false);
    const [password,setPassword]=useState("");
    const passwordref=useRef(null);
    //PasswordGenrater to setpassword etc.
    const PasswordGenrater=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLOMNPQRSTUVWXYZabcdefghijklomnpqrstuvwxyz"
        if (numbarallowed) str +="0123456789"
             if (characterallowed) 
            str +="!@#$%^&*-_+=[]{}~`"
        for (let index = 1; index <= length; index++) {
            let char=Math.floor(Math.random*str.length+1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
        
    },[length,numbarallowed,characterallowed,setPassword])

    //useCallback use re-render password value in case use useCallback copy password re-render value and useRef use to check password range select in case.
    const copybutton=useCallback(()=>{
        passwordref.current?.select();
        passwordref.current?.setSelectionRange(0,999);
        window.navigator.clipboard.writeText(password);
    },[password])

    //useeffect to give effect.
    useEffect(()=>{
        PasswordGenrater();
    },[length,numbarallowed,characterallowed,PasswordGenrater])
    return (
        <>
        <div className='width-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center'>
            <h1 className='text-white text-center my-2'>Password Generter</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" name="" ref={passwordref} id="" value={password} className='outline-none w-full py-1 px-3 mb-2' placeholder='Password' readOnly />
                <button onClick={copybutton} className='outline-none bg-blue-700 text-white px-3 mb-2 shrink-0'>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2  px-2 my-2">
                <div className="flex item-center gap-x-1">
                    <input type="range" name="" id="" className='cursor-pointer' min={8} max={100} onChange={(e)=>{setLength(e.target.value)}} value={length} />
                    <label className='text-lg'>Length:{length}</label>
                </div>
                <div className="flex item-center gap-x-1">
                    <input type="checkbox" name="" id="numbarInput" defaultChecked={numbarallowed} onChange={()=>{setNumbarallowed((prev)=>!prev)}} />
                    <label className='text-lg'>Numbar</label>
                </div>
                <div className="flex item-center gap-x-1">
                    <input type="checkbox" name="" id="characterinput" defaultChecked={characterallowed} onChange={()=>{setCharacterallowed((prev)=>!prev)}} />
                    <label className='text-lg' htmlFor='characterinput'>Character</label>
                </div>
            </div>
            </div>
        </>
    );
}

export default Project1;