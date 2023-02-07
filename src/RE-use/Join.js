import React from 'react'
import {  useCart } from 'react-use-cart'
import data from './data'
import Nav2 from './Nav2'
function Join() {
  const { addItem } = useCart()
 
  return (
    <div className='login '>
      <div className='flex justify-content-between'>
         <Nav2/>
          </div>
         

      {data.product.map(p => (
        <div key={p.id} className="" >
              
           <div className='  col-6 col-md-4 col-lg-3  mt-3 mx-0 mb-4 text-center '>
              <div class="card p-0 overflow-hidden h-100 shadow  ">
               <img class="card-img-top img-fluid" src={p.img} alt=" item" />
               <div class="card-body ">
                 <h5 class="card-title">{p.Title}</h5>
        <p class="card-text">lore,dsnsbfesbfkshfkewbflksehfvkdsnb</p>
      <button className='bg-primary text-white btn' onClick={() => addItem(p) }>Add to cart</button>
          </div>
          </div>
          </div>
          </div>
          
        
        
        
      ))}
    </div>
  )
} 
 
export default Join


















