import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../slices/categoriesSlice'
const store=configureStore({
    reducer:{
        categoriesApi:categoriesReducer
    }
})
export default store;