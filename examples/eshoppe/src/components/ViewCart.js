import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddToCartButton from './AddToCartButton';
import { BASE_URL } from '../redux/actions/urls';
import { emptyCart } from '../redux/actions/cart-action-creators';

const ViewCart = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();
  if (cart.length === 0) {
    return (
      <>
        <h3 className=' text-warning'>Your cart is empty!</h3>
      </>
    );
  }

  return (
    <>
      <table className='table table bordered '>
        <thead>
          <tr>
            <th>Sl no</th>
            <th></th>
            <th>Product</th>
            <th>Quantity per unit</th>
            <th>Unit price</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={BASE_URL + item.product.picture}
                  alt={item.product.name}
                  style={{ height: '75px' }}
                />
              </td>
              <td>{item.product.description}</td>
              <td>{item.product.quantity_per_unit}</td>
              <td>{item.product.unit_price}</td>
              <td>{item.quantity}</td>
              <td>{item.product.discount}%</td>
              <td>
                {item.product.unit_price *
                  item.quantity *
                  (1 - item.product.discount / 100)}
              </td>
              <td>
                <AddToCartButton product={item.product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          if (!window.confirm('Are you sure?')) return;
          dispatch(emptyCart());
        }}
        className='btn btn-outline-danger'
      >
        Empty cart
      </button>
    </>
  );
};

export default ViewCart;
