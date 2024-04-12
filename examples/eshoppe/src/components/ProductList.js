import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchProductsByBrand,
  fetchProductsByCategory,
} from '../redux/actions/products-action-creators';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const ProductList = () => {
  const { products, error } = useSelector((store) => store.productsReducer);
  const dispatch = useDispatch();
  const location = useLocation();

  if (error !== null) {
    console.error(error);
  }

  // this effect is executed only once when the component is mounted
  useEffect(() => {
    fetchProducts().then(dispatch);
  }, []);

  // this effect is executed whenever the `location` changes
  useEffect(() => {
    const params = qs.parse(location.search);
    if ('brand' in params) {
      fetchProductsByBrand(params.brand).then(dispatch);
    } else if ('category' in params) {
      fetchProductsByCategory(params['category']).then(dispatch);
    }
  }, [location]);

  if (error !== null) {
    return (
      <p className='text-danger lead'>
        Something went wrong! Please check the console logs for more.
      </p>
    );
  }

  return (
    <>
      <div className='row'>
        {products.map((p) => (
          <div key={p.id} className='col-4'>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
