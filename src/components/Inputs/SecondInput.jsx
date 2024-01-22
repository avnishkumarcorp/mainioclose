import React from "react";

const SecondInput = React.forwardRef(({
    label,
    type = "",
    className = "",
    ...props}, ref
)=>(
    <div>
        {label && <label>{label}</label>}
        <input type={type} className={`${className}`} {...props} ref={ref} />
    </div>
))
export default SecondInput;
