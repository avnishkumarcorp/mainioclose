import React from "react";
import { Outlet } from "react-router";

const SalesMod = () => {
  return (
    <div>
        <h1>Sales</h1>
        <Outlet />
    </div>
  )
};

export default SalesMod;
