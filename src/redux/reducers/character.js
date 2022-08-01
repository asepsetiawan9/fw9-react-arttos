import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../asyncActions/character";

const initialState = {
  results: {}
};

const character = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAll.fulfilled, (state, action) => {
      state.results = action.payload;
    });
    // build.addCase(getNextData.fulfilled, (state, action) => {
    //   state.results = action.payload;
    // });
  }
});

// export {} = character.actions
export { getAll };
export default character.reducer;
