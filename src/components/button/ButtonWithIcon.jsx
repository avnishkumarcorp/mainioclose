import { useProps } from "@mui/x-data-grid/internals";
import React from "react";
import "./ButtonWithIcon.scss"

const ButtonWithIcon = ({
    data,
    icon,
    className="",
    ...props
}) => {
  return (
    <button className={`icon-style ${className}`} {...props}>{icon} {data}</button>
  )
};

export default ButtonWithIcon;
