import React from 'react';
import { useSelector } from 'react-redux';
import CustomerCard from './CustomerCard';

const CustomerList = () => {
  const { customers, selectedCustomer } = useSelector(
    (store) => store.customersReducer
  );

  return (
    <>
      <ul className='list-group'>
        {customers.map((c) => (
          <li
            className={
              selectedCustomer != null && c.id === selectedCustomer.id
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={c.id}
          >
            <CustomerCard customer={c} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CustomerList;
