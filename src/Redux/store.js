import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./Reducer/CounterReducer"
import { AuthReducer } from "./Reducer/AuthReducer"
import { SignUpDataReducer } from "./Reducer/SignUpDataReducer"
import {persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  AuthReducer,
  SignUpDataReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store2 = createStore(persistedReducer, applyMiddleware())
const Persistor = persistStore(store2);
export {Persistor};

// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import persistReducer from "redux-persist/es/persistReducer";
// import storage from "redux-persist/lib/storage"


// const reducers = combineReducers({
//   auth: authReducer
// })

// const persistConfig = {
//   key: "root",
//   storage,
// }


// const persistedReducer = persistReducer(persistConfig, reducers)

// export const store = configureStore({
//   reducer: persistedReducer
// })



