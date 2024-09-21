import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    console.log(response,"response");
    return response.json();
  });