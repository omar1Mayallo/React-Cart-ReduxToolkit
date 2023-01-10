import {createAsyncThunk} from "@reduxjs/toolkit";
import {usePost} from "../../Api/hooks/usePost";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({username, password}, {rejectWithValue}) => {
    try {
      const data = await usePost(`/auth/login`, {username, password});
      // store user's info in local storage
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
