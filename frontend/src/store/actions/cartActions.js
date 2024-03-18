import axios from 'axios';

export const addItem = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  // let cartUpdate
  // const check = cartItems.map(item => {
  //   if (item.productID === product.productID) {
  //     const updateQuantity = {
  //       ...item,
  //       quantity: item.quantity +1,
  //     }
  //   } else {

  //   }
  // });
  const cartUpdate = [...cartItems, product]
  console.log(cartUpdate)
  dispatch({
    type: 'CART_ITEMS',
    payload: cartUpdate,
  });
};

export const deleteItem = (productID) => (dispatch, getState) => {
 
};