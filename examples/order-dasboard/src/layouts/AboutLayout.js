import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const AboutLayout = () => {
  return (
    <>
      <h3>About...</h3>
      <hr />
      <div>
        <Link className='btn btn-link' to='./company'>
          Company
        </Link>
        <Link className='btn btn-link' to='./clients'>
          Clients
        </Link>
        <Link className='btn btn-link' to='./staff'>
          Staff
        </Link>
      </div>

      {/* for the child routes */}
      <Outlet />
    </>
  );
};

export default AboutLayout;
