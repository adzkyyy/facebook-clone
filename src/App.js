import React from "react";
import "./App.css";
import Header from "./komponen/Header";
import Sidebar from "./komponen/Sidebar";
import Feed from "./komponen/Feed";
import Widget from "./komponen/Widget";
import Login from "./komponen/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
