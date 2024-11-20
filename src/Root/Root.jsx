import React from "react";
import Home from "../Compnents/Home/Home";
import Navbar from "../Compnents/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Compnents/Footer/Footer";

const Root = () => {
  return (
      <div>
          <Navbar/>
          <Outlet />
          <Footer/>
    </div>
  );
};

export default Root;
