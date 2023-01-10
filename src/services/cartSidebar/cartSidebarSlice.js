import {createSlice} from "@reduxjs/toolkit";

const initialState = {cartSidebarOpen: false};

const cartSidebarSlice = createSlice({
  name: "cartSidebar",
  initialState,
  reducers: {
    toggleCartSidebar(state) {
      state.cartSidebarOpen = !state.cartSidebarOpen;
    },
  },
});

export const {toggleCartSidebar} = cartSidebarSlice.actions;
export default cartSidebarSlice.reducer;
