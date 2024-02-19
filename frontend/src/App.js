import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import NavBar from './components/navBar/NavBar';
import { Login } from "../src/pages/Log-in/login";
import { Register } from "../src/pages/register/register";
import { NonPrivateRoute, PrivateRoute } from './router/utils';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/Login" element={<NonPrivateRoute Component={Login} />} />
          <Route path='/Home' element={<Home />} />
          {/* <PrivateRoute path='/Home' element={<Home />} />
          <PrivateRoute path='/Cart' element={<Cart />} />
          <PrivateRoute path='/Checkout' element={<Checkout />} /> */}
        </Routes>
  );
}

export default App;
