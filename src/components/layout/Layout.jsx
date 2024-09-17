import React from "react";
import Header from "../header/Header";
// import Products from "../product/Products";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
