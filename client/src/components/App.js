import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Cart from './Cart';
import Products from './Products';
import AddProductForm from './AddProductForm';

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const cart = await axios.get('http://localhost:5001/api/cart')
      setCartItems(cart.data);
    }

    getCart();
  }, []);

  return (
    <div id='app'>
      <header>
        <h1>The Shop!</h1>
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </header>
      <main>
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      <AddProductForm items={items} setItems={setItems} />
      </main>
    </div>
  );
};

export default App;
