import React from 'react'
import { useCart } from 'react-use-cart'


function Cart(props) {

  const {

    isEmpty,

    totalUniqueItems,

    items,

    updateItemQuantity,

    removeItem,

  } = useCart()

 

  if (isEmpty) return <div className='bg-primary text-center p-5 h-100 '><h5 className='text-center p-5 text-white h3 center'>Your Laundry basket is empty</h5></div>

 

  return (

    <>
<div className='bg-primary text-center'>
      <h1 className='h4 fw-bold text-light'>Items Added ({totalUniqueItems})</h1>

 

      <ul>

        {items.map(item => (

          <li key={item.id}  className='liststyle-type-none'>

           

            <button
               className='fw-bold mx-3 '
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}

            >

              -

            </button>
          <span className='fw-bold'>{item.quantity} </span>
            <button
             className='fw-bold mx-3 '
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
              +
            </button>

            <button  onClick={() => removeItem(item.id)} className="btn bg-danger text-white fw-bold mx-5 ">Remove</button>

          </li>

        ))}

      </ul>
</div>
    </>

  )

}

 


export default Cart