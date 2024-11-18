import React from "react";
import Home from "../Compnents/Home/Home";
import Navbar from "../Compnents/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
      <div>
          <Navbar/>
          <Outlet />
          
    </div>
  );
};

export default Root;
