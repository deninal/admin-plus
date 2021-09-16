import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Analytics from "./pages/analytics/Analytics";
import Products from "./pages/products/Products.js";
import Customers from "./pages/customers/Customers";
import Invoices from "./pages/invoices/Invoices";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SingleUser from "./pages/customers/SingleUser";
import NewUser from "./pages/customers/NewUser";
import NewProduct from "./pages/products/NewProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="sidebarContainer">
            <Sidebar />
          </div>
          <div className="bodyContainer">
            <Route path="/" exact component={Home} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/products" component={Products} />
            {/* {/* <Route path="/user/:productId" component={SingleProduct} /> */}
            <Route path="/NewProduct" component={NewProduct} />
            <Route path="/customers" component={Customers} />
            <Route path="/user/:userId" component={SingleUser} />
            <Route path="/NewUser" component={NewUser} />
            <Route path="/invoices" component={Invoices} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
