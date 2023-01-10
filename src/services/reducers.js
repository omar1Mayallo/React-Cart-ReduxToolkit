import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";
import cartSidebarSlice from "./cartSidebar/cartSidebarSlice";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import searchModalSlice from "./searchModal/searchModalSlice";
import sidebarSlice from "./sidebar/sidebarSlice";

const rootReducer = combineReducers({
  sidebar: sidebarSlice,
  category: categoriesSlice,
  product: productsSlice,
  searchModal: searchModalSlice,
  auth: authSlice,
  cart: cartSlice,
  cartSidebar: cartSidebarSlice,
});

export default rootReducer;
