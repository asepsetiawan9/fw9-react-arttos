import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getTransactions = createAsyncThunk(
  'transactions/trans-history',
  async token => {
    const result = {};
    try {
      const {data} = await http(token).get(
        'transactions/trans-history?limit=50&sortType=DESC',
      );
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const getTransactionsLimit = createAsyncThunk(
  'transactions/trans-history-limit',
  async token => {
    const result = {};
    try {
      const {data} = await http(token).get(
        'transactions/trans-history?limit=5&sortType=DESC',
      );
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);


export const getUserById = createAsyncThunk(
  'users/getDataUser',
  async request => {
    const result = {};
    try {
      const {data} = await http().get(`/users/getuserdetail/${request}`);
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const transferMoney = createAsyncThunk(
  'transactions/transfer',
  async request => {
    const result = {};
    try {
      const send = qs.stringify(request.data);
      const {data} = await http(request.token).post(
        '/transactions/transfer',
        send,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log('ini dari action', data);
      return data.result;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const topup = createAsyncThunk('transaction/top-up', async request => {
  const result = {};
  try {
    const send = qs.stringify(request.data);
    const {data} = await http(request.token).post(
      '/transactions/top-up',
      send,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      },
    );
    result.balance = data.result[0].balance;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const getUsers = createAsyncThunk('users/all-users', async ({token, search, limit, page}) => {
  const result = {};
  console.log('ini limit', limit);
  limit = parseInt(limit) || 5
  page  = parseInt(page) || 1
  search = search || ''
  try {
    const query = new URLSearchParams({token, search, limit, page}).toString()
    const {data} = await http(token).get(`/users/getallusers?${query}`);
    console.log('ini dari actions dan ini datanya', data);
    return data;
  } 
  catch (e) {
    console.log('masuk kesini');
    result.message = e.response.data?.message;
    return result;
  }
});
