import { ADD_CUSTOMER, DELETE_CUSTOMER } from "../types/action-types";

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

  if (action.type == DELETE_CUSTOMER) {
    // action.payload is assumed to be the id of the customer to be deleted
    const remainingCustomers = state.customers.filter(
      (c) => c.id !== action.payload
    );
    // return the modified state
    return { ...state, customers: remainingCustomers };
  }

  return state;
}
