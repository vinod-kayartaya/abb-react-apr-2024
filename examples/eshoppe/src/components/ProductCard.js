import React from 'react';
import { BASE_URL } from '../redux/actions/urls';

const ProductCard = ({ product }) => {
  return (
    <>
      <div className='card'>
        <img
          src={BASE_URL + product.picture}
          className='card-img-top'
          alt={product.name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{product.description}</h5>
          <p className='card-text'>{product.quantity_per_unit}</p>
          <a href='#' className='btn btn-primary'>
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
