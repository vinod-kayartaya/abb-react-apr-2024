import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  SET_EDITING_CUSTOMER,
  SET_SELECTED_CUSTOMER,
  UNSET_EDITING_CUSTOMER,
  UNSET_SELECTED_CUSTOMER,
  UPDATE_CUSTOMER,
} from '../types/action-types';

const initialState = {
  customers: [
    {
      id: 1,
      name: "Vinod Kumar",
      email: "vinod@vinod.co",
      phone: "9731424784",
      gender: "Male",
      picture: "https://reactjs-movie-browser.web.app/images/vinod.jpg",
    },
    {
      id: 2,
      name: "Shyam Sundar KC",
      email: "sskc@xmpl.com",
      phone: "9731498765",
      gender: "Male",
      picture: "https://cms.patrika.com/wp-content/uploads/2019/11/19/14_1.jpg",
    },
  ],
  selectedCustomer: null,
  editingCustomer: null,
};

export default function customersReducer(state = initialState, action) {
  console.log("customersReducer called with", action.type);

  if (action.type === ADD_CUSTOMER) {
    // action.payload is assumed to be the new customer data
    action.payload.id =
      state.customers.length === 0
        ? 1
        : 1 + Math.max(...state.customers.map((c) => c.id));

    const customers = [...state.customers, action.payload];

    // return the modified state
    return { ...state, customers };
  }

  if (action.type === DELETE_CUSTOMER) {
    // action.payload is assumed to be the id of the customer to be deleted
    const remainingCustomers = state.customers.filter(
      (c) => c.id !== action.payload
    );
    // return the modified state
    return { ...state, customers: remainingCustomers };
  }

  if (action.type === SET_SELECTED_CUSTOMER) {
    // action.payload is assumed to be the selected customer
    return { ...state, selectedCustomer: action.payload };
  }

  if (action.type === UNSET_SELECTED_CUSTOMER) {
    // there is no action.payload
    return { ...state, selectedCustomer: null };
  }

  if (action.type === SET_EDITING_CUSTOMER) {
    // action.payload is assumed to be the selected customer
    return { ...state, editingCustomer: action.payload };
  }

  if (action.type == UNSET_EDITING_CUSTOMER) {
    return { ...state, editingCustomer: null };
  }

  if (action.type === UPDATE_CUSTOMER) {
    // action.payload is assumed to be the modified customer data to be updated in the store
    const _customers = [...state.customers];
    const index = _customers.findIndex((c) => c.id === action.payload.id);
    if (index === -1) return state;
    _customers[index] = { ...action.payload };
    if (state.selectedCustomer?.id === action.payload.id) {
      return {
        ...state,
        customers: _customers,
        editingCustomer: null,
        selectedCustomer: action.payload,
      };
    } else {
      return { ...state, customers: _customers, editingCustomer: null };
    }
  }

  // this return value is used by redux only for the first time.
  return state;
}
