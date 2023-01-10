import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useGet} from "../../Api/hooks/useGet";
import {ASYNC_STATUS} from "../../utils/constants";

const initialState = {
  products: [],
  productsStatus: ASYNC_STATUS.IDLE,
  productDetails: [],
  productDetailsStatus: ASYNC_STATUS.IDLE,
  productsSearched: [],
  productsSearchedStatus: ASYNC_STATUS.IDLE,
};

export const getAllProducts = createAsyncThunk(
  "products/GET",
  async (queryString) => {
    const data = await useGet(`/products?${queryString}`);
    return data;
  }
);
export const getProductDetails = createAsyncThunk(
  "productDetails/GET",
  async (productId) => {
    const data = await useGet(`/products/${productId}`);
    return data;
  }
);
export const getSearchedProducts = createAsyncThunk(
  "searchedProducts/GET",
  async (searchChar) => {
    const data = await useGet(`/products/search?q=${searchChar}`);
    return data;
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // PRODUCTS
      .addCase(getAllProducts.pending, (state, _) => {
        state.productsStatus = ASYNC_STATUS.PENDING;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = ASYNC_STATUS.SUCCESS;
      })
      .addCase(getAllProducts.rejected, (state, _) => {
        state.productsStatus = ASYNC_STATUS.FAILED;
      })
      // PRODUCT_DETAILS
      .addCase(getProductDetails.pending, (state, _) => {
        state.productDetailsStatus = ASYNC_STATUS.PENDING;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload;
        state.productDetailsStatus = ASYNC_STATUS.SUCCESS;
      })
      .addCase(getProductDetails.rejected, (state, _) => {
        state.productDetailsStatus = ASYNC_STATUS.FAILED;
      })
      // PRODUCTS_SEARCH_MODAL
      .addCase(getSearchedProducts.pending, (state, _) => {
        state.productsSearchedStatus = ASYNC_STATUS.PENDING;
      })
      .addCase(getSearchedProducts.fulfilled, (state, action) => {
        state.productsSearched = action.payload;
        state.productsSearchedStatus = ASYNC_STATUS.SUCCESS;
      })
      .addCase(getSearchedProducts.rejected, (state, _) => {
        state.productsSearchedStatus = ASYNC_STATUS.FAILED;
      });
  },
});

export default productsSlice.reducer;
