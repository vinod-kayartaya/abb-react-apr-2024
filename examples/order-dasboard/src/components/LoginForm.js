import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import withBorder from '../hoc/withBorder';

const LoginForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const changeHandler = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const submitHandler = async (e) => {
    e.preventDefault();

    // make a POST request to '/login', get the token, store in session (or local) storage

    try {
      const { data } = await axios.post(
        'http://54.206.118.54:8080/login',
        user
      );
      localStorage.setItem('name', data.name);
      localStorage.setItem('token', data.token);
      setUser({ email: '', password: '' });
      setError('');
      // programatically navigate to '/customers/profile'
      navigate('/customers/profile');
    } catch (err) {
      setError(err.response?.data);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='emailInput' className='form-label'>
            Email address
          </label>
          <input
            autoFocus
            type='email'
            className='form-control'
            id='emailInput'
            name='email'
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='passwordInput' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='passwordInput'
            name='password'
            value={user.password}
            onChange={changeHandler}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>

      {error && <em className='text-danger'>{error}</em>}
    </>
  );
};

// export default LoginForm;
export default withBorder(LoginForm, { color: 'red', width: '3px' });
