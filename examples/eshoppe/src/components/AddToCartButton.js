import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../redux/actions/cart-action-creators';

const AddToCartButton = ({ product }) => {
  const { cart } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();

  const lineItem = cart.find((lineItem) => lineItem.product.id === product.id);
  if (lineItem) {
    return (
      <>
        <button
          onClick={() => dispatch(decrementQuantity(product.id))}
          className='btn btn-outline-primary bi bi-dash-lg me-3'
        ></button>
        <span>{lineItem.quantity}</span>
        <button
          onClick={() => dispatch(incrementQuantity(product.id))}
          className='btn btn-outline-primary bi bi-plus-lg ms-3'
        ></button>
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className='btn btn-link bi bi-cart-x ms-3'
        ></button>
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => dispatch(addToCart(product))}
        className='btn btn-outline-primary'
      >
        Add 2 Cart
      </button>
    </>
  );
};

export default AddToCartButton;
