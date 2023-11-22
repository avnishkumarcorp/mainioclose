import React from "react";
import "./ButtonTwo.scss"

const ButtonTwo = ({
    data,
    className = "",
    ...props
}) => {
  return (<button className={`${className}`} {...props}>{data}</button>)
};

export default ButtonTwo;
