import React from 'react'
import {  useCart } from 'react-use-cart'
import data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Join() {
  const { addItem } = useCart()
 
  return (
    <div className='bg-light '>
      <div className='bg-primary d-flex justify-content-between'>
    <div className='px-3 '>
    <Link to="/"><h5 className='text-light mt-2 h6'>Back</h5></Link>
    </div>

     <div>
     <Link to="/Basket"><FontAwesomeIcon icon={faShoppingBasket} className="    bg-primary   font "/></Link>
     </div>
      </div>
         <div className='row p-4'>

      {data.product.map(p => (
       
        <div key={p.id} className="col-6 col-md-4 col-lg-3" >    
           <div className=' mt-3 mx-0 mb-4 text-center '>
              <div class="   card p-0 overflow-hidden h-100 shadow  ">
               <img class="card-img-top img-fluid" src={p.img} alt=" item" />
               <div class="card-body ">
                 <h5 class="card-title text-primary h6">{p.Title}</h5>
                 <p className='fw-bold text-secondary small'><FontAwesomeIcon icon={faNairaSign} className="small text-secondary"/>{p.price}</p>
      <button className='bg-primary text-white btn' onClick={() => addItem(p) }>Add to cart</button>
          </div>
          </div> 
          </div>
          </div> 
           
      ))}
    </div>
    </div>
  )
} 
 
export default Join


















