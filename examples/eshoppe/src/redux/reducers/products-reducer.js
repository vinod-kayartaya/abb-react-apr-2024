import {
  FETCH_BRANDS,
  FETCH_BRANDS_ERROR,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_ERROR,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
} from '../types/products-reducer-types';

const initialState = {
  products: [],
  error: null,
  brands: [],
  categories: [],
};

export default function (state = initialState, action) {
  console.log('productsReducer called with action', action);
  // based on the action.type, return a new modified state object

  if (action.type === FETCH_PRODUCTS) {
    return { ...state, products: action.payload };
  }

  if (
    action.type === FETCH_PRODUCTS_ERROR ||
    action.type === FETCH_BRANDS_ERROR ||
    action.type === FETCH_CATEGORIES_ERROR
  ) {
    return { ...state, error: action.payload };
  }

  if (action.type === FETCH_BRANDS) {
    return { ...state, brands: action.payload };
  }

  if (action.type === FETCH_CATEGORIES) {
    return { ...state, categories: action.payload };
  }

  return state;
}
