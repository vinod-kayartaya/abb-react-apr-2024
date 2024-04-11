import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { customers } = useSelector((store) => store.customersReducer);

  const dispatch = useDispatch(); // this hook returns a function capable of dispatching an action
  window.dispatch = dispatch;

  return (
    <>
      <div className="alert alert-primary">
        <div className="container">
          <h1>customer dashboard</h1>
        </div>
      </div>
      <div className="container">
        <p className="lead">customer count {customers.length}</p>
      </div>
    </>
  );
};

export default Header;
