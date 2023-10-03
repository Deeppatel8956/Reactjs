import React, { useEffect, useState } from 'react';

function Featchapi(props) {
const [data,setData]=useState('')
useEffect(()=>{
        setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>res.json())
        .then((Responce)=>{
         setData(Responce)
         console.log(Responce)
        }).catch((Error)=>{
            console.log(Error)
        }).finally(console.log("code is excuted "))
    }, 3000);
    })
    return (
        <>
          <div className="container mt-5">
            <table className='table' >
                 <thead>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                 </thead>
                 <tbody>
                    {
                        Object.entries(data).map((ele)=>{
                            console.log(ele)
                            return <tr>
                                   <td>{ele[1].postId}</td>
                                   <td>{ele[1].id}</td>
                                   <td>{ele[1].name}</td>
                                   <td>{ele[1].eamil}</td>
                                   <td>{ele[1].body}</td>

                            </tr>
                        })
                    }
                 </tbody>
                  </table>
             </div>  
        </>
    );
}

export default Featchapi;