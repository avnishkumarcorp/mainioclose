import React from "react";
import "./ActivityMasterModule.scss"
import { Outlet } from "react-router-dom";

const ActivityMasterModule = () => {
    return (
        <div>
          <Outlet />
        </div>
      )
};

export default ActivityMasterModule;
