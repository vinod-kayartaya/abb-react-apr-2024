import React from "react";

const CustomerCard = ({ customer }) => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <img
            src={customer.picture}
            className="img-thumbnail"
            alt={customer.name + "-img"}
          />
        </div>
        <div className="col-8">
          <h3>{customer.name}</h3>
          <div>
            <button className="btn btn-link bi bi-search"></button>
            <button className="btn btn-link bi bi-trash"></button>
            <button className="btn btn-link bi bi-pen"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
