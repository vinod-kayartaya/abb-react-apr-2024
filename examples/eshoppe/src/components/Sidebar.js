import React, { useEffect } from "react";
import {
  fetchBrands,
  fetchCategories,
  fetchProducts,
} from "../redux/actions/products-action-creators";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { brands, categories } = useSelector((store) => store.productsReducer);

  useEffect(() => {
    fetchBrands().then(dispatch); // .then(action => dispatch(action))
    fetchCategories().then(dispatch);
  }, []);

  return (
    <>
      <ul className="list-group mb-5">
        <Link
          onClick={() => fetchProducts().then(dispatch)}
          className="list-group-item text-start"
        >
          All Products
        </Link>
      </ul>

      <h3 className="lead">brands</h3>
      <ul className="list-group mb-5">
        {brands.map((b) => (
          <Link key={b} to={"/products?brand=" + b} className="list-group-item">
            {b}
          </Link>
        ))}
      </ul>

      <h3 className="lead">categories</h3>
      <ul className="list-group mb-5">
        {categories.map((c) => (
          <Link
            key={c}
            to={{ pathname: "/products", search: "?category=" + c }}
            className="list-group-item"
          >
            {c}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
