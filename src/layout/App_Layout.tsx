import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";

const App_Layout = () => {
  return (
    <main className="layout">
      <div className="">
        <Navbar />
        <div className="Container">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App_Layout;
