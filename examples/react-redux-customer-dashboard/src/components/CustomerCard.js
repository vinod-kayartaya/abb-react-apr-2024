import { useDispatch } from "react-redux";
import {
  deleteCustomer,
  setEditingCustomer,
  setSelectedCustomer,
  unsetSelectedCustomer,
} from "../redux/actions/customers-action-creators";

const CustomerCard = ({ customer }) => {
  const dispatch = useDispatch();

  const deleteButtonHandler = () => {
    if (!window.confirm("Are you sure to delete this?")) return;

    dispatch(deleteCustomer(customer.id));
    dispatch(unsetSelectedCustomer(customer));
  };

  return (
    <>
      <div className="row app-customer-card">
        <div className="col-4">
          <img src={customer.picture} className="img-thumbnail" alt="" />
        </div>

        <div className="col-8">
          <h3>{customer.name}</h3>
          <div className="app-customer-card-buttons">
            <button
              onClick={() => dispatch(setSelectedCustomer(customer))}
              className="btn btn-link bi bi-search"
            ></button>
            <button
              onClick={deleteButtonHandler}
              className="btn btn-link bi bi-trash"
            ></button>
            <button
              onClick={() => dispatch(setEditingCustomer(customer))}
              className="btn btn-link bi bi-pen"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
