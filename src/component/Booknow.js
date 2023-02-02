import React from 'react'
import data from '../RE-use/data'
import Item from './Item'
const Booknow = () => {
  return (
    <>
<h1 className='text-center'>All Items</h1>
   {data.productdata.map((item, index)=>
   {
    return(
   <Item title={item.Title} img={item.img} />
    )
  })}
       
 </>
  )
}

export default Booknow



