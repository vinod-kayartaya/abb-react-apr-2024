import axios from 'axios';
import { BRANDS_URL, CATEGORIES_URL, PRODUCTS_URL } from './urls';
import {
  FETCH_BRANDS,
  FETCH_BRANDS_ERROR,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_ERROR,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
} from '../types/products-reducer-types';

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get(PRODUCTS_URL);
    return { type: FETCH_PRODUCTS, payload: data };
  } catch (err) {
    return {
      type: FETCH_PRODUCTS_ERROR,
      payload: err,
    };
  }
};

export const fetchProductsByBrand = async (brand) => {
  try {
    const { data } = await axios.get(PRODUCTS_URL, { params: { brand } });
    return { type: FETCH_PRODUCTS, payload: data };
  } catch (err) {
    return {
      type: FETCH_PRODUCTS_ERROR,
      payload: err,
    };
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const { data } = await axios.get(PRODUCTS_URL, { params: { category } });
    return { type: FETCH_PRODUCTS, payload: data };
  } catch (err) {
    return {
      type: FETCH_PRODUCTS_ERROR,
      payload: err,
    };
  }
};

export const fetchBrands = async () => {
  try {
    const { data } = await axios.get(BRANDS_URL);
    return { type: FETCH_BRANDS, payload: data };
  } catch (err) {
    return {
      type: FETCH_BRANDS_ERROR,
      payload: err,
    };
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(CATEGORIES_URL);
    return { type: FETCH_CATEGORIES, payload: data };
  } catch (err) {
    return {
      type: FETCH_CATEGORIES_ERROR,
      payload: err,
    };
  }
};
