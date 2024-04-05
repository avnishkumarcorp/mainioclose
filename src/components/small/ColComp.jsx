import React from "react";

const ColComp = ({data}) => {
  return <p className="m-0">{data ? data : "NA"}</p>;
};

export default ColComp;
