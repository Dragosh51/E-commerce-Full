import axios from 'axios';

export const FETCHING_PRODUCTS = 'FETCHING_PRODUCTS';
export const FETCHED_PRODUCTS = 'FETCH_PRODUCTS';
export const ERROR_FETCH = 'ERROR_FETCH';

export const fetchProducts = () => (dispatch) => {
    dispatch({ type: 'FETCHING_PRODUCTS' });
    axios
      .get(`http://localhost:5343/products`)
      .then((products) => {
        dispatch({
          type: 'FETCHED_PRODUCTS',
          payload: products.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ERROR_FETCH',
          payload: err,
        });
      });
  };