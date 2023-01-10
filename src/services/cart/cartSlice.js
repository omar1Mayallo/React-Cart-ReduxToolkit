import {createSlice} from "@reduxjs/toolkit";

const initialState = {cartItems: [], totalPrice: 0, itemsCount: 0};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQty: (state, action) => {
      state.itemsCount++;
      const cartItemFounded = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItemFounded
        ? (cartItemFounded.quantity = cartItemFounded.quantity + 1)
        : state.cartItems.push({...action.payload, quantity: 1});
    },

    decreaseQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity > 1 &&
        state.cartItems[itemIndex].quantity-- &&
        state.itemsCount--;
    },

    deleteFormCart: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload.id) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== item.id
          );
          state.itemsCount = state.itemsCount - item.quantity;
        }
      });
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.itemsCount = 0;
    },

    getTotalPrice: (state) => {
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        total += cartItem.quantity * cartItem.price;
      });
      state.totalPrice = total;
    },
  },
});

export const {
  increaseQty,
  decreaseQty,
  deleteFormCart,
  clearCart,
  getTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
