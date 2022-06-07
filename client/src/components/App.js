import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Cart from "./Cart";
import Products from "./Products";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get('http://localhost:5001/api/products');
      setItems(products.data);
    }

    getProducts();
  }, []);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={items}/>
      </header>
      <main>
      <Products products={items}/>
      </main>
    </div>
  );
};

export default App;
