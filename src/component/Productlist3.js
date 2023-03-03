import React from 'react'
import data3 from '../RE-use/data3'
import Item3 from './Item'

const Productlist3 = ({product}) => {

  return (
    <div>
        <section className='row text-center'>



{ data3.product.map((item)=>{
  return(
    <div className='col-6 col-md-4 col-lg-3 p-2'>

    <Item3 key={item.id} item={item} Title={item.Title} img={item.img} price={item.price}/>

  </div>

  )

})}

</section>

    </div>
  )
}

export default Productlist3