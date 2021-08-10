import { createSlice } from "@reduxjs/toolkit";

const initialState ={
items:[]
}


export const basketSlice = createSlice({
  name:'basket',
  initialState,
  reducers:{
    addToBasket: (action,state)=>{
    },
    removeFromBasket: (action,state)=>{
    }
  }
})


export const {addToBasket, removeFromBasket} = basketSlice.actions
export const selectItems = (state) => state.basketSlice.items
export default basketSlice.reducers