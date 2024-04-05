import React from "react";

const ModelButton = ({props, name, className=''}) => {
  return <button className={`common-btn-one mr-2 ${className}`} {...props}>{name}</button>;
};

export default ModelButton;
