import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "ramesh@example.com",
    password: "123123123",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const changeHandler = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const submitHandler = async (e) => {
    e.preventDefault();

    // make post request to '/login', get the bearer token, store in session (or local) storage
    try {
      const { data } = await axios.post(
        "http://54.206.118.54:8080/login",
        user
      );
      localStorage.setItem("name", data.name);
      localStorage.setItem("token", data.token);
      setError("");
      navigate("/customer/profile");
      // programitically navigate to '/customer/profile'
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <>
      {/* {JSON.stringify(user)} */}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            autoFocus
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={user.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="password"
            value={user.password}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {error}
      </form>
    </>
  );
};

export default LoginForm;
