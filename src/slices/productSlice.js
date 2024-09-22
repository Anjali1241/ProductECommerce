import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snackbar: {
    open: false,
    message: '',
    severity: '',
    variant: '',
  },

  wishlist: [],
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
});

export const { getAllProduct, openCloseSnackbar, addToWishlist } =
  productSlice.actions;
export default productSlice.reducer;
