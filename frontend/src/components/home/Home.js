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

  const products = useSelector(({ products }) => products.products);


  return (
    <div className='Home'>
      <div className='cart-button'>
        <button>Cart</button>
      </div>
      <div className='products-container'>
        <div className="product">
          <h2>Product 1</h2>
          {/* <img src="product1.jpg" alt="Product 1"> */}
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <h2>Product 2</h2>
          {/* <img src="product2.jpg" alt="Product 2"> */}
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <h2>Product 3</h2>
          {/* <img src="product3.jpg" alt="Product 3"> */}
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;