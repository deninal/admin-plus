import { Backup, NavigateNext } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

function NewUser() {
  return (
    <div className="newUser">
      <div className="pageTitle">
        <div className="pageTitleLeft">
          <h5>
            <Link to="/" style={{ textDecoration: "underline" }}>
              Dashboard
            </Link>{" "}
            <span>
              <NavigateNext />
            </span>{" "}
            <Link to="/Customers" style={{ textDecoration: "underline" }}>
              Customers
            </Link>{" "}
          </h5>
          <h2>New Customer</h2>
        </div>
        <Link to="/Customers">
          <div className="pageTitleRight">
            <p>Cancel</p>
          </div>
        </Link>
      </div>

      <div className="AddNew">
          <div className="card">
            <div className="cardTitle" style={{ marginBottom: 20 }}>
              <h3>Create New Customer</h3>
            </div>

            <form className="UpdateForm">
              <div className="UpdateLeft">
                <div className="UpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder=""
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Country</label>
                  <input
                    type="text"
                    placeholder=""
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>State/Region</label>
                  <input
                    type="text"
                    placeholder=""
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder=""
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Gender</label>
                  <div className="genderOptions">
                  <input
                    type="radio"
                    name="gender" id="male" value="male"
                   
                  />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    name="gender" id="female" value="female"
                  
                  />
                  <label for="female">Female</label>
                  <input
                    type="radio"
                    name="gender" id="other" value="other"
                    
                  />
                  <label for="other">Other</label>
                  </div>
                 
                </div>
              </div>
              <div className="UpdateRight">
                <div className="UpdateUpload">
                  <img
                  className="UpdateImg"
                    src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg?ver=6"
                    alt=""
                  />
                  <label htmlFor="file"><Backup /></label>
                  <input type="file" id="file" style={{ display: "none"}} />
                </div>
                <button>Add</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default NewUser;
