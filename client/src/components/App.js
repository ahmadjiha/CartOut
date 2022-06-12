import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Cart from "./Cart";
import Products from "./Products";
import AddProduct from "./AddProduct";

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:5001/api/products');
      setItems(data);
    }

    const getCart = async () => {
      const cart = await axios.get('http://localhost:5001/api/cart')
      setCartItems(cart.data);
    }

    getProducts();
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
      <Products products={items} deleteFromItems={deleteFromItems} cartItems={cartItems} setCartItems={setCartItems} />
      <AddProduct items={items} setItems={setItems} />
      </main>
    </div>
  );
};

export default App;
