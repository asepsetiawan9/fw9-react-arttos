import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import character from "./character";
import profile from "./profile";
import auth from "./auth";
import transactions from "./transactions";
import storage from 'redux-persist/lib/storage';

const authConfig = {
  storage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  character,
  profile,
  transactions,
});

export default reducer;
