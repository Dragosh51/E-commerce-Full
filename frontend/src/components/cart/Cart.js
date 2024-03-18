import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const cartItems = [];

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productID}>
              {item.productName} - Quantity: {item.quantity ? item.quantity : 0}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;