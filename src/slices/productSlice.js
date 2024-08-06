import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {},
  },
});

export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
