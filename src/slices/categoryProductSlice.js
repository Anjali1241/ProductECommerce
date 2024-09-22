import { createSlice } from "@reduxjs/toolkit";
import { fetchIndividualCategory } from "../apiFunction/FetchCategories";

const initialState = {
    items: [],
    status: "idle",
    error: null,
  };

  const categoryProductSlice = createSlice({
    name: "fetchApi",
    initialState,
  //   reducer: {},
    extraReducers: (builder) => {
      builder.addCase(fetchIndividualCategory.pending, (state) => {
        state.status = "pending";
      });
      builder.addCase(fetchIndividualCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
      builder.addCase(fetchIndividualCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
    },
  });

  export default categoryProductSlice.reducer;