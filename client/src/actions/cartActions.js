export const cartItemsReceived = (cartItems) => {
  return {
    type: 'CART_ITEMS_RECEIVED',
    payload: cartItems
  };
};

export const cartItemsCheckout = (cartItems) => {
  return {
    type: 'CART_ITEMS_CHECKOUT',
    payload: cartItems
  };
};