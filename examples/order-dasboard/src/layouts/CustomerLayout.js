import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const CustomerLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <>
      <h3>Customer options</h3>
      <hr />
      <div>
        {!token && (
          <>
            <Link className="btn btn-link" to="./login">
              Login
            </Link>
            <Link className="btn btn-link" to="./register">
              Register
            </Link>
          </>
        )}
        <Link className="btn btn-link" to="./profile">
          View profile
        </Link>
        <Link className="btn btn-link" to="./order-history">
          Order history
        </Link>
        <button
          className="btn btn-link"
          onClick={(e) => {
            localStorage.clear();
            navigate("/customers/login");
          }}
        >
          Logout
        </button>
      </div>

      {/* for the child routes */}
      <Outlet />
    </>
  );
};

export default CustomerLayout;
