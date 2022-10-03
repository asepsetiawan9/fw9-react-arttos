import {createSlice} from '@reduxjs/toolkit';
import {getTransactions} from '../asyncActions/transactions';
import {getTransactionsLimit} from '../asyncActions/transactions';
import {getUserById} from '../asyncActions/transactions';
import {topup} from '../asyncActions/transactions';
import {getUsers} from '../asyncActions/transactions';

const initialState = {
  data: {},
  tabelInfo: {},
  dataLimit: {},
  dataRecipient: {},
  dataTransfer: {},
  dataTopup: {},
  dataUser: {},
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
      state.data = action.payload;
    });
    build.addCase(getTransactionsLimit.fulfilled, (state, action) => {
      state.dataLimit = action.payload;
    });
    build.addCase(getUserById.fulfilled, (state, action) => {
      state.dataRecipient = action.payload.result;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      state.dataTopup.balance = action.payload.balance;
    });
    build.addCase(getUsers.fulfilled, (state, action) => {
      state.totalData = action.payload.infoPage;
      state.tabelInfo = action.payload.infoPage
      state.dataUser = action.payload;
    });
  },
});

export {getTransactions, getTransactionsLimit, getUsers};
export const {selectRecipient, inputAmount} = transactions.actions;
export default transactions.reducer;
