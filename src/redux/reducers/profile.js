import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../asyncActions/profile';
import { updateProfile, updatePassword, updatePhone, editPic } from '../asyncActions/profile';

const initialState ={
  data: {},
  dataUpdate: {},
  msgUpdate: {},
  errorMsg: null,
  successMsg: null,
}

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetMsg: state => {
      state.successMsg = null;
      state.errorMsg = null;
  },
  },
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.result
    });
    build.addCase(updateProfile.fulfilled, (state, action) => {
      state.dataUpdate = action.payload.result;
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.message;
    });
    build.addCase(updatePhone.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(updatePhone.fulfilled, (state, action) => {
      state.dataUpdate = action.payload.result;
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.message;
    });
    build.addCase(editPic.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editPic.fulfilled, (state, action) => {
      state.dataUpdate = action.payload.result;
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.message;
    });
    build.addCase(updatePassword.fulfilled, (state, action) => {
      state.dataUpdate = action.payload.result;
      state.msgUpdate = action.payload.message;
    });
  }
})

export { getProfile }
export const { resetMsg } = profile.actions;
export default profile.reducer 