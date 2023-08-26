import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./Reducer/CounterReducer"
import { AuthReducer } from "./Reducer/AuthReducer"

const rootReducer = combineReducers({
  counterReducer,
  AuthReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
