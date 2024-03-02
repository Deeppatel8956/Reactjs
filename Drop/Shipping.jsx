import React from 'react'

export default function Shipping({onSubmit}) {
    
  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  function handleSubmit(e) {
    e.preventDefault();
   const formdata=new FormData(e.target)
   const orderlist={
    ...Object.fromEntries(formdata)
   }
   onSubmit(orderlist)
  }
  return (
    <div>

<form onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>

    </div>
  )
}
