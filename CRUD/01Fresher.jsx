import React, { useState } from 'react';

const countries=[{
    name:'India',value:"IN",cities:[
        'Delih',
        'Mumbai'
    ]
},
{
    name:'Pakistan',value:"PK",cities:[
        'Lahore',
        'Karachi'
    ]
},
{
    name:'United',value:"UK",cities:[
        'London',
        'Mainchester'
    ]
}]
function Fresher(props) {
    const [cunter,setCunter]=useState('')
    return (
        <div>

            {/* 1st dropdown menu */}
            <select name="" id="" 
            value={cunter}
            onChange={(e)=>{
                // console.log(e.target.value)
                setCunter(e.target.value)
            }}>
            {
                countries.map((item,index)=>{
                    return <option value={index}>{item.name}</option>
                })
            }

            </select>

            {/* 2nd dropdown */}

            <select name="" id=""
            value={cunter}
            >
             {
                countries[cunter].cities.map((index,item)=>{
                    return <option value={index}>{item}</option>
                })
             }

            </select>
        </div>
    );
}

export default Fresher;