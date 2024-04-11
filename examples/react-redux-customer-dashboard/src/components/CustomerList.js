import React from "react";
import CustomerCard from "./CustomerCard";
import { useSelector } from "react-redux";

const CustomerList = () => {
  const { customers } = useSelector((store) => store.customersReducer);
  return (
    <ul className="list-group">
      {customers.map((customer, index) => {
        return (
          <li key={"cutsomer-" + index} className="list-group-item">
            <CustomerCard customer={customer} />
          </li>
        );
      })}
    </ul>
  );
};

export default CustomerList;
