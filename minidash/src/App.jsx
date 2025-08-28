import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import QuickAccess from "./components/QuickAccess";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="app">
      <div className="container">
        <SearchBar />
        <h2 className="title">Quick Access</h2>
        <QuickAccess />
        <Preview />
      </div>
    </div>
  );
}

export default App;
