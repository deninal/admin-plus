import { Backup, NavigateNext } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import PriceField from "../../components/textArea/PriceField";
import TextFields from "../../components/textArea/TextField";
import TextFieldMulti from "../../components/textArea/TextFieldMulti";
import TextFieldNr from "../../components/textArea/TextFieldNr";



function NewProduct() {
  return (
    <div className="newProduct  ">
      <div className="pageTitle">
        <div className="pageTitleLeft">
          <h5>
            <Link to="/" style={{ textDecoration: "underline" }}>
              Dashboard
            </Link>{" "}
            <span>
              <NavigateNext />
            </span>{" "}
            <Link to="/Products" style={{ textDecoration: "underline" }}>
              Products
            </Link>{" "}
          </h5>
          <h2>New Product</h2>
        </div>
        <Link to="/Products">
          <div className="pageTitleRight">
            <p>Cancel</p>
          </div>
        </Link>
      </div>

      <div className="AddNew">
          <div className="card">
            <div className="cardTitle" style={{ marginBottom: 20 }}>
              <h3>Add New Product</h3>
            </div>

            <form className="UpdateForm">
              <div className="UpdateLeft">

                <TextFields className="textField" label="Product Name"/>
                <TextFieldMulti className="textField" label="Description"/>
                <TextFieldNr className="textField" label="Stock" />
                <PriceField />
 
               

                
              </div>
              <div className="UpdateRight">
                <div className="UpdateUpload">
                  <img
                  className="UpdateImg"
                    src="https://mrbutlers.co.in/wp-content/themes/mrbutler/images/placeholder.png"
                    alt=""
                  />
                  <label htmlFor="file"><Backup /></label>
                  <input type="file" id="file" style={{ display: "none"}} />
                </div>
                <button>Add Product</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default NewProduct;
