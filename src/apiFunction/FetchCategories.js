import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    return response.json();
  });

export const fetchIndividualCategory = createAsyncThunk("categories/fetchIndividualCategory", async (CategoryName) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${CategoryName}`);
    return response.json();
  });
