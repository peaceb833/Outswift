import React from 'react'
import data from '../RE-use/data'
import Subfile from '../component/Subfile'
const Join = () => {
  return (
    <div>
     <div  className='py-4 container'>
        <div className='row justify-content-center'>
       
      {data.productdata.map((item,index)=>{
return(
<Subfile img={item.img} title={item.Title} desc='' key={index} item={item} />)})}   
    </div>
    </div>
    </div>
    
  )
}

export default Join