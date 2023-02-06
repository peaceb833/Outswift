import React from 'react'
import {  useCart } from 'react-use-cart'
import data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Image from './Image'
function Join() {
  const { addItem } = useCart()
 
  return (
    <div>
      <div className='flex justify-content-between'>
         <Image/></div>
         

      {data.product.map(p => (
        <div key={p.id}>
              
           <div className='row bg-danger mx-auto'>
 <div className='row col-6 col-md-6 col-lg-3 text-center    mx-auto mb-4'>
     <div class="card p-0 overflow-hidden h-100 shadow  ">
      <img class="card-img-top img-fluid" src={p.img} alt=" item" />
      <div class="card-body ">
        <h5 class="card-title">{p.Title}</h5>
        <p class="card-text">lore,dsnsbfesbfkshfkewbflksehfvkdsnb</p>
        <button className='bg-primary text-white btn' onClick={() => addItem(p)}>Add to cart</button>
          </div>
          </div>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  )
} 
 
export default Join


















