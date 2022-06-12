export const cartItemsReceived = (cartItems) => {
  return {
    type: 'CART_ITEMS_RECEIVED',
    payload: cartItems
  };
};