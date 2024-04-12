import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/ProductList";
import ViewCart from "./components/ViewCart";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* define sub routes */}
              <Route path="" element={<ProductList />} />
              <Route path="products" element={<ProductList />} />

              <Route path="view-cart" element={<ViewCart />} />

              <Route path="login" element={<h3>Login form here</h3>} />

              <Route
                path="register"
                element={<h3>new users may register here</h3>}
              />

              <Route path="orders" element={<h3>Your orders list here</h3>} />

              <Route path="*" element={<h3>invalid page request</h3>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
