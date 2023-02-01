import React, { useEffect } from 'react'
import Nav from '../RE-use/Nav'
import feel from '../images/IMG-20230126-WA0007.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "../Css/home.css"
import Next from './Next'
import About from './About'
import Footer from './Footer'
import { Link  } from 'react-router-dom'
import Call from '../RE-use/Call'
import Testimonial from './Testimonial'
import images1 from '../images/iron_318-901503.png'
import images2 from '../images/laundry_318-903037.png'
import images3 from '../images/dry_318-751780.png'
import images4 from '../images/ironing_318-765187.png'

const Frontpage = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  }, [])
  return (
    <div className='p-0'>
      <div className=' bg-primary' id='home'>
      <Nav  />
    <div className='container d-md-flex flex-row justify-content-center py-5 mt-5'>
    <div className='mt-md-5'>
     <p  className=' mx-md-4  mt-3 h2  mb-3 fw-bold px-3  text-white ' data-aos="fade-right">Laundry & dry cleaning with Swift delivery  in  <span className='text-warning'>Lagos state university</span></p>
    </div>

   <div className=' text-center   img-container'>
   <img data-aos="fade-up" className='mx-auto mt-4  img text-center img-fluid ' src={feel} alt="laundry"/>
     </div>
     </div>
    </div>
      <Call />
      <div className='text-center'  data-aos="fade-left">

<h1 className='text-primary h5 mb-5 mt-5 fw-bold'>List of Our Services</h1>

<div className='container row mx-auto mt-4'>

  <div  className='col-6 col-md-3'>

    <img src={images1} alt="iron" className='w-50'/>

    <p className='fw-bold mt-3  text-primary'>IRONING SERVICE </p>
    <p className='text-secondary'>
      Get your washed clothes wrinkled free by our ironing service and look professional.
    </p>

  </div>

  <div  className='col-6 col-md-3'>

  <img src={images2} alt="wash and iron" className='w-50'/>

  <p className='fw-bold mt-3  text-primary'>WASHING</p>
  <p className='text-secondary'>Need your clothe properly washed? you are at the right destination.</p>

  </div>

  <div  className='col-6 col-md-3 mt-3 mt-md-0'>
  <img src={images3} alt="dry clean" className='w-50'/>
  <p className='fw-bold mt-3  text-primary'>DRY CLEANING</p>
  <p className='text-secondary'>We dry clean your clothe so nice that it will look crisp when you wear it.</p>
  </div>
  <div  className='col-6 col-md-3 mt-3 mt-md-0'>
  <img src={images4} alt="treat" className='w-50' />
  <p className='fw-bold mt-3  text-primary'>TREATMENT</p>
  <p className='text-secondary'>
    We treat your clothes perfectly for a second time or more Use.
    with no regret.
  </p>

  </div>
</div>


  <Next/>
  <div id='Price' className='pricelist p-3  bg-primary  ' data-aos="zoom-in">
      <p className='h4 text-center mb-1  mt-5'>Our Pricelist</p>
      <p className=' mb-5 px-4'> At outswift laundry we look forward to all cutomer satisfaction
        we give one of the best price all of our client can afford  
        Click the button below to explore our price list.</p>
       <div className='row text-center '>
        <div className='col-sm-6 col-md-4 ' >
          <h2>Silver Plan </h2>
          <p>Just Washing</p>
          <p>delivery in 3 Working days</p>
        </div>
        <div className='col-sm-6 col-md-4 mt-2' mt-3> <h2>Gold Plan</h2>
          <p>Washing & Starching -</p>
            <p>delivery in 2 Working days</p></div>
        <div className='col-sm-6 col-md-4 mt-3'>
        <h2>Platinum Plan </h2>
          <p>Washing + Ironing & Starching</p>
           <p>delivery in 24hrs</p>
        </div>
        <div className='text-center mt-3 py-2 '>
     <Link to="/Pricelist"><button className='p-2 rounded bg-white fw-bold  text-primary btn'>View Pricelist</button></Link>
     </div>  
       </div>
       </div>
  </div>


  <About />
  <Testimonial />
<Footer />
    </div>
    
  
   
   
  )
}

export default Frontpage