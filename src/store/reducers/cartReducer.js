const initialState = {
   cart: [],
   cartOpen: false,
   checkedOut: false
 };
 const cartReducer = (state = initialState, action) => {
     let cart = state.cart;
     let cartOpen = state.cartOpen;
     

     switch(action.type) {
         case 'ADD_TO_CART':
         let newItem = Object.assign({}, action.payload.product);
         newItem.qty = action.payload.qty;
         let idToRemove;
         let qtyToAdd = 0; 
         let newCart = [...cart];
         newCart.forEach(item => {
            if (item.id === newItem.id) {
                 idToRemove = item.id;
                 qtyToAdd = newItem.qty + item.qty;      
                } 
            });
        if (qtyToAdd) {
            newItem.qty = qtyToAdd;
            newCart = newCart.filter(itm => itm.id !== idToRemove); 
        }
          newCart.push(newItem);

             return {
                 ...state,
                 cart: newCart,
                 cartOpen: true
             };
         case 'REMOVE_FROM_CART':
             return {
                 ...state,
                 cart: cart.filter(item => item.id != action.payload.productId)
             };
         case 'TOGGLE_CART':
             let isOpen = !cartOpen;
             return {
                 ...state,
                 cartOpen: isOpen
             };
         case 'CHECKOUT':
                let clearedCart = []
                return {
                    ...state,
                    cart: clearedCart,
                    checkedOut: true
                };    
         case 'CLOSE_CART':
             return {
                 ...state,
                 cartOpen: false
             };
        case 'RESET_CHECKED_OUT':
            return {
                ...state,
                checkedOut: false
            };
         default:
             return state;
     }
 };
 export default cartReducer;