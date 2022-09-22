import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../asyncActions/profile';
import { updateProfile } from '../asyncActions/profile';
import { updatePassword } from '../asyncActions/profile';

const initialState ={
  data: {},
  dataUpdate: {},
  msgUpdate: {}
}

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.result
    });
    build.addCase(updateProfile.fulfilled, (state, action) => {
      state.dataUpdate = action.payload.result;
      state.msgUpdate = action.payload.message;
    });
    build.addCase(updatePassword.fulfilled, (state, action) => {
      state.dataUpdate = action.payload.result;
      state.msgUpdate = action.payload.message;
    });
  }
})

export { getProfile }
export default profile.reducer 