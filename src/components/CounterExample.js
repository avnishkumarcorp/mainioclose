import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "../Redux/Action/CounterAction"
import { getCurrentUser } from "../Toolkit/Slices/AuthSlice"

const CounterExample = () => {
  const currentRoles = useSelector((state) => state?.auth?.roles)
  const currentUserID = useSelector((state) => state?.auth?.currentUser?.id)
  

  console.log("counter is", currentRoles, currentUserID)

  const adminRole = currentRoles.includes("ADMIN")
  const userRole = currentRoles.includes("USER")

  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            getCurrentUser({ email: "aryan1@gmail.com", password: "password" })
          )
        }
        className="btn btn-primary"
      >
        Add user
      </button>
      {/* <h1>{counterValue}</h1> */}
      <button
        // onClick={() => dispatch(Decrement(1))}
        className="btn btn-primary"
      >
        Decrement
      </button>

      {adminRole ? <button className="btn btn-info">Admin Button</button> : ""}
    </div>
  )
}

export default CounterExample
