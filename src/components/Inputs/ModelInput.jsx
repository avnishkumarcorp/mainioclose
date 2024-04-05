import React from "react"
import ModelFieldDesign from "../design/ModelFieldDesign"
import InputErrorComponent from "../InputErrorComponent"

const ModelInput = React.forwardRef(
  ({ label, error, errorData, type = "", className = "", ...props }, ref) => (
    <ModelFieldDesign>
      {label && <label className='label-heading mb-1'>{label}</label>}
      <input type={type} className={` form-control input-focus ${className}`} {...props} ref={ref} />
     {error && <InputErrorComponent value={errorData} /> }
    </ModelFieldDesign>
  )
)

export default ModelInput
