import React from "react";
import "./Accounts.scss"
import { Outlet } from "react-router-dom";

const Accounts = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
};

export default Accounts;
