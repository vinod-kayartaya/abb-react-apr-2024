import { combineReducers, legacy_createStore as createStore } from 'redux';
import productsReducer from './reducers/products-reducer';

const rootReducer = combineReducers({
  productsReducer,
});
// useSelector( store => store.productsReducer )

export default createStore(rootReducer);
