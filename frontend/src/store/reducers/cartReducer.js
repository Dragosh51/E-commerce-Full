const initState = {
    cartItems: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'CART_ITEMS':
            return {
                ...state,
                cartItems: action.payload,
            };
        default:
            return state;
    }
};