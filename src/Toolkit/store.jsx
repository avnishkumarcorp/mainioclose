import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  AuthSlice  from "./Slices/AuthSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore";


const reducers = combineReducers({
  auth: AuthSlice
})

const persistConfig = {
  key: "root",
  storage,
}


const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)