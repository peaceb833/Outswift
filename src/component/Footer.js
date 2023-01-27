import React from 'react';
import { Link } from 'react-scroll';
import '../Css/footer.css'
const Footer = () => {
  return (
    <div>
    <footer id='Contact' >
<div className=' footer bg-secondary   '>
   <div className='container row'>
        <div class="re text-white col-6 col-md-3 ">
          <p class="last-title text-white fw-bold  text-center ">Quick Links</p>
          <ul class="remove mt-3 text-white liststyle-none small ">
            <Link to='/' className="info text-white"> <li className='mx-3'>About Us</li></Link>
           <Link to='/'className="info text-white"><li className='mx-3'>Pricing</li></Link>
           <Link to='/'className="info text-white" > <li className='mx-3'>Our Services</li></Link>
           <Link to='/'  className="info text-white"><li className='mx-3'>Privacy Policy</li></Link>
           <Link to='/'  className="info text-white"><li className='mx-3'>Terms And Conditions</li></Link>
           <Link to='/'  className="info text-white"><li className='mx-3'>All Locations</li></Link>
</ul>
</div>
        <div class=" re col-6 col-md-3  ">
          <p class=" text-white fw-bold text-center ">Our Service</p>
          <ul class="remove text-left  small">
        <a href="#"  className="info  text-white"> <li>Laundry Service</li></a>
         <a href="#"  className="info  text-white"><li>Dry Cleaning Service</li></a>
         <a href="#" className="info  text-white"> <li>Ironing Service</li></a>
         <a href="#" className="info  text-white"> <li>Washing and Ironing</li></a>
         <a href="#" className="info  text-white"> <li></li></a> 
         <a href="#" className="info  text-white"> <li>Clothing Alterations</li></a>
         

         
</ul>
        </div>
        <div class=" col-6 col-md-3  re"><p class="last-title text-white fw-bold text-center"> Work with us</p>
        <ul class="remove mt-3 mx-3 small">
          <a href="#"  className="info  text-white"> <li>Careers</li></a>
           <a href="#"  className="info  text-white"><li>Partner drivers</li></a>
           <a href="#" className="info  text-white"> <li>Cleaning partners</li></a>
           <a href="#" className="info  text-white"> <li>Hotel partnerships</li></a>
           <a href="#" className="info  text-white"> <li>Student discount</li></a>


          </ul></div>
        <div class=" re col-6 col-md-3"><p class="last-title text-white fw-bold mx-4">Explore</p>
          <ul class="remove mt-3 small">
            <a href="#"  className="info  text-white "> <li>How it works</li></a>
             <a href="#"  className="info  text-white"><li>Prices & Services</li></a>
             <a href="#" className="info  text-white"> <li>Help center</li></a>   
             <a href="#" className="info  text-white"> <li>Chat with us</li></a>                
             
  </ul>
     </div>
      </div>
      <div></div>
      </div>
      <p className='fw-bold text-center mt-3 text-secondary'>&copy; 2022 All Rights Reserved. Designed by Outswift</p>
      </footer>
          </div>
          
  )
}

export default Footer


