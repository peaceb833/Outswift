import React from 'react'
import { CartProvider } from 'react-use-cart'
import Cart from './Cart'
import Join from '../RE-use/Join'
const Booknow = () => {
  return (
    <>
      <CartProvider id="abc">
    <Join/>
    <Cart />
  </CartProvider>

 </>
  )
}

export default Booknow



