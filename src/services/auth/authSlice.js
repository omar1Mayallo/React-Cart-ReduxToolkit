import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useGet} from "../../Api/hooks/useGet";
import {userLogin} from "./authActions";

const initialState = {
  loading: false,
  error: null,
  userInfo:
    localStorage.getItem("userInfo") !== null
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
};

export const getAllCategories = createAsyncThunk("categories/GET", async () => {
  const data = await useGet(`/products/categories`);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userInfo");
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [userLogin.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const {logout} = authSlice.actions;
export default authSlice.reducer;
