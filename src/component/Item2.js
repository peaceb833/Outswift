import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faNairaSign, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Item2 = ({Title,img,price}) => {
  return (
    <>
    <aside className='fixed-top text-end pt-5 mt-5 mx-1'><Link to="/Basket"><FontAwesomeIcon icon={faShoppingBasket} className="  shadow  bg-primary text-white p-2 rounded   basket  "/><span className='text-white '>0</span></Link>



</aside>



   <div class="card">
  <img class="card-img-top" src={img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title h6 text-primary">{Title}</h5>
    <p class="card-text small fw-bold text-secondary"><FontAwesomeIcon icon={faNairaSign} className='small'/>{price}</p>
    <button class="btn btn-primary">Add to cart</button>
  </div>
</div>
    </>
  )
}

export default Item2



