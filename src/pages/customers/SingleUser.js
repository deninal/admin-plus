import { Backup, NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Customers.css";
import "../../components/cards/Card.css";
import { Avatar } from "@material-ui/core";

function SingleUser() {

 
  const userDetails = {
    name: "Denis Nallbati",
    email: "example@email.com",
    phone: "+1 748 327 439",
    country: "USA",
    state: "New York",
    address: "47 W 13th St",
  };
  return (
    <div className="singleUser">
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
            </Link>
            <span>
              <NavigateNext />
            </span>{" "}
            User
          </h5>
          <h2>Customer Edit</h2>
        </div>
        
      </div>

      <div className="singleUserContainer">
        <div className="Details">
          <div className="card">
            <div className="cardTitle" style={{ marginBottom: 20 }}>
              <h3>Profile Details</h3>
            </div>
            <div className="userName">
              <Avatar className="userNameAvatar" />
              {userDetails.name}
            </div>
            <div className="DetailItem">
              <h5>Email</h5>
              <p>{userDetails.email}</p>
            </div>
            <div className="DetailItem">
              <h5>Phone</h5>
              <p>{userDetails.phone}</p>
            </div>
            <div className="DetailItem">
              <h5>Country</h5>
              <p>{userDetails.country}</p>
            </div>
            <div className="DetailItem">
              <h5>State/Region</h5>
              <p>{userDetails.state}</p>
            </div>
            <div className="DetailItem">
              <h5>Address</h5>
              <p>{userDetails.address}</p>
            </div>
          </div>
        </div>

        <div className="Update">
          <div className="card">
            <div className="cardTitle" style={{ marginBottom: 20 }}>
              <h3>Update Details</h3>
            </div>

            <form className="UpdateForm">
              <div className="UpdateLeft">
                <div className="UpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder={userDetails.name}
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={userDetails.email}
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={userDetails.phone}
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Country</label>
                  <input
                    type="text"
                    placeholder={userDetails.country}
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>State/Region</label>
                  <input
                    type="text"
                    placeholder={userDetails.state}
                    className="UpdateInput"
                  />
                </div>
                <div className="UpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={userDetails.address}
                    className="UpdateInput"
                  />
                </div>
              </div>
              <div className="UpdateRight">
                <div className="UpdateUpload">
                  <img
                  className="userUpdateImg"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <label htmlFor="file"><Backup /></label>
                  <input type="file" id="file" style={{ display: "none"}} />
                </div>
                <button>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
