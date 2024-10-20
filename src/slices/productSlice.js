/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../apiFunction/FetchCategories';

const initialState = {
  snackbar: {
    open: false,
    message: '',
    severity: '',
    variant: '',
  },

  wishlist: [],
  items: [],
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    openCloseSnackbar: (state, action) => {
      state.snackbar.open = action.payload.open;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.variant = action.payload.variant;
    },

    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export const { getAllProduct, openCloseSnackbar, addToWishlist } =
  productSlice.actions;
export default productSlice.reducer;
