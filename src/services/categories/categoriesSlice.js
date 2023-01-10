import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useGet} from "../../Api/hooks/useGet";
import {ASYNC_STATUS} from "../../utils/constants";

const initialState = {
  categories: [],
  categoriesStatus: ASYNC_STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: ASYNC_STATUS.IDLE,
};

export const getAllCategories = createAsyncThunk("categories/GET", async () => {
  const data = await useGet(`/products/categories`);
  return data;
});

export const getProductsOfCategory = createAsyncThunk(
  "category-product/GET",
  async (category) => {
    const data = await useGet(`/products/category/${category}`);
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ALL_CATEGORY
      .addCase(getAllCategories.pending, (state, _) => {
        state.categoriesStatus = ASYNC_STATUS.PENDING;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = ASYNC_STATUS.SUCCESS;
      })
      .addCase(getAllCategories.rejected, (state, _) => {
        state.categoriesStatus = ASYNC_STATUS.FAILED;
      })
      // PRODUCTS_OF_CATEGORY
      .addCase(getProductsOfCategory.pending, (state, _) => {
        state.categoryProductsStatus = ASYNC_STATUS.PENDING;
      })
      .addCase(getProductsOfCategory.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.categoryProductsStatus = ASYNC_STATUS.SUCCESS;
      })
      .addCase(getProductsOfCategory.rejected, (state, _) => {
        state.categoryProductsStatus = ASYNC_STATUS.FAILED;
      });
  },
});

export default categoriesSlice.reducer;
