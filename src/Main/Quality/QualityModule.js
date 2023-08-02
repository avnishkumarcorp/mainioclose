import React from "react";
import "./QualityModule.scss"
import { Outlet } from "react-router-dom";

const QualityModule = () => {
    return (
        <div>
          <Outlet />
        </div>
      )
};

export default QualityModule;
