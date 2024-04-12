import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from "../types/cart-reducer-types";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});
