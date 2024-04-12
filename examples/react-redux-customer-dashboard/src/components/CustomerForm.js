import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCustomer,
  unsetEditingCustomer,
  updateCustomer,
} from '../redux/actions/customers-action-creators';

const defaultCustomerData = {
  name: '',
  city: 'Bangalore',
  gender: 'Male',
  picture:
    'https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-19.jpg',
  email: '',
  phone: '',
};

const CustomerForm = () => {
  const dispatch = useDispatch();
  const { editingCustomer } = useSelector((store) => store.customersReducer);

  const [customer, setCustomer] = useState({ ...defaultCustomerData });

  // state for errors
  const [errors, setErrors] = useState({});

  // an effect to be executed whenever `editingCustomer` changes
  useEffect(() => {
    if (editingCustomer !== null) {
      setCustomer({ ...editingCustomer });
    }
  }, [editingCustomer]);

  const changeHandler = ({ target: { name, value } }) => {
    setCustomer({ ...customer, [name]: value });
  };

  const validate = () => {
    let _errors = {};
    let len = customer.name.trim().length;
    if (len === 0) {
      _errors.name = 'name is required';
    } else if (len > 0 && len < 3) {
      _errors.name = 'at least 3 letters required';
    }

    len = customer.email.trim().length;
    if (len === 0) {
      _errors.email = 'email is required';
    }

    len = customer.phone.trim().length;
    if (len === 0) {
      _errors.phone = 'phone is required';
    }

    return _errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // validate the customer and if there are errors, then update the errors state variable
    let _errors = validate();

    // check if there are any errors
    if (Object.keys(_errors).length > 0) {
      // there is at least one error
      setErrors(_errors);
      return;
    }

    if (customer.id) {
      dispatch(updateCustomer(customer));
    } else {
      dispatch(addCustomer(customer));
    }

    // clear the text fields (by resetting the state `customer`)
    setCustomer({ ...defaultCustomerData });
  };

  return (
    <>
      <h3>Customer form</h3>

      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='nameInput' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='nameInput'
            name='name'
            value={customer.name}
            onChange={changeHandler}
          />
          {errors.name && <small className='text-danger'>{errors.name}</small>}
        </div>
        <div className='mb-3'>
          <label className='form-label me-3'>Gender</label>
          <input
            type='radio'
            className='check-input me-3'
            id='genderMaleInput'
            name='gender'
            value='Male'
            onChange={changeHandler}
            checked={customer.gender === 'Male'}
          />
          <label htmlFor='genderMaleInput' className='check-label me-3'>
            Male
          </label>
          <input
            type='radio'
            className='check-input me-3'
            id='genderFemaleInput'
            name='gender'
            value='Female'
            onChange={changeHandler}
            checked={customer.gender === 'Female'}
          />
          <label htmlFor='genderFemaleInput' className='check-label me-3'>
            Female
          </label>
        </div>
        <div className='mb-3'>
          <label htmlFor='emailInput' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='emailInput'
            name='email'
            value={customer.email}
            onChange={changeHandler}
          />
          {errors.email && (
            <small className='text-danger'>{errors.email}</small>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='phoneInput' className='form-label'>
            Phone number
          </label>
          <input
            type='tel'
            className='form-control'
            id='phoneInput'
            name='phone'
            value={customer.phone}
            onChange={changeHandler}
          />
          {errors.phone && (
            <small className='text-danger'>{errors.phone}</small>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='cityInput' className='form-label'>
            City
          </label>
          <input
            type='text'
            className='form-control'
            id='cityInput'
            name='city'
            value={customer.city}
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='pictureInput' className='form-label'>
            Picture
          </label>
          <input
            type='text'
            className='form-control'
            id='pictureInput'
            name='picture'
            value={customer.picture}
            onChange={changeHandler}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>

        {editingCustomer !== null && (
          <button
            onClick={() => {
              dispatch(unsetEditingCustomer());
              setCustomer({ ...defaultCustomerData });
            }}
            className='btn btn-link'
          >
            Cancel editing
          </button>
        )}
      </form>
    </>
  );
};

export default CustomerForm;
