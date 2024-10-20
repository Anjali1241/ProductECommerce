import { createAsyncThunk } from "@reduxjs/toolkit";

// get all categories
export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    return response.json();
  });

// get products categories wise
export const fetchIndividualCategory = createAsyncThunk("categories/fetchIndividualCategory", async (CategoryName) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${CategoryName}`);
    return response.json();
  });

// get all products
export const fetchAllProducts = createAsyncThunk("AllProducts", async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  console.log("api fetch",response)
    return response.json();
});