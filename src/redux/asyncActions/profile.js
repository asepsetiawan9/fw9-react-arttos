import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

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

  // export const getDataLogin = createAsyncThunk('profile/getDataLogin', async (token)=>{
  //   const result = {}
  //   try {
  //     const { data } = await http(token).get('/profile')
  //     return data
  //   } catch (error) {
  //     result.message = error.response.data?.message;
  //     return result
  //   }
  // })