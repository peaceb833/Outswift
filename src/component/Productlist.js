import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNairaSign, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import data from '../RE-use/data'
import {  useCart } from 'react-use-cart'



const Productlist = () => {
     const {
      addItem,
      totalItems,
    }=useCart();
    

  return (
    <div>
   <section className='row text-center'>
{ data.product.map((p)=>{
  return(
    <div className='col-6 col-md-4 col-lg-3 p-2' key={p.id}>

<aside className='fixed-top text-end pt-5 mt-5 mx-1 '><Link to="/Cart"><FontAwesomeIcon icon={faShoppingBasket} className=" shadow bg-primary text-white p-2 rounded   basket  "/><span className='text-white '>{totalItems}</span></Link>

</aside>

<div class="card">

<img class="card-img-top" src={p.img} alt=" product"/>

<div class="card-body">

<h5 class="card-title h6 text-primary">{p.Title}</h5>

<p class="card-text small fw-bold text-secondary"><FontAwesomeIcon icon={faNairaSign} className='small'/>{p.price}</p>

<button class="btn btn-primary" onClick={() =>addItem(p)}>Add to cart</button>

</div>

</div>


  </div>

  )

})}

</section>

    </div>
  )
}

export default Productlist