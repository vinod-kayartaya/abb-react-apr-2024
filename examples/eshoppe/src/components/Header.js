import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  return (
    <>
      <div className="alert alert-primary">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>
                <i className="bi bi-cart4 me-3"></i>e<em>Shoppe</em>
              </h1>
            </div>
            <div className="col-4">
              <div className="float-end lead">hello, shopper!</div>
              {cart?.length && (
                <div className="float-end lead me-5">
                  <Link to="/view-cart" class="btn btn-link position-relative">
                    <h3 className="bi bi-cart4"></h3>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                      <span class="visually-hidden">Cart</span>
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
