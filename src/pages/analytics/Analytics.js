import {
  BarChart,
  ExpandMore,
  NavigateNext,
  Timeline,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Card1 from "../../components/cards/Card1";
import Chart2 from "../../components/charts/Chart2";
import "./Analytics.css";
import { analyticsData } from "../../data/AnalyticsData";
import { countriesMapData } from "../../data/CountriesMapData";
import CardCountries from "../../components/cards/CardCountries";
import CardCountriesMap from "../../components/cards/CardCountriesMap";


function Analytics() {
  return (
    <div className="analytics">
      <div className="pageTitle">
        <div className="pageTitleLeft">
          <h5>
            <Link to="/" style={{ textDecoration: "underline" }}>
              Dashboard
            </Link>{" "}
            <span>
              <NavigateNext />
            </span>{" "}
            Analytics
          </h5>
          <h2>Analytics</h2>
        </div>
        <div className="pageTitleRight">
          <p>Last Year </p>
          <ExpandMore />
        </div>
      </div>

      <div className="pageBody">
        <div className="analyticsOverview">
          <Card1
            Icon={Timeline}
            title="Impressions"
            amount="1.2M"
            buttonText="See all visits"
          />
          <Card1
            Icon={Timeline}
            title="Spent"
            amount="$21.3K"
            buttonText="See all details"
          />
          <Card1
            Icon={Timeline}
            title="Engagements"
            amount="86.3K"
            buttonText="Compare to last month"
          />
          <Card1
            Icon={BarChart}
            title="Conversions"
            amount="122.7K"
            buttonText="Compare to last month"
          />
        </div>

        <div className="analyticsChart">
          <Chart2 data={analyticsData} title="Traffic Sources" />
        </div>

        <div className="analyticsCountries">
          <CardCountriesMap title="Visitors Map" data={countriesMapData} />
          <CardCountries title="Country Visitors"/>
        </div>


      </div>
    </div>
  );
}

export default Analytics;

