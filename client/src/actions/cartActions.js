export const cartItemsReceived = (cart) => {
    return {
        type: "CART_ITEMS_RECEIVED",
        payload: cart
    }
}

export const checkoutCart = () => {
    return {
        type: "CHECKOUT_CART",
    }
}

export const addToCart = (newCartItem, productId) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            newCartItem,
            productId: productId
        }
    }
}