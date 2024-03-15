import axios from 'axios';
import { fetchProducts } from './productsActions';

export const addToCart = (product) => (dispatch, getState) => {
  let itemsPrice = 0;
  getState().products.products(itemsPrice = getState().products.itemsPrice);

  let products;
  getState().products.products(products = getState().products.cartItems);

  let items;
  if (products === null) {
    items = [];
  } else {
    items = products;
  }

  let sumItemsPrice = itemsPrice * 1;

  let cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((item) => {
    if (item.productID === product.productID) {
      item.count++;
      sumItemsPrice += parseFloat(product.price);
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
    sumItemsPrice += parseFloat(product.price);
  }

  let sumItems = sumItemsPrice;

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartPrice', JSON.stringify(sumItems));

  dispatch({
    type: 'CART_ITEMS',
    payload: cartItems,
  });

  dispatch({
    type: 'CART_ITEMS_PRICE',
    payload: sumItems,
  });
};

export const deleteItem = (productID) => (dispatch, getState) => {
  let products;
  getState().products.products(products = getState().products.cartItems);

  let price;
  getState().products.products(price = parseFloat(getState().products.cartItems[index].price));

  let multiple;
  getState().products.products(multiple = getState().products.cartItems[index].count);

  let total;
  getState().products.itemsPrice(total = parseFloat(getState().products.itemsPrice));

  const calcTotal = ((total * 100 - price * 100 * multiple) / 100);
  let filter = products.filter((item) => item.productID !== productID);

  localStorage.setItem('cartItems', JSON.stringify(filter));
  localStorage.setItem('cartPrice', JSON.stringify(calcTotal));

  dispatch({
    type: 'CART_ITEMS',
    payload: filter,
  });

  dispatch({
    type: 'CART_ITEMS_PRICE',
    payload: calcTotal,
  });
};