
const cart = (state=[], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED": {
      return action.payload
    }
    case "CHECKOUT_CART": {
      return [];
    }
    // case "ADD_TO_CART": {
    //   const id = action.payload.newCartItem._id;
    //   if (state.some(cartItem => cartItem._id === id)) {
    //     return state.map(cartItem => {
    //       if (cartItem._id === id) {
    //         cartItem.quantity += 1;
    //       }
  
    //       return cartItem;
    //     })

    //   } else {
    //     return state.concat(action.payload.newCartItem);
    //   }
    // }
    default: {
      return state
    }
  }
}

export default cart;