import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faHome } from '@fortawesome/free-solid-svg-icons'

const Plans = () => {
  return (
    <div className=''>
            <div className='d-flex justify-content-between navv bg-primary px-3 '>

<div>

<Link to= '/'><FontAwesomeIcon icon={faHome} className=" p-3  h3 text-light fw-bold shadow"/>

</Link>
</div>
<div >

 <Link to= '/LoginPage'><FontAwesomeIcon icon={faTimes} className=" p-2 rounded  bg-light shadow h5 mt-3 text-primary fw-bold"/>

 </Link>

 </div>

 </div>
 
  <div className='plan text-center mt-5 mb-5'>

<h2 className='text-center h4 text-primary fw-bold'>CHOOSE PLAN</h2>

<div className='row mt-4 px-5'>

<Link to= '/Silverplan'><div className='col-12 mt-3 col-md-4  silver btn btn-primary rounded ' data-aos="fade-right"><h2 className='h5 p-3'>SILVER PLAN</h2></div></Link>

<Link to= '/Goldplan'><div className='col-12 mt-3 col-md-4 gold btn btn-primary rounded ' data-aos="fade-left"><h2 className='h5 p-3'>GOLD PLAN</h2></div></Link>

<Link to= '/Platinum'><div className='col-12  mt-3 col-md-4 platinum btn btn-primary rounded ' data-aos="fade-right"><h2 className='h5 p-3'>PlATINUM PLAN</h2></div></Link>


</div>

</div>
  

  
  <div id='Price' className='pricelist  mt-2  bg-light   ' data-aos="zoom-in">

<p className='h4 text-center mb-1  text-primary fw-bold mt-5 mb-3'>Our Pricelist</p>

<p className=' mb-5 px-4 text-secondary mx-auto'> At outswift laundry we look forward to all cutomer satisfaction

  we give one of the best price all of our client can afford  

  Click the button below to explore our price list.</p>

 <div className='row text-center px-4 justify-content-around  '>

  <div className='col-12 col-md-4 bg-primary rounded mt-0 mt-md-4     ' >

    <h2>Silver Plan </h2>

    <p>Just Washing</p>

    <p>delivery in 3 Working days</p>

  </div>

  <div className='col-12 col-md-4 mt-4 bg-primary rounded  ' >

     <h2>Gold Plan</h2>

    <p>Washing & Ironing</p>

      <p>delivery in 2 Working days</p></div>

  <div className='col-12 col-md-4 mt-4 bg-primary rounded '>

  <h2>Platinum Plan </h2>

    <p>Washing + Starching + Ironing</p>

     <p>delivery in 24hrs</p>

  </div>

  <div className='text-center mt-3 py-2 '>

<Link to="/Pricelist"><button className='p-2 rounded border border-2 border-primary shadow   fw-bold  text-primary btn'>View Pricelist</button></Link>

</div>  

 </div>

 </div>

</div>

    
  )
}

export default Plans