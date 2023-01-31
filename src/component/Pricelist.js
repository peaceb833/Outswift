

import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Css/pricelist.css"

import React, { useEffect } from 'react'
import Nav from '../RE-use/Nav'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Call from '../RE-use/Call'
const Pricelist = () => {
        useEffect(()=>{
          AOS.init({duration:2000}); 
        }, [])
  return (
    <>
    <div className='list bg-primary list ' id='Pricelist'>
        <Nav />
      <div className=' mt-4 p-2 '>
        <Call />
     
        <h1 className='h3 text-light fw-bold text-center mb-5  ' data-aos="fade-down">Outswift Pricelist</h1>
        <table className="table table-striped" data-aos="fade-down">
        <thead>
            <tr>
                <th>Clothing</th>
                <th>SILVER</th>
                <th>GOLD</th>
                <th>PlATINUM</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>shirt</td>
                <td>320 </td>
                <td>490</td>
                <td>650</td>
               
            </tr>
            
            <tr>
                <td >Coloured roundneck</td>
                <td>270</td>
                <td>410</td>
                <td>550</td>
                 </tr>
            <tr>
            <td >White roundneck</td>
            <td>320</td>
            <td>490</td>
            <td >510</td>
           
        </tr> 
    <tr>
       <td>Trouser</td>
           <td >270</td>
           <td >410</td>
           <td >550</td>
           
    </tr>
     <tr>
      <td>Jean trouser</td>
       <td >230</td>
       <td >590</td>
       <td >650</td>
      
      </tr>
     <tr>
     <td>Singlet</td>
     <td >160</td>
     <td >250</td>
     <td >230</td>
     
     </tr> 
      <tr>
      <td>Kaftan with agbada</td>
      <td >1,090</td>
      <td >1,630</td>
      <td >2,170</td>
      
      </tr>
      <tr>
      <td>Office suit and trouser</td>
      <td >2,170</td>
      <td >3,250</td>
      <td >4,340</td>
    
      </tr>
         <tr>
         <td>A pair of socks</td>
         <td >160</td>
         <td >240</td>
         <td >330</td>
         
         </tr>
            <tr>
            <td>Hoodie/sweat-shirt</td>
            <td >540</td>
            <td >810</td>
            <td >1,080</td>
           
            </tr>
            <tr>
           <td>School uniform(senior)</td>
           <td >430</td>
           <td >650</td>
           <td >870</td>
           
         </tr>
         <tr>
          <td>School uniform(junior)</td>
          <td >330</td>
          <td >490</td>
          <td >510</td>
         
       </tr>
 <tr>
     <td>Female native wears</td>
     <td >550</td>
     <td >820</td>
     <td >340</td>
    
 </tr>
 <tr>
     <td>Men native wears</td>
     <td >550</td>
     <td >820</td>
     <td >340</td> 
    </tr>
 <tr>
     <td>Gown</td>
     <td >430</td>
     <td >650</td>
     <td >700</td> 
  </tr>
 <tr>
     <td>Small bedsheet</td>
     <td >760</td>
     <td >1,140</td>
     <td >1,520</td>
 </tr>
 <tr>
    <td>Big towel</td>
    <td>650</td>
    <td>980</td>
    <td>1,300</td>
  </tr>
<tr>
    <td>big duvet</td>
    <td>2,170</td>
    <td>3,250</td>
    <td>4,330</td>
   
</tr>
<tr>
    <td>Small duvet</td>
    <td >1,600</td>
    <td >2,1670</td>
    <td >3,330</td>
    
</tr>
<tr>
    <td>Aso oke</td>
    <td>1,630</td>
    <td>2,440</td>
    <td>3,250</td>
</tr>
<tr>
    <td>Curtain</td>
    <td>760</td>
    <td>1,140</td>
    <td>1,520</td>
    
</tr>
        </tbody>
    </table>
<div className='text-center  ' >
    <Link to="/Loginpage" className=''><button className='btn  h4 bg-white text-primary px-5 fw-bold py-2 mt-3' >Book Now </button></Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default Pricelist