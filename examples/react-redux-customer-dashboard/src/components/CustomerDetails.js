import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCustomer,
  setEditingCustomer,
  unsetSelectedCustomer,
} from '../redux/actions/customers-action-creators';

const CustomerDetails = () => {
  const { selectedCustomer } = useSelector((store) => store.customersReducer);

  const dispatch = useDispatch();

  const deleteButtonHandler = () => {
    if (!window.confirm('Are you sure to delete this customer?')) return;

    dispatch(deleteCustomer(selectedCustomer.id));
    dispatch(unsetSelectedCustomer());
  };
  return (
    <>
      {selectedCustomer == null && (
        <p className='lead'>
          Hover over a customer on the left side and click on the magnifier icon
          to view full details
        </p>
      )}

      {selectedCustomer != null && (
        <>
          <img
            className='img-thumbnail'
            src={selectedCustomer.picture}
            alt={selectedCustomer.name}
          />
          <table className='table'>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{selectedCustomer.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{selectedCustomer.name}</td>
              </tr>
              <tr>
                <td>Email address</td>
                <td>{selectedCustomer.email}</td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td>{selectedCustomer.phone}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{selectedCustomer.gender}</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={() => dispatch(unsetSelectedCustomer())}
            className='btn btn-link'
          >
            Cancel
          </button>
          <button
            onClick={() => dispatch(setEditingCustomer(selectedCustomer))}
            className='btn btn-link'
          >
            Edit
          </button>

          <button
            onClick={deleteButtonHandler}
            className='btn btn-link text-danger'
          >
            Delete
          </button>
        </>
      )}
    </>
  );
};

export default CustomerDetails;
