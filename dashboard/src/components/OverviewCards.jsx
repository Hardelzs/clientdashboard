import React from "react";
import "../css/OverviewCards.css";

const OverviewCards = () => {
  const data = [
    { title: "Account Balance", amount: "$30,659.45" },
    { title: "Pending", amount: "$19,500.45" },
    { title: "Processed", amount: "$20,659" },
  ];

  return (
    <div className="overview">
      {data.map((item, index) => (
        <div key={index} className="card">
          <h4>{item.title}</h4>
          <p>{item.amount}</p>
          <a href="/">View all</a>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
