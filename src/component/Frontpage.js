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
    
      <Call />

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
       </div>
       </div>
        <div className='text-center mt-3 py-2 '>
        <Link to="/Pricelist"><button className='p-2 rounded bg-white fw-bold  text-primary btn'>View Pricelist</button></Link>
        </div>  
  </div>

  <About  data-aos="flip-in"/>
<Footer />
    </div>
    
  
   
   
  )
}

export default Frontpage