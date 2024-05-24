import React from 'react'
import './Sstyle.css'
const Search = ({value,handelsearchkey,formsubmit,clearsearch}) => {
  return (
    <>
       <div className="search-wrap">
        <form action="" onSubmit={formsubmit}>
            <input type="text" value={value} onChange={handelsearchkey} placeholder='Please wirte the name' />
            {value&&<span onClick={clearsearch}>X</span>}
            <button>Go</button>
        </form>
       </div>
    </>
  )
}

export default Search