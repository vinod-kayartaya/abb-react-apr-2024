import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/products-action-creators";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const { products, error } = useSelector((store) => store.productsReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("location", location);

  if (error !== null) {
    console.error(error);
  }

  // this effect is executed only once when the component is mounted
  useEffect(() => {
    //fetchProducts().then(dispatch);
  }, []);

  if (error !== null) {
    return (
      <p className="text-danger lead">
        Something went wrong! Please check the console logs for more.
      </p>
    );
  }

  return (
    <>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
