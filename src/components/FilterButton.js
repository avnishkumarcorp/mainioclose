import React, { useState } from "react";
import "./FilterButton.scss"

const FilterButton = ({name, icon, data, setData}) => {
    const handleClick = () =>{
        setData((prev) => !(prev)) 
    }
    
    return (
    <div className="filter-box">
        <button className="filter-btn-design" onClick={handleClick}><span className="mr-2">{icon}</span>{name}</button>
    </div>
  )
};

export default FilterButton;
