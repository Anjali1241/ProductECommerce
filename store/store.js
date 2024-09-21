import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/slices/productSlice";
import  globalVariablesReducer from "../src/slices/globalVariablesSlice";
import categoriesReducer from '../src/slices/categoriesSlice'
import categoryProductReducer from "../src/slices/categoryProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    selectCategory:globalVariablesReducer,
    categoriesApi:categoriesReducer,
    CategoryProduct:categoryProductReducer
  },
});