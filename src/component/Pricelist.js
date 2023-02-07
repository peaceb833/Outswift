

import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Css/pricelist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
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
                <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>320 </td>
                <td><FontAwesomeIcon icon={faNairaSign} className="small"/>490</td>
                <td><FontAwesomeIcon icon={faNairaSign} className="small"/>650</td>
               
            </tr>
            
            <tr>
                <td >Coloured roundneck</td>
                <td><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>270</td>
                <td><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>410</td>
                <td><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>550</td>
                 </tr>
            <tr>
            <td >White roundneck</td>
            <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>320</td>
            <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>490</td>
            <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>510</td>
           
        </tr> 
    <tr>
       <td>Trouser</td>
           <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>270</td>
           <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light" />410</td>
           <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>550</td>
           
    </tr>
     <tr>
      <td>Jean trouser</td>
       <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>230</td>
       <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>590</td>
       <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>650</td>
      
      </tr>
     <tr>
     <td>Singlet</td>
     <td >160</td>
     <td >250</td>
     <td >230</td>
     
     </tr> 
      <tr>
      <td>Kaftan with agbada</td>
      <td ><FontAwesomeIcon icon={faNairaSign} className="small"/>1,090</td>
      <td ><FontAwesomeIcon icon={faNairaSign} className="small"/>1,630</td>
      <td ><FontAwesomeIcon icon={faNairaSign} className="small"/>2,170</td>
      
      </tr>
      <tr>
      <td>Office suit and trouser</td>
      <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>2,170</td>
      <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>3,250</td>
      <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>4,340</td>
    
      </tr>
         <tr>
         <td>A pair of socks</td>
         <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>160</td>
         <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>240</td>
         <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>330</td>
         
         </tr>
            <tr>
            <td>Hoodie/sweat-shirt</td>
            <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>540</td>
            <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>810</td>
            <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>1,080</td>
           
            </tr>
            <tr>
           <td>School uniform(senior)</td>
           <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>430</td>
           <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>650</td>
           <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>870</td>
           
         </tr>
         <tr>
          <td>School uniform(junior)</td>
          <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>330</td>
          <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>490</td>
          <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>510</td>
         
       </tr>
 <tr>
     <td>Female native wears</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>550</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>820</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>340</td>
    
 </tr>
 <tr>
     <td>Men native wears</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>550</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>820</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small text-light"/>340</td> 
    </tr>
 <tr>
     <td>Gown</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small "/>430</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small "/>650</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small "/>700</td> 
  </tr>
 <tr>
     <td>Small bedsheet</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>760</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>1,140</td>
     <td ><FontAwesomeIcon icon={faNairaSign} className=" small"/>1,520</td>
 </tr>
 <tr>
    <td>Big towel</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>650</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>980</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>1,300</td>
  </tr>
<tr>
    <td>big duvet</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>2,170</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>3,250</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>4,330</td>
   
</tr>
<tr>
    <td>Small duvet</td>
    <td ><FontAwesomeIcon icon={faNairaSign} className=" small "/>1,600</td>
    <td ><FontAwesomeIcon icon={faNairaSign} className=" small "/>2,167</td>
    <td ><FontAwesomeIcon icon={faNairaSign} className=" small "/>3,330</td>
    
</tr>
<tr>
    <td>Aso oke</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>1,630</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>2,440</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>3,250</td>
</tr>
<tr>
    <td>Curtain</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>760</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>1,140</td>
    <td><FontAwesomeIcon icon={faNairaSign} className=" small"/>1,520</td>
    
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