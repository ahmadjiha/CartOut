import React from 'react';
import { useState } from 'react';

import Cart from './Cart';
import Products from './Products';
import AddProductForm from './AddProductForm';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div id='app'>
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
      <Products cartItems={cartItems} setCartItems={setCartItems} />
      <AddProductForm />
      </main>
    </div>
  );
};

export default App;
