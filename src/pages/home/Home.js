import {
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
  Info,
  Launch,
  Work,
} from "@material-ui/icons";
import Card1 from "../../components/cards/Card1";
import "./Home.css";
import React from "react";
import Chart1 from "../../components/charts/chart1";
import { userData } from "../../components/DummyData";
import CardSimple from "../../components/cards/CardSimple";
import Card2 from "../../components/cards/Card2";
import CardUsersSm from "../../components/cards/CardUsersSm";
import CardTransactionsSm from "../../components/cards/CardTransactionsSm";
import { PieChartData } from "../../data/PieChartData";

function Home() {
  const Xmas95 = new Date();
  const options = { month: "long" };
  const n = new Intl.DateTimeFormat("en-Us", options).format(Xmas95);

  return (
    <div className="home">
      <div className="pageTitle">
        <div className="pageTitleLeft">
          <h5>Overview</h5>
          <h2>Hello, Denis</h2>
        </div>
        <div className="pageTitleRight">
          <p>+ New Transaction</p>
        </div>
      </div>

      <div className="pageBody">
        <div className="pageBodyOverview">
          <Card1
            Icon={ArrowUpward}
            title="Revenue"
            amount="$1,250,894.00"
            buttonText="See all activity"
          />
          <Card1
            Icon={ArrowUpward}
            title="Sales"
            amount="13,000"
            buttonText="See all activity"
          />
          <Card1
            Icon={ArrowDownward}
            title="Costs"
            amount="$270,500"
            buttonText="See all activity"
          />
        </div>

        <div className="chartWrapper">
          <Chart1
            title="User Analytics"
            data={userData}
            grid
            dataKey="Active Users"
          />
          <CardSimple data={PieChartData} title="Bounce Rate %" parameter={n} />
        </div>

        <div className="widgetsWrapper">
          <CardUsersSm title="New Users" />
          <CardTransactionsSm title="Last Transactions" />
        </div>

        <div className="cardWrapper">
          <Card2
            Icon={Work}
            ButtonIcon={ArrowForward}
            title="Jobs"
            cardBodyTitle="Find your dream job"
            cardButtonText="Search jobs"
          />
          <Card2
            Icon={Info}
            ButtonIcon={Launch}
            title="Help Center"
            cardBodyTitle="Need help figuring things out?"
            cardButtonText="Help Center"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
