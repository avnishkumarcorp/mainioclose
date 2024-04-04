import React from "react"
import ModelFieldDesign from "../design/ModelFieldDesign"

const ModelInput = React.forwardRef(
  ({ label, type = "", className = "", ...props }, ref) => (
    <ModelFieldDesign>
      {label && <label className='label-heading mb-1'>{label}</label>}
      <input type={type} className={` form-control input-focus ${className}`} {...props} ref={ref} />
    </ModelFieldDesign>
  )
)

export default ModelInput
