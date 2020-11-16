export const getProduct = (productId) => {
    return {
        type: 'GET_PRODUCT',
        payload: {
            productId: productId
        }
    }
};