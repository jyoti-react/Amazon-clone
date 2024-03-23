// import {ADD_PRODUCT,DELETE_PRODUCT}  from '../Redux/Actions/Actiontypes'

import { createSlice } from '@reduxjs/toolkit';

const initialState={
    cart:[]
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            // console.log(action.payload);
            state.cart.push(action.payload)
            
        },
        // removeitem:(state,action)=>{
        //     state.cart.slice
        // }
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;