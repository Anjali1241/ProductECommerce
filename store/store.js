import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
