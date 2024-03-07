import './Home.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {
  const [cart, setCart] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addToCart = (productID) => {
    const productToAdd = products.find((product) => product.productID === productID);
    setCart((prevCart) => [...prevCart, productToAdd]);
    console.log(`Product ${productID} added to cart`);
  };


  return (
    <div className='Home'>
      <div className='cart-button'>
        <button>Cart</button>
      </div>
      <div className='products-container'>
        {products.map((product) => (
          <div key={product.productID} className='product'>
            <h2>{product.productName}</h2>
            <img src={product.image} alt={product.productName} />
            <button className='addbutton' onClick={() => addToCart(product.productID)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;