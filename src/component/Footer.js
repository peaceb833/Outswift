import React from 'react';
import { Link } from 'react-scroll';
import '../Css/footer.css'
const Footer = () => {
  return (
    <div>
    <footer id='Contact' >
<div className=' footer bg-secondary   '>
   <div className=" container row">
        <div class="re  col-6 col-md-4 ">
          <p class="last-title mx-5 h6  text-white fw-bold ">Quick Links</p>
          <ul class="remove mt-3 text-white liststyle-none small ">
            <Link to='/' className="info text-white"> <li className='mx-3'>About Us</li></Link>
           <Link to='/'className="info text-white"><li className='mx-3'>Pricing</li></Link>
           <Link to='/'className="info text-white" > <li className='mx-3'>Our Services</li></Link>
           <Link to='/'  className="info text-white"><li className='mx-3'>Privacy Policy</li></Link>
           <Link to='/'  className="info text-white"><li className='mx-3'>Terms And Conditions</li></Link>
           <Link to='/'  className="info text-white"><li className='mx-3'>All Locations</li></Link>
</ul>
</div>
        <div class=" re col-6 col-md-4  ">
          <p class=" text-white fw-bold mx-5 ">Our Service</p>
          <ul class="remove text-left  small">
         <Link to='/' className="info  text-white"> <li>Laundry Service</li></Link>
         <Link to='/'  className="info  text-white"><li>Dry Cleaning Service</li></Link>
         <Link to='/' className="info  text-white"> <li>Ironing Service</li></Link>
         <Link to='/' className="info  text-white"> <li>Washing and Ironing</li></Link>
         <Link to='/' className="info  text-white"> <li></li></Link> 
         <Link to='/' className="info  text-white"> <li>Clothing Alterations</li></Link>
         

         
</ul>
        </div>
        <div class=" col-6 col-md-4  re"><p class="last-title text-white fw-bold mx-5"> Work with us</p>
        <ul class="remove mt-3 mx-3 small">
           <Link to='/' className="info  text-white"> <li>Careers</li></Link>
           <Link to='/'  className="info  text-white"><li>Partner drivers</li></Link>
           <Link to='/' className="info  text-white"> <li>Cleaning partners</li></Link>
           <Link to='/' className="info  text-white"> <li>Hotel partnerships</li></Link>
           <Link to='/' className="info  text-white"> <li>Student discount</li></Link>


          </ul></div>
        <div class=" re col-6 col-md-4"><p class="last-title text-white fw-bold mx-4">Explore</p>
          <ul class="remove mt-3 small">
          <Link to='/' className="info  text-white "> <li>How it works</li></Link>
          <Link to='/'  className="info  text-white"><li>Prices & Services</li></Link>
          <Link to='/' className="info  text-white"> <li>Help center</li></Link>   
          <Link to='/' className="info  text-white"> <li>Chat with us</li></Link>                
             
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


