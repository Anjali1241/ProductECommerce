import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: [],
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    userSignIn: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { userSignIn } = userAuthSlice.actions;
export default userAuthSlice.reducer;
