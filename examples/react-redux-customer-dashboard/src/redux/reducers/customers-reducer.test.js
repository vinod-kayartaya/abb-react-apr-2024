import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  SET_EDITING_CUSTOMER,
  SET_SELECTED_CUSTOMER,
  UNSET_EDITING_CUSTOMER,
  UNSET_SELECTED_CUSTOMER,
  UPDATE_CUSTOMER,
} from '../types/action-types';
import customersReducer from './customers-reducer';

describe('customer-reducer tests', () => {
  // should add new customer to the state with existing customers
  it('should add new customer to the state with existing customers', () => {
    const initialState = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
      ],
      selectedCustomer: null,
      editingCustomer: null,
    };
    const action = {
      type: ADD_CUSTOMER,
      payload: {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
      },
    };

    const finalState = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'janedoe@example.com',
        },
      ],
      selectedCustomer: null,
      editingCustomer: null,
    };
    const result = customersReducer(initialState, action);
    expect(result).toEqual(finalState);
  });

  // should return the initial state when called with an undefined state and an unknown action type
  it('should return the initial state when called with an undefined state and an unknown action type', () => {
    const initialState = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: null,
    };
    const action = { type: 'UNKNOWN_ACTION' };
    const result = customersReducer(undefined, action);
    expect(result).toEqual(initialState);
  });

  // should return the same state when called with an unknown action type
  it('should return the same state when called with an unknown action type', () => {
    const state = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: null,
    };
    const action = { type: 'UNKNOWN_ACTION' };
    const result = customersReducer(state, action);
    expect(result).toEqual(state);
  });

  // should add a new customer to the state when receiving an ADD_CUSTOMER action
  it('should add a new customer to the state when receiving an ADD_CUSTOMER action', () => {
    const state = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const action = {
      type: ADD_CUSTOMER,
      payload: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };

    const expectedState = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
      ],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  // should delete a customer from the state when receiving a DELETE_CUSTOMER action
  it('should delete a customer from the state when receiving a DELETE_CUSTOMER action', () => {
    const state = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const action = {
      type: DELETE_CUSTOMER,
      payload: 1,
    };

    const expectedState = {
      customers: [
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  // should set the selectedCustomer property to the payload when receiving a SET_SELECTED_CUSTOMER action
  it('should set the selectedCustomer property to the payload when receiving a SET_SELECTED_CUSTOMER action', () => {
    const state = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const action = {
      type: SET_SELECTED_CUSTOMER,
      payload: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };

    const expectedState = {
      customers: [],
      selectedCustomer: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      editingCustomer: null,
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  // should set the selectedCustomer property to null when receiving an UNSET_SELECTED_CUSTOMER action
  it('should set the selectedCustomer property to null when receiving an UNSET_SELECTED_CUSTOMER action', () => {
    const state = {
      customers: [],
      selectedCustomer: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      editingCustomer: null,
    };

    const action = {
      type: UNSET_SELECTED_CUSTOMER,
    };

    const expectedState = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  // should set the editingCustomer property to the payload when receiving a SET_EDITING_CUSTOMER action
  it('should set the editingCustomer property to the payload when receiving a SET_EDITING_CUSTOMER action', () => {
    const state = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const action = {
      type: SET_EDITING_CUSTOMER,
      payload: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };

    const expectedState = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });
  // should set the editingCustomer property to null when receiving an UNSET_EDITING_CUSTOMER action
  it('should set the editingCustomer property to null when receiving an UNSET_EDITING_CUSTOMER action', () => {
    const state = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    };

    const action = {
      type: UNSET_EDITING_CUSTOMER,
    };

    const expectedState = {
      customers: [],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  // should update the customer in the state when receiving an UPDATE_CUSTOMER action
  it('should update the customer in the state when receiving an UPDATE_CUSTOMER action', () => {
    const state = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const action = {
      type: UPDATE_CUSTOMER,
      payload: {
        id: 1,
        name: 'John Doe',
        email: 'newemail@example.com',
      },
    };

    const expectedState = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'newemail@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      editingCustomer: null,
      selectedCustomer: null,
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  // should update the customer in the state when receiving an UPDATE_CUSTOMER action
  it('should update the selectedCustomer in the state when receiving an UPDATE_CUSTOMER action', () => {
    const state = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      selectedCustomer: {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      editingCustomer: null,
    };

    const action = {
      type: UPDATE_CUSTOMER,
      payload: {
        id: 1,
        name: 'John Doe',
        email: 'newemail@example.com',
      },
    };

    const expectedState = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'newemail@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      editingCustomer: null,
      selectedCustomer: {
        id: 1,
        name: 'John Doe',
        email: 'newemail@example.com',
      },
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });

  // should not update a non existing customer in the state when receiving an UPDATE_CUSTOMER action
  it('should not update a non existing customer in the state when receiving an UPDATE_CUSTOMER action', () => {
    const state = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      selectedCustomer: null,
      editingCustomer: null,
    };

    const action = {
      type: UPDATE_CUSTOMER,
      payload: {
        id: 100,
        name: 'John Doe',
        email: 'newemail@example.com',
      },
    };

    const expectedState = {
      customers: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
        },
      ],
      editingCustomer: null,
      selectedCustomer: null,
    };

    const result = customersReducer(state, action);

    expect(result).toEqual(expectedState);
  });
});
