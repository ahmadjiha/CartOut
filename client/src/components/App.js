import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Cart from "./Cart";
import Products from "./Products";
import AddProduct from "./AddProduct";


const App = () => {
  const dispatch = useDispatch();
  // const [items, setItems] = useState([]);
  const products = useSelector((state) => state.products);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        {/* <Cart /> */}
      </header>
      <main>
      <Products />
      {/* <AddProduct items={items} setItems={setItems} /> */}
      </main>
    </div>
  );
};

export default App;
