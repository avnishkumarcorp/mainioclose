const initialState = {
  data: {},
}

export const SignUpDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUPDATA":
      return { ...state, data: action.payload }

    default:
      return state
  }
}
