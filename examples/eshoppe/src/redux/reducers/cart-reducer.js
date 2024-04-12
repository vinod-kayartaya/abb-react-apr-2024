import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  EMPTY_CART,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from '../types/cart-reducer-types';

const initialState = {
  cart: [], // an array of line-items (a product + a quantity)
};

export default function cartReducer(state = initialState, action) {
  if (action.type === ADD_TO_CART) {
    // action.payload is a product
    const lineItem = { product: action.payload, quantity: 1 };
    const cart = [...state.cart, lineItem];
    return { ...state, cart };
  }

  if (action.type === REMOVE_FROM_CART) {
    // expect the action.payload to be the product id
    let productId = action.payload;
    let cart = [...state.cart];
    cart = cart.filter((li) => li.product.id !== productId);
    return { ...state, cart };
  }

  if (action.type === EMPTY_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === INCREMENT_QUANTITY) {
    // expect the action.payload to be the product id
    let productId = action.payload;
    let cart = [...state.cart];
    let item = cart.find((li) => li.product.id === productId);
    if (!item) return { ...state };
    item.quantity++;
    return { ...state, cart };
  }

  if (action.type === DECREMENT_QUANTITY) {
    // expect the action.payload to be the product id
    let productId = action.payload;
    let cart = [...state.cart];
    let index = cart.findIndex((li) => li.product.id === productId);
    if (index === -1) return { ...state };
    let item = cart[index];
    item.quantity--;

    if (item.quantity === 0) {
      cart.splice(index, 1); // deletes 1 element at the given index; remove from the cart
    }
    return { ...state, cart };
  }

  return state;
}

// cart = [
//    {product: {id: 1, ...}, quantity: 1},
//    {product: {id: 7, ...}, quantity: 3},
//    {product: {id: 3, ...}, quantity: 2},
// ]
