import classNames from "classnames";
import React from "react";
import TransactionItem from "../transactions/TransactionItem";

function CardTransactionsSm({ title }) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  var liClasses = classNames({
    transactionItem: false,
    categoryNames: true,
  });

  const completed = {
    backgroundColor: "green",
  };
  const pending = {
    backgroundColor: "orange",
  };
  const canceled = {
    backgroundColor: "red",
  };

  return (
    <div className="card">
      <div className="cardTitle">
        <h3>{title}</h3>
      </div>
      <div className="cardBody">
        <div className={liClasses}>
          <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <h4>Nr.</h4>
          <h4>Customer</h4>
          <h4>Amount</h4>
          <h4>Status</h4>
        </div>
        <TransactionItem
          style={completed}
          number="T-105"
          customer="Denis Nallbati"
          amount="$760.00"
          status="Completed"
        />
        <TransactionItem
          style={pending}
          number="T-104"
          customer="Lee A. Sun"
          amount="$350.00"
          status="Pending"
        />
        <TransactionItem
          style={canceled}
          number="T-103"
          customer="Augusta Wind"
          amount="$50.00"
          status="Canceled"
        />
        <TransactionItem
          style={completed}
          number="T-102"
          customer="Allie Grater"
          amount="$320.00"
          status="Completed"
        />
        <TransactionItem
          style={pending}
          number="T-101"
          customer="Jonathan Smith"
          amount="$540.00"
          status="Pending"
        />
      </div>
    </div>
  );
}

export default CardTransactionsSm;
