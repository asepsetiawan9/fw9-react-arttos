import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
import qs from 'qs';

export const getProfile = createAsyncThunk('profile/getProfile', async (token)=>{
    const result = {}
    try {
      const { data } = await http(token).get('/profile/getprofile')
      return data
    } catch (error) {
      result.message = error.response.data?.message;
      return result
    }
  })

  export const updateProfile = createAsyncThunk('profile/updateprofile', async request => {
    const result = {};
    try {
      const send = qs.stringify(request.data);
      const {data} = await http(request.token).patch(
        '/profile/updateprofile',
        send,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        },
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  });
  export const updatePin = createAsyncThunk('profile/updatepin', async request => {
    const result = {};
    try {
      const send = qs.stringify(request.data);
      const {data} = await http(request.token).patch(
        '/profile/updatepin',
        send,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        },
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  });

  export const updatePassword = createAsyncThunk('profile/updatepassword', async request => {
    const result = {};
    try {
      const send = qs.stringify(request.data);
      console.log('ini dari action', send)
      const {data} = await http(request.token).patch(
        '/profile/updatepassword',
        send,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log('ini dari action', data)
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      console.log('ini error', result);
      return result;
    }
  });