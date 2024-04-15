import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const CustomerLayout = () => {
  return (
    <>
      <h3>Customer options</h3>
      <hr />
      <div>
        <Link className='btn btn-link' to='./login'>
          Login
        </Link>
        <Link className='btn btn-link' to='./register'>
          Register
        </Link>
        <Link className='btn btn-link' to='./profile'>
          View profile
        </Link>
        <Link className='btn btn-link' to='./order-history'>
          Order history
        </Link>
        <Link className='btn btn-link' to='./logout'>
          Logout
        </Link>
      </div>

      {/* for the child routes */}
      <Outlet />
    </>
  );
};

export default CustomerLayout;
