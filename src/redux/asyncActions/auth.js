import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const login = createAsyncThunk('auth/login', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/auth/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    result.token = data.result[0].token;
    result.pin = data.result[0].pin;
    result.email = data.result[0].email;
    // console.log('ini dari data login', result);
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk("auth/register", async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("/auth/register", send, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

