import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";

const App_Layout = () => {
  return (
    <main>
      <div className="Container">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default App_Layout;
