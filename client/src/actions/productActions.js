// Actions for the products reducer

export const productsReceived = products => {
  return {
    type: 'PRODUCTS_RECEIVED',
    payload: products
  };
};