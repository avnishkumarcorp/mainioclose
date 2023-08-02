import React from "react";
import "./Operations.scss"
import { Outlet } from "react-router-dom";

const Operations = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
};

export default Operations;
