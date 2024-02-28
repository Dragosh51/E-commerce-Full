import './Home.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch()
  // }, [dispatch]);

  const products = [];

  const addToCart = (productID) => {
    console.log(`Product ${productID} added to cart`);


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
              <button className='addbutton' onClick={() => addToCart(product.productID)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
}

export default Home;