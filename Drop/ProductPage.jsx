import React, { useCallback } from 'react'
import Shipping from './Shipping'

export default function ProductPage({productId,referrer,theme}) {
    const handelsubmit=useCallback((orderlist)=>{
        post('/product/'+productId+'/buy',{
            referrer,
            orderlist
        })
    },[productId,referrer])
  return (
    <>
    <div className={theme}>
        <Shipping onSubmit={handelsubmit}/>
    </div>
    </>
  )
}
function post(url,data) {
    console.log('POST /'+ url)
    console.log(data)
}
