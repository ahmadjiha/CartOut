const products = (state=[], action) => {
  switch(action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload;
    }
    case 'PRODUCT_DELETED': {
      return state.filter(product => product._id !== action.payload);
    }
    case 'PRODUCT_UPDATED': {
      return state.map(product => {
        if (product._id === action.payload._id) {
          return action.payload;
        }

        return product;
      });
    }
    case 'NEW_PRODUCT_CREATED': {
      return state.concat(action.payload);
    }
    case 'PRODUCT_ADDED_TO_CART': {
      return state.map(product => {
        if (product._id === action.payload.updatedProduct._id) {
          return action.payload.updatedProduct;
        }

        return product;
      });
    }
    default: {
      return state;
    }
  }
};

export default products;