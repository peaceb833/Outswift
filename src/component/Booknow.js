import React from 'react'
import { CartProvider } from 'react-use-cart'
import Join from '../RE-use/Join'
const Booknow = () => {
  return (
    <>
      <CartProvider id="abc">
    <Join/>
  </CartProvider>
  

 </>
  )
}

export default Booknow



