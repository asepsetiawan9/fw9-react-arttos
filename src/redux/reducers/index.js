import { combineReducers } from "@reduxjs/toolkit";
import character from "./character";
import counter from "./counter";

const reducer = combineReducers({
  counter,
  character
});

export default reducer;
