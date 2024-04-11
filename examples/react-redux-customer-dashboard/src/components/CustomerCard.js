import React from "react";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../redux/actions/customers-action-creators";

const CustomerCard = ({ customer }) => {
  const dispatch = useDispatch();

  const deleteButtonHandler = () => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    dispatch(deleteCustomer(customer.id));
  };
  return (
    <>
      <div className="row app-customer-card">
        <div className="col-4">
          <img
            src={customer.picture}
            className="img-thumbnail"
            alt={customer.name + "-img"}
          />
        </div>
        <div className="col-8">
          <h3>{customer.name}</h3>
          <div className="app-customer-card-buttons">
            <button className="btn btn-link bi bi-search"></button>
            <button
              className="btn btn-link bi bi-trash"
              onClick={deleteButtonHandler}
            ></button>
            <button className="btn btn-link bi bi-pen"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
