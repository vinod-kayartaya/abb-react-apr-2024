import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  emptyCart,
  incrementQuantity,
  removeFromCart,
} from "../redux/actions/cart-action-creators";

function AddToCartButton({ product }) {
  const { cart } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();

  const lineItem = cart.find((lineItem) => lineItem.product.id === product.id);

  const clearConfirmation = () => {
    if (
      !window.confirm(
        "Are you sure you want to remove this item from the cart?"
      )
    )
      return;
    dispatch(removeFromCart(product.id));
  };
  return (
    <>
      {lineItem ? (
        <>
          <button
            className="btn btn-primary bi bi-plus-lg me-3"
            onClick={() => dispatch(incrementQuantity(product.id))}
          ></button>
          <span className=" me-3">{lineItem.quantity}</span>
          <button
            className="btn btn-primary bi bi-dash-lg me-3"
            onClick={() => dispatch(decrementQuantity(product.id))}
          ></button>
          <button
            className="btn btn-link bi bi-cart-x me-3"
            onClick={clearConfirmation}
          ></button>
        </>
      ) : (
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}

export default AddToCartButton;
