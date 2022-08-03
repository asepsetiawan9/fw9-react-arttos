import { combineReducers } from "@reduxjs/toolkit";
import character from "./character";
import profile from "./profile";
import auth from "./auth";

const reducer = combineReducers({
  auth,
  character,
  profile,
});

export default reducer;
