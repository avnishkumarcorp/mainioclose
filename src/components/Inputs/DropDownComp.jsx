import React from "react"

const DropDownComp = React.forwardRef(
  ({ name = "", className = "", options, label, data, ...props }, ref) => (
    <div className={`form-group col-md-6 ${className}`}>
      <div className="pr-ten">
        {label && (
          <label className="label-heading mb-1" htmlFor="teamName">
            {label}
          </label>
        )}
        <select
          className="form-control input-focus"
          name={name}
          ref={ref}
          {...props}
        >
          <option>{options}</option>
          {data?.map((status, index) => (
            <option key={status.id} value={status?.id}>
              {status?.number}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
)

export default DropDownComp
