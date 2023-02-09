import React from 'react'
import {  useCart } from 'react-use-cart'
import data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign,faShoppingBasket,faTimes, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Nav2 from './Nav2'
import "../Css/join.css"

function Join() {
  const { addItem } = useCart()
 
  return (
    <div className='bg-light px-2 '>
      <div className='bg-primary d-flex navv justify-content-between px-2  '>
    <div className='px-3 '>
    <Link to= '/'><FontAwesomeIcon icon={faHome} className=" p-2 bg-primary h3 text-white fw-bold"/>
    </Link></div>
    <div>
    <Link to= '/Pricelist'><FontAwesomeIcon icon={faTimes} className=" p-1 rounded bg-white  h5 mt-2 text-primary fw-bold"/>
    </Link>
    </div>
 
    </div>
     <aside className='fixed-top text-end pt-5 mt-5 mx-1'><Link to="/Basket"><FontAwesomeIcon icon={faShoppingBasket} className="  shadow  bg-primary   basket  "/></Link>
 </aside>
     
      
      <Nav2/>
      <div className='pt-5'>
      <h2 className='text-center h6 p-2 text-primary mt-3 fw-bold silver1 '  id='silver'>SILVER PLAN</h2>
        </div>
         <div className='row p-4'>

      {data.product.map(p => (
      
        <div key={p.id} className="col-6 col-md-4 col-lg-3" >    
           <div className=' mt-3 mx-0 mb-4 text-center '>
              <div class="   card p-0 overflow-hidden h-100 shadow  ">
               <img class="card-img-top img-fluid" src={p.img} alt=" item" />
               <div class="card-body ">
                 <h5 class="card-title text-primary small h6">{p.Title}</h5>
                 <p className='fw-bold text-secondary small'><FontAwesomeIcon icon={faNairaSign} className="small text-secondary"/>{p.price}</p>
      <button className='bg-primary text-white btn small' onClick={() => addItem(p) }>Add to cart</button>
          </div>
          </div> 
          </div>
          </div> 
           
      ))}
    </div>
  <div className='' id='gold'>
    <h2 className='text-center h6 p-2 text-primary mt-5 fw-bold gold1'>GOLD PLAN</h2>
    <div className='row p-4'>

{data.product.map(p => (



  <div key={p.id} className="col-6 col-md-4 col-lg-3" >    

     <div className=' mt-3 mx-0 mb-4 text-center '>

        <div class="   card p-0 overflow-hidden h-100 shadow  ">

         <img class="card-img-top img-fluid" src={p.img} alt=" item" />

         <div class="card-body ">

           <h5 class="card-title text-primary h6 small">{p.Title}</h5>

           <p className='fw-bold text-secondary small'><FontAwesomeIcon icon={faNairaSign} className="small text-secondary"/>{p.price}</p>

<button className='bg-primary text-white btn' onClick={() => addItem(p) }>Add to cart</button>

    </div>

    </div> 

    </div>

    </div> 

     

))}

</div>

<h2 className='text-center h6 p-2 text-primary mt-5 fw-bold platinum1'  id='platinum'>PLATINUM PLAN</h2>

<div className='row p-4'>

{data.product.map(p => (



<div key={p.id} className="col-6 col-md-4 col-lg-3" >    

  <div className=' mt-3 mx-0 mb-4 text-center '>

     <div class="   card p-0 overflow-hidden h-100 shadow  ">

      <img class="card-img-top img-fluid" src={p.img} alt=" item" />

      <div class="card-body ">

        <h5 class="card-title text-primary small h6">{p.Title}</h5>

        <p className='fw-bold text-secondary small'><FontAwesomeIcon icon={faNairaSign} className="small text-secondary"/>{p.price}</p>

<button className='bg-primary text-white btn' onClick={() => addItem(p) }>Add to cart</button>

 </div>

 </div> 

 </div>

 </div> 

  

))}

</div>

</div>

    </div>
  )
} 
 
export default Join


















