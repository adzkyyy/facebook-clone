import React from "react";
import "./App.css";
import Header from "./komponen/Header";
import Sidebar from "./komponen/Sidebar";
import Feed from "./komponen/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
