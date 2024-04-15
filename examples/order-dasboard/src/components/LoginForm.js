import React, { useState } from 'react';

const LoginForm = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const changeHandler = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  return (
    <>
      {JSON.stringify(user)}
      <form>
        <div className='mb-3'>
          <label for='emailInput' className='form-label'>
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
          <label for='passwordInput' className='form-label'>
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
    </>
  );
};

export default LoginForm;
