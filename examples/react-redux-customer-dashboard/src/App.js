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
          <CustomerForm />
        </div>
        <div className="col-4">
          <CustomerList />
        </div>
        <div className="col-4">
          <CustomerDetails />
        </div>
      </div>
    </Provider>
  );
}

export default App;
