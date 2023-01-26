import React from 'react'
import {useCart} from "react-use-cart"
const Cart = () => {
    const {isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
         }=useCart();
         if(isEmpty) return<h1>Laundry Basket Is Empty</h1>
  return (
    <div className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h5> Cart ({totalUniqueItems})totalItems:({totalItems})</h5>

            </div>

        </div>
    </div>
  )
}

export default Cart