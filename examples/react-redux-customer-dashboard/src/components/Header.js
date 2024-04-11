import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { customers } = useSelector((store) => store.customersReducer);

  const dispatch = useDispatch(); // this hook returns a function capable of dispatching an action
  window.dispatch = dispatch;
  // in the browser console, try these commands:
  // dispatch({type: 'ADD_CUSTOMER', payload: {name: 'ravi'}})
  // dispatch({type: 'DELETE_CUSTOMER', payload: 1})
  // and check the customers count in the header

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
