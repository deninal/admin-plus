import React from "react";
import "./Navbar.css";
import { Settings, Notifications } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="logo">Admin+</span>
        </div>
        <div className="navRight">
          <div className="navbarIconContainer">
            <Notifications className="navbarIconItem" />
            <span className="notificationBadge">1</span>
          </div>
          <div className="navbarIconContainer">
            <Avatar className="navbarLanguage" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" />
          </div>
          <div className="navbarIconContainer">
            <Settings className="navbarIconItem" />
          </div>
          <Avatar
            alt="Username"
            src="https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/master/pass/Avatar.jpg"
          />
        </div>
      </div>
    </div>
  );
}
