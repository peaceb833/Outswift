// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faShoppingBasket,faTimes, faHome } from '@fortawesome/free-solid-svg-icons'

// import { Link } from 'react-router-dom' 
// import Nav2 from '../RE-use/Nav2'
// import data from '../RE-use/data'
// import Card from './Card'

// const Booknow = () => {
//   const {cart, setCart}=useState([])
//   const click=(item)=>{
//     setCart([...cart,item])
//     console.log(cart);
    
    
   
//   }
//   return (
//     <>
// <div className='bg-light px-2  p-0 overflow-hidden h-100 shadow '>

// <div className='bg-primary d-flex navv justify-content-between px-2  '>

// <div className='px-3 '>

// <Link to= '/'><FontAwesomeIcon icon={faHome} className=" p-2 bg-primary h3 text-white fw-bold"/>

// </Link></div>

// <div>

// <Link to= '/Pricelist'><FontAwesomeIcon icon={faTimes} className=" p-1 rounded bg-white  h5 mt-2 text-primary fw-bold"/>

// </Link>

// </div>



// </div>

// <aside className='fixed-top text-end pt-5 mt-5 mx-1'><Link to="/Basket"><FontAwesomeIcon icon={faShoppingBasket} className="  shadow  bg-primary   basket  "/></Link><span className=''>0</span>

// </aside>





// <Nav2/>


// <section className='row text-center'>

//   {data.product.map((item)=>{

//     return(
     
//       <div className='col-6 col-md-4 col-lg-3 p-2'>
//       <Card key={item.id} item={item} click={click}/>
//     </div>
//     )
//   })}
// </section>
// {/* </div> */}
//  </>
//   )
// }

// export default Booknow



