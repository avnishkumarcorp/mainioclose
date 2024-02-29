import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "../Redux/Action/CounterAction"

const CounterExample = () => {
  const counterValue = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => dispatch(Increment(1))}
        className="btn btn-primary"
      >
        Increment
      </button>
      <h1>{counterValue}</h1>
      <button
        onClick={() => dispatch(Decrement(1))}
        className="btn btn-primary"
      >
        Decrement
      </button>
    </div>
  )
}

export default CounterExample
