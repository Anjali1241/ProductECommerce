import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../apiFunction/FetchCategories";

const initialState = {
    items: [],
    status: "idle",
    error: null,
  };

  const categoriesSlice = createSlice({
    name: "fetchApi",
    initialState,
  //   reducer: {},
    extraReducers: (builder) => {
      builder.addCase(fetchCategories.pending, (state) => {
        state.status = "pending";
      });
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
      builder.addCase(fetchCategories.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
    },
  });

  export default categoriesSlice.reducer;