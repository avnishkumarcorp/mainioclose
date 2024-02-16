import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import AuthSlice from "./Slices/AuthSlice"
import UsersSlice from "./Slices/UsersSlice"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"
import LeadSlice from "./Slices/LeadSlice"

const reducers = combineReducers({
  auth: AuthSlice,
  user: UsersSlice,
  leads: LeadSlice,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
