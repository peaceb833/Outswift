import React from "react";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const Cart = () => {

    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      cartTotal,
    } = useCart();
  
    if (isEmpty) return <>
    <div className="d-flex justify-content-between">
    <div className='px-3  '>
 <Link to= '/'><FontAwesomeIcon icon={faHome} className=" p-2 bg-primary h3 text-white fw-bold"/>
</Link></div>
<div>
<Link to= '/Silverplan'><FontAwesomeIcon icon={faTimes} className=" p-1 rounded bg-white  h5 mt-2 text-primary fw-bold"/>
</Link>
</div>
</div>
<div className="bg-primary p-5">
  <p className="text-center p-5 text-light fw-bold">Your laundry basket is empty</p></div>
  
  </>
    
  
    return (
      <>
        <h1>Cart ({totalUniqueItems})</h1>
  
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.name} &mdash;
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </li>

          ))}
        </ul>
        <p>{cartTotal}</p>
      </>
    );
  }




   export default Cart



