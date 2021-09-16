import "./Products.css";
import { Link } from "react-router-dom";
import { NavigateNext } from "@material-ui/icons";
import ProductsList from "./ProductsList";




function Products() {
  return (
    <div className="products">
      <div className="pageTitle">
        <div className="pageTitleLeft">
          <h5>
            <Link to="/" style={{ textDecoration: "underline" }}>
              Dashboard
            </Link>{" "}
            <span>
              <NavigateNext />
            </span>{" "}
            Products
          </h5>
          <h2>Products</h2>
        </div>
        <Link to="/NewProduct">
        <div className="pageTitleRight">
          <p>New Product</p>
        </div>
        </Link>
       
      </div>

      <div className="pageBody">
        <ProductsList />
      </div>
    </div>
  );
}

export default Products;

