import { combineReducers, legacy_createStore as createStore } from "redux";
import productsReducer from "./reducers/products-reducer";
import cartReducer from "./reducers/cart-reducer";

const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
});
// useSelector( store => store.productsReducer )

export default createStore(rootReducer);
