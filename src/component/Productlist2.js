import React from 'react'
import data2 from '../RE-use/data2'
import Item2 from './Item'

const Productlist = ({product}) => {

  return (
    <div>
        <section className='row text-center'>



{ data2.product.map((item)=>{
  return(
    <div className='col-6 col-md-4 col-lg-3 p-2'>

    <Item2 key={item.id} item={item} Title={item.Title} img={item.img} price={item.price}/>

  </div>

  )

})}

</section>

    </div>
  )
}

export default Productlist