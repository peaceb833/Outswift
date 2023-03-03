
import React from 'react';
import { CartProvider} from 'react-use-cart';
import Productlist from './Productlist';
import Nav2 from '../RE-use/Nav2';
import Cart from './Cart';
import Header from './Header';

const Silverplan = () => {

  return (
    <div>
    
    
      
      <CartProvider>
        <Header/>
                
      <Nav2 />
      </CartProvider>
      <Productlist/>
    </div>
  );
};

export default Silverplan;







// import React, { useState } from 'react'
// import data from '../RE-use/data'
// import Productlist from './Productlist'
// import Header from './Header'
// import Nav2 from '../RE-use/Nav2'
// import Cart from './Cart'



// const Silverplan = () => {
//   const { product } = data;

// const[cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
//   const click = (item) => {
    
//     const productExist = product.find((productItem) => productItem.id === item.id);

//     if (productExist) {
//       // Add the product to cart state
//      setCart(setCartInLocalStorage(productExist));
    
//     } else {
//       console.log('Product does not exist');
//     }

//   };

//   const setCartInLocalStorage = (productItem) => {
   
//     // Retrieve the existing cart from localStorage or initialize an empty array
//     const container = JSON.parse(localStorage.getItem('cart')) || [];

//     // Add the new product to the cart
//     container.push(productItem);

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(container));
//     return container
    
//   };

//   return (
//     <div>
//       <Header />
//       <Productlist product={product} click={click} />
//       <Nav2 />
//       <Cart cart={cart} />
//     </div>
//   );
// };

// export default Silverplan;
