import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Cart from "./Cart";
import Products from "./Products";
import AddProduct from "./AddProduct";

import { productsReceived } from "../actions/productsActions"

const App = () => {
  const dispatch = useDispatch();
  // const [items, setItems] = useState([]);
  const products = useSelector((state) => state.products);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:5001/api/products');
      dispatch(productsReceived(data));
    }

    const getCart = async () => {
      const cart = await axios.get('http://localhost:5001/api/cart')
      setCartItems(cart.data);
    }

    getProducts();
    getCart();
  }, [dispatch]);

  const deleteFromItems = (id) => {
    // const newItems =  items.filter(item => item._id !== id);
    // setItems(newItems);
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </header>
      <main>
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      {/* <AddProduct items={items} setItems={setItems} /> */}
      </main>
    </div>
  );
};

export default App;
