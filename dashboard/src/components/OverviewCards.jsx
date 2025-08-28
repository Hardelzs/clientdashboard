import React from "react";
import "../css/OverviewCards.css";
import { FaWallet, FaClock, FaCheckCircle } from "react-icons/fa";

const OverviewCards = () => {
  const data = [
    { title: "Account Balance", amount: "$30,659.45", icon: <FaWallet /> },
    { title: "Pending", amount: "$19,500.45", icon: <FaClock /> },
    { title: "Processed", amount: "$20,659", icon: <FaCheckCircle /> },
  ];

  return (
    <div>
      <h1 className="view">Overview</h1>
      <div className="overview">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <span className="card-icon">{item.icon}</span>
              <h4>{item.title}</h4>
            </div>
            <p>{item.amount}</p>
            <a href="/">View all</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCards;
