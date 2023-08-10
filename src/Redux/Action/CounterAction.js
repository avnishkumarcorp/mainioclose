export const Increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  }
}

export const Decrement = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  }
}
