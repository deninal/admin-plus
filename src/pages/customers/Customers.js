import "./Customers.css";
import { Link } from "react-router-dom";
import { NavigateNext } from "@material-ui/icons";
import CustomersList from "./CustomersList";



function Customers() {
  return (
    <div className="customers">
      <div className="pageTitle">
        <div className="pageTitleLeft">
          <h5>
            <Link to="/" style={{ textDecoration: "underline" }}>
              Dashboard
            </Link>{" "}
            <span>
              <NavigateNext />
            </span>{" "}
            Customers
          </h5>
          <h2>Customers</h2>
        </div>
        <Link to="/NewUser">
        <div className="pageTitleRight">
          <p>+ Add Customer</p>
        </div>
        </Link>
       
      </div>

      <div className="pageBody">
        <CustomersList title="Customers List" />
      </div>
    </div>
  );
}

export default Customers;
