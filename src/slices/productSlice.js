import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProduct: [],
  snackbar: {
    open: false,
    message: '',
    severity: '',
    variant: '',
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProduct: (state, action) => {},
    openCloseSnackbar: (state, action) => {
      state.snackbar.open = action.payload.open;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.variant = action.payload.variant;
    },
  },
});

export const { getAllProduct, openCloseSnackbar } = productSlice.actions;
export default productSlice.reducer;
