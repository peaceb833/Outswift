import React from 'react';
import '../Css/spinner.css'
import Image from '../images/frame-made-detergent-foam-bubble-top-view_51524-11584.jpg'
function Spinner() {

  
  return (
    
    <div className="spinner-container bg-primary">
    <div>
    <img src={Image} className='spinner' alt='spinner'/>
    </div>
    <h3 className='text fw-bold'> OUTSWIFT LAUNDARY</h3>
 </div>
    );
}

export default Spinner;