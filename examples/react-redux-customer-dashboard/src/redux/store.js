import { combineReducers, legacy_createStore as createStore } from 'redux';
import customersReducer from './reducers/customers-reducer';
// import productsReducer from './reducers/products-reducer';

// combine all reducers into a single collection
const rootReducer = combineReducers({
  customersReducer,
  // ordersReducer,
  // productsReducer,
});

export default createStore(rootReducer);
