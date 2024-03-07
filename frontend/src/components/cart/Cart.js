import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  // Assuming you have a 'cart' slice in your Redux store
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productID}>
              {item.productName} - Quantity: 1 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;