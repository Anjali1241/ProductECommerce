import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectCategory: 'electronics',
};

export const globalVariablesSlice = createSlice({
  name: 'globalVariables',
  initialState,
  reducers: {
    selectCategoryName: (state, action) => {
         state.selectCategory=action.payload
    },
  },
});

export const { selectCategoryName } = globalVariablesSlice.actions;
export default globalVariablesSlice.reducer;
