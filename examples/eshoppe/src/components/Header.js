import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  let { cart } = useSelector((store) => store.cartReducer);

  return (
    <>
      <div className='alert alert-primary'>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <h1>
                <i className='bi bi-cart4 me-3'></i>e<em>Shoppe</em>
              </h1>
            </div>
            <div className='col-4'>
              <div className='float-end lead'>hello, shopper!</div>
              <div className='float-end lead me-5'>
                {cart.length > 0 && (
                  <Link
                    to='/view-cart'
                    className='btn btn-link position-relative'
                  >
                    <h3 className='bi bi-cart4'></h3>
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                      {cart.length}
                      <span className='visually-hidden'>unread messages</span>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
