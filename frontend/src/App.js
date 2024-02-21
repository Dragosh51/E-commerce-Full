import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { NonPrivateRoute, PrivateRoute } from './router/utils';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './store/actions/authActions'

// Components
import Login from "../src/pages/Log-in/login";
import Register from "../src/pages/register/register";
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import NavBar from './components/navBar/NavBar';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]);
  

  return (
    <Routes>
      <Route path="/Login" element={<NonPrivateRoute><Login /></NonPrivateRoute>} />
      <Route path="/Register" element={<NonPrivateRoute><Register /></NonPrivateRoute>} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      {/* <PrivateRoute path='/Home' element={<Home />} />
          <PrivateRoute path='/Cart' element={<Cart />} />
          <PrivateRoute path='/Checkout' element={<Checkout />} /> */}
    </Routes>



  );
}

export default App;
