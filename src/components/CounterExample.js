import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "../Redux/Action/CounterAction"
import { getCurrentUser } from "../Toolkit/Slices/AuthSlice"

const CounterExample = () => {
  const counterValue = useSelector((state) => state.auth)
  console.log("counter is", counterValue);
  
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => dispatch(getCurrentUser({email: "aryan1@gmail.com", password: "password"}))}
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
    </div>
  )
}

export default CounterExample
