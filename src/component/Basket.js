import React from 'react'
import { CartProvider } from 'react-use-cart'
import Cart from './Cart'


const Basket = () => {
  return (
    <div>
<CartProvider id="abc">
 
 <Cart/>
</CartProvider>
    </div>
  )
}

export default Basket