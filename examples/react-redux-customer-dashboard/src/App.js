import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="row">
        <div className="col-4">
          <div className="container">
            <CustomerForm />
          </div>
        </div>
        <div className="col-4">
          <div className="container">
            <CustomerList />
          </div>
        </div>
        <div className="col-4">
          <div className="container">
            <CustomerDetails />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
