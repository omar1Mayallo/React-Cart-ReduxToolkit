import {createSlice} from "@reduxjs/toolkit";

const initialState = {searchModalOpen: false};

const searchModalSlice = createSlice({
  name: "searchModal",
  initialState,
  reducers: {
    toggleSearchModal(state) {
      state.searchModalOpen = !state.searchModalOpen;
    },
  },
});

export const {toggleSearchModal} = searchModalSlice.actions;
export default searchModalSlice.reducer;
