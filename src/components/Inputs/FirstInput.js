import React from "react"

const FirstInput = React.forwardRef(
  ({ label, type = "", className = "", ...props }, ref) => (
    <div>
      {label && (
        <label className="m-1" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input type={type} className={`${className}`} {...props} ref={ref} />
    </div>
  )
)

export default FirstInput
