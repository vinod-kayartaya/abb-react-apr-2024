import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../redux/actions/customers-action-creators";
const newCustomer = {
  name: "",
  gender: "male",
  picture: "",
  email: "",
  phone: "",
  city: "Bangalore",
};
const CustomerForm = () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState(newCustomer);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();

    let _errors = {},
      len = customer?.name?.trim()?.length;
    if (len == 0) _errors.name = "Name is required";
    else if (len > 1 && len < 3) _errors.name = "at least 3 letters required";

    len = customer?.email?.trim()?.length;
    if (customer?.email?.trim()?.length == 0)
      _errors.email = "Email is required";

    len = customer?.phone?.trim()?.length;
    if (customer?.phone?.trim()?.length == 0)
      _errors.phone = "Phone number is required";

    setErrors(_errors);
    if (Object.keys(_errors)?.length) return;

    dispatch(addCustomer(customer));

    setCustomer(newCustomer);
  };

  const changeHandler = ({ target: { name, value } }) => {
    setCustomer({ ...customer, [name]: value });
  };
  return (
    <>
      <h3>Customer Form</h3>
      {JSON.stringify(errors)}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            placeholder="Enter name"
            value={customer?.name}
            onChange={changeHandler}
            required={true}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label me-3">
            Gender
          </label>
          <input
            type="radio"
            name="gender"
            id="maleRadio"
            className="me-3"
            onChange={changeHandler}
            value="male"
            checked={customer?.gender === "male"}
          />
          <label htmlFor="maleRadio" className="form-label me-3">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            id="femaleRadio"
            className="me-3"
            onChange={changeHandler}
            value="female"
            checked={customer?.gender === "female"}
          />
          <label htmlFor="femaleRadio" className="form-label me-3">
            Female
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter Email"
            name="email"
            value={customer?.email}
            onChange={changeHandler}
            required={true}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter Phone number"
            value={customer?.phone}
            onChange={changeHandler}
            required={true}
            max={10}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="cityInput" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="cityInput"
            name="city"
            placeholder="Enter City"
            value={customer?.city}
            onChange={changeHandler}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CustomerForm;
