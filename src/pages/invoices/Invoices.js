import "./Invoices.css"
import { Link } from "react-router-dom";
import { NavigateNext } from "@material-ui/icons";


function Invoices() {
  return (
    <div className="invoices">
      <div className="pageTitle">
        <div className="pageTitleLeft">
          <h5>
            <Link to="/" style={{ textDecoration: "underline" }}>
              Dashboard
            </Link>{" "}
            <span>
              <NavigateNext />
            </span>{" "}
            Invoices
          </h5>
          <h2>Invoice</h2>
        </div>
        <Link to="/NewProduct">
        <div className="pageTitleRight">
          <p>Edit Invoice</p>
        </div>
        </Link>
       
      </div>

      <div className="pageBody">
       
      </div>
    </div>
  );
}

export default Invoices;

