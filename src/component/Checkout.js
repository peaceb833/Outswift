import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const Checkout = () => {
  const { cartTotal, cart } = useCart();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <button onClick={handleShowForm}>Edit Cart</button>
        </div>
        <div className="checkout-body">
          {showForm ? (
            <CheckoutForm cart={cart} />
          ) : (
            <>
              <OrderSummary cartTotal={cartTotal} />
              <div className="checkout-buttons">
                <button className="checkout-btn">Place Order</button>
                <button className="continue-shopping-btn">Continue Shopping</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
