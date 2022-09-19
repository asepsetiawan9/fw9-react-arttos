import {createSlice} from '@reduxjs/toolkit';
import {getTransactions} from '../asyncActions/transactions';
import {getUserById} from '../asyncActions/transactions';

const initialState = {
  data: {},
  dataRecipient: {},
  dataTransfer: {},
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    selectRecipient: (state, action) => {
      state.dataTransfer.recipient_id = action.payload;
    },
    inputAmount: (state, action) => {
      state.dataTransfer.amount = action.payload.amount;
      state.dataTransfer.note = action.payload.note;
      state.dataTransfer.time = action.payload.time;
      state.dataTransfer.date = action.payload.date;
    },
  },
  extraReducers: build => {
    build.addCase(getTransactions.fulfilled, (state, action) => {
      state.data = action.payload.result;
    });
    build.addCase(getUserById.fulfilled, (state, action) => {
      state.dataRecipient = action.payload.result;
    });
  },
});

export {getTransactions};
export const {selectRecipient, inputAmount} = transactions.actions;
export default transactions.reducer;
