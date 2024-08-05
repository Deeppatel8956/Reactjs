import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add(props) {
    const naviigate=useNavigate()
    const [title,setTitle]=useState('')
    const [dec,setDec]=useState('')

    const handeltilt=(e)=>{
        setTitle(e.target.value)
    }

    const handeldec=(e)=>{
        setDec(e.target.value)
    }

    // submit
    const handelsubmit=(e)=>{
      console.log({title,dec})

      const _blogs=localStorage.getItem('blogs') &&localStorage.getItem('blogs').length > 0 ?JSON.parse(localStorage.getItem('blogs')):[]

      localStorage.getItem('blogs',JSON.stringify(localStorage.getItem([..._blogs,{title,dec}])))

      naviigate('/')
    }
    return (
        <div>
            <form action=""onClick={handelsubmit}>
                <div className="mb-3">
                <label htmlFor="Tilte">Titlte</label>
                <input type="text" className=' form-control' value={title}onChange={(e)=>handeltilt(e)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="Dec">Dec</label>
                <input type="text" className=' form-control' value={dec}onChange={(e)=>handeldec(e)}/>
                </div>
                <button className='  btn btn-outline-secondary' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Add;