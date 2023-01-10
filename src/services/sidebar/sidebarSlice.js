import {createSlice} from "@reduxjs/toolkit";

const initialState = {sideOpen: false};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sideOpen = !state.sideOpen;
    },
  },
});

export const {toggleSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;
