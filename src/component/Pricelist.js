
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Css/pricelist.css"
// import { faClose} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import Nav from '../RE-use/Nav'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Pricelist = () => {
        useEffect(()=>{
          AOS.init({duration:2000});
        }, [])
  return (
    <>
    <div className='list bg-primary ' id='Pricelist'>
        <Nav />
      <div className=' mt-4 p-2 '>
     
        <h1 className='h3 text-light fw-bold text-center mb-5  ' data-aos="fade-down">Outswift Pricelist</h1>
        <table className="table" data-aos="fade-down">
        <thead>
            <tr className=''>
                <th className='text-light h5 fw-bold  '>Clothing</th>
                <th className='text-light'>SILVER</th>
                <th className='text-light'>GOLD</th>
                <th className='text-light'>PlATINUM</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row" className='cloth '>shirt</td>
                <td className='text-center text-light'>320 </td>
                <td className='text-center text-light'>490</td>
                <td className='text-center text-light'>650</td>
               
            </tr>
            
            <tr>
                <td scope="row" className='cloth'>Coloured roundneck</td>
                <td className='text-center text-light'>270</td>
                <td className='text-center text-light'>410</td>
                <td className='text-center text-light'>550</td>
                 </tr>
            <tr>
            <td scope="row" className='cloth'>White roundneck</td>
            <td className='text-center text-light'>320</td>
            <td className='text-center text-light'>490</td>
            <td className='text-center text-light'>510</td>
           
        </tr> 
    <tr>
       <td scope="row" className='cloth'>Trouser</td>
           <td className='text-center text-light'>270</td>
           <td className='text-center text-light'>410</td>
           <td className='text-center text-light'>550</td>
           
    </tr>
     <tr>
      <td scope="row" className='cloth'>Jean trouser</td>
       <td className='text-center text-light'>230</td>
       <td className='text-center text-light'>590</td>
       <td className='text-center text-light'>650</td>
      
      </tr>
     <tr>
     <td scope="row" className='cloth'>Singlet</td>
     <td className='text-center text-light'>160</td>
     <td className='text-center text-light'>250</td>
     <td className='text-center text-light'>230</td>
     
     </tr> 
      <tr>
      <td scope="row" className='cloth'>Kaftan with agbada</td>
      <td className='text-center text-light'>1,090</td>
      <td className='text-center text-light'>1,630</td>
      <td className='text-center text-light'>2,170</td>
      
      </tr>
      <tr>
      <td scope="row" className='cloth'>Office suit and trouser</td>
      <td className='text-center text-light'>2,170</td>
      <td className='text-center text-light'>3,250</td>
      <td className='text-center text-light'>4,340</td>
    
      </tr>
         <tr>
         <td scope="row" className='cloth'>A pair of socks</td>
         <td className='text-center text-light'>160</td>
         <td className='text-center text-light'>240</td>
         <td className='text-center text-light'>330</td>
         
         </tr>
            <tr>
            <td scope="row" className='cloth'>Hoodie/sweat-shirt</td>
            <td className='text-center text-light'>540</td>
            <td className='text-center text-light'>810</td>
            <td className='text-center text-light'>1,080</td>
           
            </tr>
            <tr>
           <td scope="row" className='cloth'>School uniform(senior)</td>
           <td className='text-center text-light'>430</td>
           <td className='text-center text-light'>650</td>
           <td className='text-center text-light'>870</td>
           
         </tr>
         <tr>
          <td scope="row" className='cloth'>School uniform(junior)</td>
          <td className='text-center text-light'>330</td>
          <td className='text-center text-light'>490</td>
          <td className='text-center text-light'>510</td>
         
       </tr>
 <tr>
     <td scope="row" className='cloth'>Female native wears</td>
     <td className='text-center text-light'>550</td>
     <td className='text-center text-light'>820</td>
     <td className='text-center text-light'>340</td>
    
 </tr>
 <tr>
     <td scope="row" className='cloth'>Men native wears</td>
     <td className='text-center text-light'>550</td>
     <td className='text-center text-light'>820</td>
     <td className='text-center text-light'>340</td> 
    </tr>
 <tr>
     <td scope="row" className='cloth'>Gown</td>
     <td className='text-center text-light'>430</td>
     <td className='text-center text-light'>650</td>
     <td className='text-center text-light'>700</td> 
  </tr>
 <tr>
     <td scope="row" className='cloth'>Small bedsheet</td>
     <td className='text-center text-light'>760</td>
     <td className='text-center text-light'>1,140</td>
     <td className='text-center text-light'>1,520</td>
 </tr>
 <tr>
    <td scope="row" className='cloth'>Big towel</td>
    <td className='text-center text-light'>650</td>
    <td className='text-center text-light'>980</td>
    <td className='text-center text-light'>1,300</td>
  </tr>
<tr>
    <td scope="row" className='cloth'>big duvet</td>
    <td className='text-center text-light'>2,170</td>
    <td className='text-center text-light'>3,250</td>
    <td className='text-center text-light'>4,330</td>
   
</tr>
<tr>
    <td scope="row" className='cloth'>Small duvet</td>
    <td className='text-center text-light'>1,600</td>
    <td className='text-center text-light'>2,1670</td>
    <td className='text-center text-light'>3,330</td>
    
</tr>
<tr>
    <td scope="row" className='cloth'>Aso oke</td>
    <td className='text-center text-light'>1,630</td>
    <td className='text-center text-light'>2,440</td>
    <td className='text-center text-light'>3,250</td>
    
</tr>
<tr>
    <td scope="row" className='cloth'>Curtain</td>
    <td className='text-center text-light'>760</td>
    <td className='text-center text-light'>1,140</td>
    <td className='text-center text-light'>1,520</td>
    
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