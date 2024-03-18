import './Home.css'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/actions/productActions';
import { Link } from 'react-router-dom';
import { addItem } from '../../store/actions/cartActions';

const Home = () => {
  const [cart, setCart] = useState([]);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);



  const addToCart = (product) => {
    // const productToAdd = products.find((product) => product.productID === productID);
    // setCart((prevCart) => [...prevCart, productToAdd]);
    // console.log(`Product ${productID} added to cart`);
    console.log(product);
    dispatch(addItem(product))
  };

  console.log('Products:', products);


  return (
    <div className='Home'>
      <div className='products-container-wrapper'>
      <div className='cart-button'>
        <Link to='/Cart'>Cart</Link>
        { cartItem.length > 0 && 
          <div>{cartItem.length}</div>
        }
      </div>
      <div className='products-container'>
        {products.map((product) => (
          <div key={product.productID} className='product'>
            <h2>{product.productName}</h2>
            <img src={product.image} alt={product.productName} />
            <button className='addbutton' onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;