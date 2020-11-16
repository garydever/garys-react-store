export const addToCart = (product, qty) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            qty
        }
    }
};
export const removeFromCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId: productId
        }
    }
};
export const updateCartQuantity = (productId, quantity) => {
  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
  }
};

export const toggleCart = () => {
    return {
        type: 'TOGGLE_CART'
    }
}

export const closeCart = () => {
    return {
        type: 'CLOSE_CART'
    }
}

export const checkOut = () => {
    return {
        type: 'CHECKOUT'
    }
}

export const resetCheckedOut = () => {
    return {
        type: 'RESET_CHECKED_OUT'
    }
}

