import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import OverviewCards from "./components/OverviewCards";
import RecentActivity from "./components/RecentActivity";
import RightPanel from "./components/RightPanle";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <OverviewCards />        
        <div className="content">
          <RecentActivity />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
