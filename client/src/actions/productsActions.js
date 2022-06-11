export const productsReceived = (products) => {
    return {
        type: "PRODUCTS_RECEIVED",
        payload: products
    };
};

export const deleteProductFromStore = (product_id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: {
            _id: product_id
        }
    };
};

export const updateProductInStore = (updatedProduct) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: updatedProduct
  }
}