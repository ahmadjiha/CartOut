
const products = (state=[], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    // case "DELETE_PRODUCT": {     
    //   return state.filter(product => product._id !== action.payload._id);
    // }
    case "UPDATE_PRODUCT": {
      const notUpdatedProducts = state.filter(product => product._id !== action.payload._id).map(product => {
        return product//{...product};
      });
      // const stupidObj = {
      //   _id: "62a37834d95960a3989933dc",
      //   price: 30.00,
      //   quantity: 20,
      //   title: "dumb object foo"
      // }

      const newProducts = notUpdatedProducts.concat(action.payload)
      console.log('payload', action.payload)
      console.log(notUpdatedProducts)
      console.log(newProducts)
      return newProducts
      // const newState = state.map(product => {
      //   if (product._id !== action.payload._id) {
      //     return product;
      //   }
        
      //   return {...action.paylaction.payload._idoad}
      // });
    }
    // case "ADD_TO_CART": {
    //   return state.map(prod => {
    //     if (prod._id === action.payload.productId) {
    //       prod.quantity -= 1
    //     }
    //     return {...prod};
    //   })
    // }
    default: {
      return state;
    }
  }
}


export default products;