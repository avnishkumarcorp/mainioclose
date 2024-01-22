import React from "react";
import "./ButtonTwo.scss"

const ButtonTwo = ({
    data,
    className = "",
    icon,
    ...props
}) => {
  return (<button className={`${className}`} {...props}>{icon && icon}{data}</button>)
}

export default ButtonTwo;
