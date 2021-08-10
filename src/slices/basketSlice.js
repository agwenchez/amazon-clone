import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex( item => item.id === action.payload);
      // make a copy of the basket
      let newBasket = [...state.items]

      // if item exists in the basket
      if(index >= 0){
        newBasket.splice(index,1)
      }else{
        console.warn(`Can't remove product ${action.payload.id} as its does not exist!`)
      }

      state.items = newBasket
      // const new_items = state.items.filter( item => action.payload !== item.id)
      // state.items=[...new_items]
    }
  }
})


export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectItems = (state) => state.basket.items
export default basketSlice.reducer