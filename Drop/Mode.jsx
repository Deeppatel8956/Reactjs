import React, { useState } from 'react'
import ProductPage from './ProductPage'
export default function Mode() {
    const [isdark,setIsdark]=useState(false)


  return (
    <>
    <label htmlFor="">
        <input type="checkbox" checked={isdark} onChange={(e)=>setIsdark(e.target.value)} />
        Dark mode
    </label>
     <hr />
     <ProductPage 
     referrerId="wizard_of_oz"
     productId={123}
     theme={isdark?'dark':'light'}/>
    </>
  )
}
