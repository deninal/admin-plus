import { ArrowForward } from "@material-ui/icons";
import "./Card.css";
import React from "react";

function Card1({ Icon, title, amount, buttonText}) {
  return (
    <div className="card">
      <div className="cardTitle">
        <h3>{title}</h3>
      </div>

      <div className="card1Amount">
        {amount}
        <Icon className="amountIcon" />
      </div>
      <div className="cardButton">
        {buttonText}
        <ArrowForward className="buttonIcon" />
      </div>
    </div>
  );
}

export default Card1;
