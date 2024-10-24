import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cartInfo:[]
}

export const getCartInfo=createSlice({
    name:'cartInfo',
    initialState,
    reducers:{
        setCartInfo:(state,action)=>{
            state.cartInfo.push(action.payload)}
    }
});

export const {setCartInfo}=getCartInfo.actions;
export default  getCartInfo.reducer;
