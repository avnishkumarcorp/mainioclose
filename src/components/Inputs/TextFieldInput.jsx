import React from "react"
import ModelFieldDesign from "../design/ModelFieldDesign"

const TextFieldInput = React.forwardRef(
  ({ label, type = "", className = "", ...props }, ref) => (
    <ModelFieldDesign>
      {label && <label className="label-heading mb-1">{label}</label>}
      <textarea
        type={type}
        className={` form-control hei-100 input-focus ${className}`}
        {...props}
        ref={ref}
      />
    </ModelFieldDesign>
  )
)

export default TextFieldInput
