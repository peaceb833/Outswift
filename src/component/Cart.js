import React from 'react'
import { useCart } from 'react-use-cart'
import '../Css/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear, faTimes, faNairaSign, faTrash, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Cart(props) {

  const {

    isEmpty,

    totalUniqueItems,

    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
   

  } = useCart()

 

  if (isEmpty) return <div className=' text-center cart  '><div className='text-end d-flex justify-content-between bg-primary px-2'>

<div>
<Link to= '/'><FontAwesomeIcon icon={faHome} className=" p-3 bg-primary h3 text-white fw-bold"/>
</Link>
</div>
 <div >
  <Link to= '/Booknow'><FontAwesomeIcon icon={faTimes} className="p-2  rounded bg-white h5   mt-3 text-primary fw-bold"/>
  </Link>
  </div>
  </div>
<h5 className='text-center  p-5 text-primary h2 center'>Your Laundry basket is empty</h5><FontAwesomeIcon icon={faSadTear} className=" p-3  h1 bg-primary rounded text-warning fw-bold"/></div>


  return (

    <>
    <div className='d-flex justify-content-between bg-primary px-2 '>
   <div>
  <Link to= '/'><FontAwesomeIcon icon={faHome} className=" p-3 bg-primary h3 text-white fw-bold"/>
  </Link>
  </div>
   <div >
    <Link to= '/Booknow'><FontAwesomeIcon icon={faTimes} className=" p-2 rounded bg-white  h5 mt-3 text-primary fw-bold"/>
    </Link>
    </div>

    </div>
    <div className='py-4 container'>
<div className='row justify-content-center'>
  <div className='  '>
      <h1 className='h5 mb-5 fw-bold text-primary text-center'>Items Added ({totalUniqueItems})total Items:({totalItems})</h1>

 

      <table className=' table   m-0'>
<tbody className=' mt-5'>
        {items.map(item => {
         return(
          <tr key={item.id}  className=' mt-5'>

          {/* <td> */}
            {/* <img src={item.img} className="w-25" alt='price'/> */}
          {/* </td> */}
          
          <td className='text-secondary'>{item.Title}</td>
          <td className='text-secondary'><FontAwesomeIcon icon={faNairaSign} className=" fw-bold"/>{item.price}</td>
          
          <td>
            <button className='btn btn-primary ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
             &nbsp;  &nbsp;<span className='fw-bold text-center text-secondary'>{item.quantity} </span>
            <button className='btn btn-primary ms-2'  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button className='btn btn-danger ms-5 '  onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash}/></button>

          </td>



            {/* <button className='fw-bold mx-3 bg-primary text-white' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> */}
            {/* <FontAwesomeIcon icon={faMinus} className="small"/> */}
            {/* </button> */}
          {/* <span className='fw-bold'>{item.quantity} </span> */}
            {/* <button className='fw-bold mx-3 bg-primary text-white' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> */}
                  {/* <FontAwesomeIcon icon={faPlus} className="small"/> */}
            {/* </button> */}

            {/* <button  onClick={() => removeItem(item.id)} className="btn bg-danger text-white fw-bold mx-5 ">Remove</button> */}

          </tr>

        )})} 
</tbody>
      </table>
</div>

<div className='col-auto ms-auto mt-4'>
  <h2 className='fw-bold h6 text-secondary'>Total Price: <FontAwesomeIcon icon={faNairaSign} className="small"/>{cartTotal}</h2>
<hr></hr>
</div>
<div className='text-center mt-5'>
<button className='btn btn-primary h4 m-2 w-50  fw-bold text-white' >Check Out</button></div>
</div>
</div>
<Footer/>
    </>

  )

}


 


export default Cart