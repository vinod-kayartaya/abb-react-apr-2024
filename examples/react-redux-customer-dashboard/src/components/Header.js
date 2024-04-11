import { useSelector } from "react-redux";

function Header() {
  useSelector(function () {
    console.log("This is from a callback supplied to the useSelector");
    console.log(
      "and this function received an entire store and other passed arguments as props ",
      arguments
    );
  });
  return (
    <>
      <div className="alert alert-primary">
        <div className="container">
          <h1>Customer Dashboard</h1>
        </div>
      </div>
      <div className="container">
        <p className="lead">Customer count 100</p>
      </div>
    </>
  );
}

export default Header;
