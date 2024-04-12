import React from 'react';

const Header = () => {
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
