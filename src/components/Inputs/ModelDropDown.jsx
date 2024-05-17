import React from "react"

const ModelDropDown = React.forwardRef(
  ({ className = "", type, name, labelData, val, ...props }, ref) => {
    return (
      <div className="py-1">
        {labelData && <label className="model-label">{labelData}</label>}
        <select
          name={name}
          {...props}
          ref={ref}
          className={`input-model ${className}`}
        >
          <option>Select Role</option>
          {val?.map((v, index) => (
            <option key={index} value={v?.label}>
              {v?.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)
export default ModelDropDown
