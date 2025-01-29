// import './portfolio.css';
// import { Array1 } from './array1';
// import { Message } from "./Message";
//import React from "react";
 // import { Parent1 } from "./parent1";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './portfolio.css';
import Portfolio from './portfolio';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/skills">Technical Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Portfolio section="portfolio" />} />
          <Route path="/about" element={<Portfolio section="about" />} />
          <Route path="/skills" element={<Portfolio section="skills" />} />
          <Route path="/projects" element={<Portfolio section="projects" />} />
          <Route path="/certifications" element={<Portfolio section="certifications" />} />
          <Route path="/contact" element={<Portfolio section="contact" />} />
        </Routes>
      </div>
    </Router>
  );
}

/*
function App(){
  return(
    <div>
      <Parent1 />
    </div>
  )
}

import React, { useState } from "react";
import { Cart } from "./Shoppingcart";
import { ProductList } from "./Product";

const App = () => {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Shopping Cart</h1>
      <Cart cart={cart} />
      <ProductList addToCart={addToCart} />
    </div>
  );
};
*/

// import React,{useState} from "react";
/*
import {Timer} from "./useEffect-1";

function App(){
return(
  <div>
  <Timer />
  </div>
)
}
*/
/*
import CountComponent from './useEffect-2'

function App() {
    return (
        <div className="App">
            <CountComponent />
        </div>
    );
}
*/
/*
import Form from './form';

function App() {
    return (
        <div >
            <Form />
        </div>
    );
}
    */
export default App;


