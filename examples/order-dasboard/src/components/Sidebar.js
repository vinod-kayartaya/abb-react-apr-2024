import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div>
        <Link className='btn btn-link' to='/'>
          Home
        </Link>
      </div>
      
      <div>
        <Link className='btn btn-link' to='/customers'>
          Customers
        </Link>
      </div>

      <div>
        <Link className='btn btn-link' to='/about'>
          About...
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
