import {
  AccountCircle,
  Assessment,
  Feedback,
  Mail,
  Message,
  People,
  PieChart,
  Receipt,
  Report,
  ShoppingBasket,
} from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import "./SidebarItem";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h5 className="sidebarTitle">GENERAL</h5>
          <ul className="sidebarList">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <SidebarItem Icon={Assessment} title="Overview" />
            </NavLink>
            <Link to="/analytics" style={{ textDecoration: "none" }}>
              <SidebarItem Icon={PieChart} title="Analytics" />
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <SidebarItem Icon={ShoppingBasket} title="Products" />
            </Link>
            <Link to="/customers" style={{ textDecoration: "none" }}>
              <SidebarItem Icon={People} title="Customers" />
            </Link>
            <Link to="/invoices" style={{ textDecoration: "none" }}>
              <SidebarItem Icon={Receipt} title="Invoices" />
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h5 className="sidebarTitle">COMMUNICATION</h5>
          <ul className="sidebarList">
            <SidebarItem Icon={Mail} title="Mail" />
            <SidebarItem Icon={Message} title="Messages" />
            <SidebarItem Icon={Feedback} title="Feedback" />
          </ul>
        </div>

        <div className="sidebarMenu">
          <h5 className="sidebarTitle">MANAGEMENT</h5>
          <ul className="sidebarList">
            <SidebarItem Icon={AccountCircle} title="Account" />
            <SidebarItem Icon={Report} title="Reports" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
