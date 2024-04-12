import React from "react";
import './HomeImageComp.scss'

const HomeImageComp = ({imageurl, imgalt, className=''}) => (
    <div className={`all-center ${className}`}>
        <div className="side-max-img">
            <img src={imageurl} alt={imgalt} />
        </div>
    </div>
)

export default HomeImageComp;
