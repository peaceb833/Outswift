import React from 'react'
import "../Css/next.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCab } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import img from '../images/istockphoto-843177236-612x612.jpg'
import img2 from '../images/istockphoto-1182647877-612x612.jpg'
import img3 from '../images/istockphoto-1287632118-612x612.jpg'



const Next = () => {
  return (
    <div>
        <div className=' next-container   py-3' id='How'>
            <div className='mt-5 '>
            <h1 className='h3 font-bold text-center text-secondary  what-we-do w-50 mx-auto '>What We Do?<br/></h1>
          </div>
          <div className='text-center   mt-3'>
            <div className='row mx-5 justify-content-between '>
                <div className='col-md-4 mt-4 d-flex mb-3  d-flex justify-content-center   mx-auto '>
                  <FontAwesomeIcon icon={faClock} className="  bg-primary me-3 font"/><p className='h6 text-secondary mt-2' > 24h turn-around time</p></div>
                <div className='col-md-4 d-flex  mt-2 mt-md-4 justify-content-center '><FontAwesomeIcon icon={faCab} className="    bg-primary  me-3 font "/> <p className='h6 text-secondary mt-2' >Free collection and delivery</p></div>
                <div className='col-md-4   d-flex  justify-content-center  mt-4 '><FontAwesomeIcon icon={faPhone} className="   bg-primary font me-3  "/> <p className='h6 text-secondary mt-2' >Dedicated 24/7 support</p></div>

            </div>
            
          
          </div>
        <div className='row mx-auto mt-3  '  data-aos="fade-right">
            
            <div  className='col-md-6 text-center px-4 mt-5'>
              <img  src={img2} className="mx-auto second-img rounded " alt='all'/>
               </div>
               <div className='col-md-6 text-right mt-5 '>
            <h1 className='h6 text-secondary mt-0 mt-md-5'>FREEDOM FROM LAUNDRY</h1>
            <p className=' h4 text-primary '>A laundry service designed for you</p>
            <p>Never worry about staining your favourite shirt. We offer laundry, dry cleaning and ironing at a schedule that fits your lifestyle.</p>
            <div className='  mt-5 text-center' data-aos="fade-left"><FontAwesomeIcon icon={faAngleDoubleDown} className="font  bg-primary rounded p-2  text-white h3 text-center"/></div>
           
            </div>
        </div>

          <hr/>
         
        <div className='row mx-auto mt-md-5 pt-4 px-3  mb-3'data-aos="fade-left">
          <div className='col-md-6 mx-auto  text-right mt- '>
           <h1 className='seconadry h6 text-secondary mt-0 mt-md-5 '>24H TURNAROUND TIME</h1> 
             <p className='h4 text-primary '>No need to plan in advance</p>
             <div>
              
             <div className='mt-4 d-flex '><FontAwesomeIcon icon={faClock} className="font bg-primary text-white rounded p-1 h5 me-3"/><p className='h6' > 24h turn-around time</p></div>
 <div className=' mt-4 d-flex'><FontAwesomeIcon icon={faCab} className="font  bg-primary rounded p-1 text-white h5 me-3"/> <p className='h6' >Free collection and delivery</p></div>
             </div>
             
                      </div>
                      <div  className='col-md-6 '>
                          <img  src={img3} className="mx-auto mb-4 mt-4 second-img rounded " alt='man'/>
                             </div>
                            </div>

                             <hr/>
            <div className='row mx-auto mt-md-5 pt-4 px-3 mt-5' data-aos="fade-up" >
            <div  className='col-md-6 ' data-aos="fade-right">
              <img  src={img} className="mx-auto second-img rounded " alt=' customer support'/>
                 </div>
                     

              <div className='col-md-6 text-right mt-4 ' >
                  <h1 className='seconadry h6 text-secondary mt-0 mt-md-5'>24/7 CUSTOMER SUPPORT</h1> 
                      <p className='text-primary h4'>We’re here for you</p>
                          <p>Any change in delivery times or date, or if something goes wrong, we are here. Our online customer support team will assist you day and night.</p>
                             <button className='py-1  text-primary  b  '> Chat With Us</button>
                             </div>
                             </div>
    

</div>
    </div>
  )
}

export default Next