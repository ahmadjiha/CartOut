const cartItems = (state=[], action) => {
  switch (action.type) {
    case 'CART_ITEMS_RECEIVED': {
      return action.payload;
    }
    case 'CART_ITEMS_CHECKOUT': {
      return action.payload;
    }
    case 'PRODUCT_ADDED_TO_CART': {
      if (state.some(cartItem => cartItem._id === action.payload.updatedCartItem._id)) {
        return state.map(cartItem => {
          if (cartItem._id === action.payload.updatedCartItem._id) {
            return action.payload.updatedCartItem;
          }

          return cartItem;
        });
      }

      return state.concat(action.payload.updatedCartItem);
    }
    default: {
      return state;
    }
  }
};

export default cartItems;