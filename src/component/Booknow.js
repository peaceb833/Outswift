import React from 'react'
import Cart from './Cart'
import Nav from '../RE-use/Nav'
import { CartProvider } from 'react-use-cart'
import Join from '../RE-use/Join'

const Booknow = () => {
 
  return (
    <div>
    <CartProvider>
    <Join/>
     <Cart  />
   </CartProvider>
    </div>
  )
}

export default Booknow



