// Actions for the products reducer

export const productsReceived = products => {
  return {
    type: 'PRODUCTS_RECEIVED',
    payload: products
  };
};

export const productDeleted = productId => {
  return {
    type: 'PRODUCT_DELETED',
    payload: productId
  };
};

export const productUpdated = updatedProduct => {
  return {
    type: 'PRODUCT_UPDATED',
    payload: updatedProduct
  };
};

export const newProductCreated = newProduct => {
  return {
    type: 'NEW_PRODUCT_CREATED',
    payload: newProduct
  };
};