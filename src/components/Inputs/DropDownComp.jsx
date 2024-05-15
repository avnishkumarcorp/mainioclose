import React from "react"

const DropDownComp = React.forwardRef(
  ({ name = "", className = "", options, data, ...props }, ref) => (
    <select
      className="form-control input-focus"
      name={name}
      ref={ref}
      {...props}
    >
      <option>{options}</option>
      {data.map((status, index) => (
        <option key={index} value={status}>
          {status}
        </option>
      ))}
    </select>
  )
)

export default DropDownComp
