const initialState = {
    products: [
        {id: 1, title: 'Red and Blue Pickup Truck', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: '649.54', image: 'https://res.cloudinary.com/dncjt6b7t/image/upload/v1605479980/brio-store/DSC01462_zovpav.jpg', qty: 1},
        {id: 2, title: 'Sleek Red Minivan', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', price: '339.97', image: 'https://res.cloudinary.com/dncjt6b7t/image/upload/v1605479980/brio-store/DSC01519_k2xs5y.jpg', qty: 1},
        {id: 3, title: 'Red Truck/Van', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', price: '450.00', image: 'https://res.cloudinary.com/dncjt6b7t/image/upload/v1605479977/brio-store/DSC01510_vsmtsk.jpg', qty: 1}
    ],
    currentProduct: {}
  };
  
  const productReducer = (state = initialState, action) => {
    let products = state.products;
    switch(action.type) {
        case 'GET_PRODUCT':
            console.log("GET PRODUCT CALLED")
            const newProduct = products.find(p => p.id == action.payload.productId);
            return {
                ...state,
                currentProduct: newProduct
            };


        default:
            return state;
    }
    
  };
  
  export default productReducer;