import React from 'react'
const Item = ({title,img}) => {
  return (
    <>
    <div className='container row'>
    <div className='col-6 col-md-6 col-lg-3  mx-0 mb-4'>
    <div class="card p-0 overflow-hidden h-100 shadow  ">
  <img class="card-img-top img-fluid" src={img} alt=" item" />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text"></p>
   <button class="btn btn-primary text-center">Add To Cart</button>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default Item



