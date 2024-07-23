import React, { useEffect, useState } from 'react';

function Get(props) {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        try {
            fetch('http://localhost:3000/useres')
            .then((res)=>res.json())
            .then((responce)=>setUser(responce))
        } catch (error) {
            console.log(error)
        }
    },[])
    return (
        <div className='container'>
            {user.map((ele,id)=>{
                return(
                    <>
                    <div className="container">
                    <div className="card row"  style={{width: "28rem",justifyContent:"center",margin:"2rem",border:"2px solid black"}}/>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h1>{ele.id}</h1>
    <h5 className="card-title">{ele.title}</h5>
    <p className="card-text">{ele.userName}</p>
    <p>{ele.lastName}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>              
                    </>
                )
            })}
        </div>
    );
}

export default Get;