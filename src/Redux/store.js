import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./Reducer/CounterReducer"

const rootReducer = combineReducers({
  counterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
