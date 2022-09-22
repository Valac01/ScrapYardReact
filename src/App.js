import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import SignUp from './components/SignUp';
import { Routes, Route } from "react-router-dom";
import Logi from './components/Login';
import Header from './components/Header';
import CartPage from './page/CartPage';
import Individual from './page/Services/Individual/Individual';
import Society from './page/Services/Society/Society';
import Industry from './page/Services/Industry/Industry';
import Contact from './page/Contact/Contact';
import About from './page/About/About';
import Cart from './Component/Cart';



function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/logi" element={<Logi />} />
          {/* <Route exact path="/dump" element={<CartPage />} /> */}
          <Route exact path="/dump" element={<CartPage />} />
          <Route exact path="/individual" element={<Individual/>} />
          <Route exact path="/industry" element={<Industry/>} />
          <Route exact path="/society" element={<Society/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App;