import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 1000,
  name: null
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.num += 1;
      state.name = action.payload.name;
    },
    decrement: (state, action) => {
      state.num -= 1;
    }
  }
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
