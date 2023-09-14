import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./Reducer/CounterReducer"
import { AuthReducer } from "./Reducer/AuthReducer"
import { SignUpDataReducer } from "./Reducer/SignUpDataReducer"

const rootReducer = combineReducers({
  counterReducer,
  AuthReducer,
  SignUpDataReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
