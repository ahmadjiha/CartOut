

import cart from './cart'
import products from './products'

const rootReducer = (state= {}, action) => {
  return {
    cart: cart(state.cart, action),
    products: products(state.products, action)
  };
}

export default rootReducer;