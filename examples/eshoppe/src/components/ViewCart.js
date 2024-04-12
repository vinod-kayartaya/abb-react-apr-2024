import React from "react";
import { useSelector } from "react-redux";

function ViewCart() {
  const { cart } = useSelector((store) => store.cartReducer);
  console.log("cart", cart);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Sl no</th>
          <th>Product</th>
          <th>Quantity per Unit</th>
          <th>Unit price</th>
          <th>Quantity</th>
          <th>Discount (in %)</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => {
          return (
            <tr key={"row-" + index}>
              <td>{index + 1}</td>
              <td>{item.product.name}</td>
              <td>{item.product.quantity_per_unit}</td>
              <td>{item.product.unit_price}</td>
              <td>{item.quantity}</td>
              <td>{item.product.discount}</td>
              <td>{item.product.unit_price * item.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ViewCart;
