import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Cart from "./Cart";
import Products from "./Products";
import AddProductForm from "./AddProductForm";

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

  const deleteFromItems = (id) => {
    const newItems =  items.filter(item => item._id !== id)
    setItems(newItems)
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </header>
      <main>
      <Products deleteFromItems={deleteFromItems} cartItems={cartItems} setCartItems={setCartItems} />
      <AddProductForm items={items} setItems={setItems} />
      </main>
    </div>
  );
};

export default App;
