import { Avatar } from "@material-ui/core";
import React from "react";
import "../../pages/analytics/Analytics.css";

function CountryItem({ countryName, visitorNr, source }) {
  return (
    <div className="countryItem">

        <Avatar variant="square" className="countryFlag" src={source} />
        <h4>{countryName}</h4>
        <h4>{visitorNr}</h4>

    </div>
  );
}

export default CountryItem;
