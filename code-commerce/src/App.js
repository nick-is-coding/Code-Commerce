import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const INIT_STATE = {
  cartTotal: 0,
}

function App() {
  const [cartTotal, setCartTotal] = useState(INIT_STATE.cartTotal);
  const [showCart, setShowCart] = useState(false);

  
  const handleOnSubmit = () => {
    setShowCart(true);
  };


  return (
    <div className="App">
      <header className="App-header">
        {showCart ? (
          <Cart cartTotal={cartTotal} />
        ) : (
          <Login onSubmit={handleOnSubmit} />
        )}
      </header>
    </div>
  );
}

export default App;
