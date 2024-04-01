import React from "react"

const LongInput = React.forwardRef(
  ({ label, type = "", className = "", labelClass = "", ...props }, ref) => (
    <div>
      {label && (
        <label
          className={`label-heading mt-2 mb-1 ${labelClass}`}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`form-control input-focus ${className}`}
        {...props}
        ref={ref}
      />
    </div>
  )
)

export default LongInput
