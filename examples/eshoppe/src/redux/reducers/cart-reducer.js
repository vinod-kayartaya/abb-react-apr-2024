import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from "../types/cart-reducer-types";

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  if (action.type === ADD_TO_CART) {
    const lineItem = { product: action.payload, quantity: 1 };
    const cart = [...state.cart, lineItem];
    return { ...state, cart };
  }

  if (action.type === REMOVE_FROM_CART) {
    const cart = state.cart.filter(
      (item) => item.product.id !== action.payload
    );
    return { ...state, cart };
  }

  if (action.type === INCREMENT_QUANTITY) {
    let cart = [...state.cart];
    const foundIndex = state.cart.findIndex(
      (item) => item.product.id === action.payload
    );
    if (foundIndex > -1) cart[foundIndex].quantity++;

    return { ...state, cart };
  }

  if (action.type === DECREMENT_QUANTITY) {
    let cart = [...state.cart];
    const foundIndex = state.cart.findIndex(
      (item) => item.product.id === action.payload
    );
    if (foundIndex > -1) {
      cart[foundIndex].quantity--;
      if (!cart[foundIndex].quantity) {
        cart.splice(foundIndex, 1);
      }
    }

    return { ...state, cart };
  }

  if (action.type === EMPTY_CART) return { ...state, cart: [] };

  return state;
}
