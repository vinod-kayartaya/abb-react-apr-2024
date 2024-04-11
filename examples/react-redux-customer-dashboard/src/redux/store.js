import {combineReducers, legacy_createStore as createStore} from 'redux'
import customersReducer from './reducers/customers-reducer'

// combine all reducers into a single collection
const rootReducer = combineReducers({
    customersReducer,
    // ordersReducer,
    // productsReducer
});

export default createStore(rootReducer);