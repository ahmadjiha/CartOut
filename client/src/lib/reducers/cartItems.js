const cartItems = (state=[], action) => {
  switch (action.type) {
    case 'CART_ITEMS_RECEIVED': {
      return action.payload;
    }
    case 'CART_ITEMS_CHECKOUT': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default cartItems;