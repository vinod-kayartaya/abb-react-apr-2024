// here we simply encapsulate the logic to create an action object for a
// given scenario, based on the payload

import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  SET_EDITING_CUSTOMER,
  SET_SELECTED_CUSTOMER,
  UNSET_EDITING_CUSTOMER,
  UNSET_SELECTED_CUSTOMER,
  UPDATE_CUSTOMER,
} from '../types/action-types';

// for example, when we want to add a new customer, we supply a customer object
// and this method returns an action object, which then can be dispatched

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});

// the usage in the component, when the "Add" button is cliked,
// will probably look like:
// dispatch(addCustomer(customer))

export const deleteCustomer = (id) => ({
  type: DELETE_CUSTOMER,
  payload: id,
});

export const setSelectedCustomer = (customer) => ({
  type: SET_SELECTED_CUSTOMER,
  payload: customer,
});

export const unsetSelectedCustomer = () => ({
  type: UNSET_SELECTED_CUSTOMER,
});

export const setEditingCustomer = (customer) => ({
  type: SET_EDITING_CUSTOMER,
  payload: customer,
});

export const unsetEditingCustomer = () => ({
  type: UNSET_EDITING_CUSTOMER,
});

export const updateCustomer = (customer) => ({
  type: UPDATE_CUSTOMER,
  payload: customer,
});
