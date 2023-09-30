import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state in (here) reducer functions.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // Redux Toolkit - either mutate the existing state or return new state.
      state.items.length = 0; 
      // state = [] won't work
      // state = []; works if return {items: []}; // return newState;
      // return { items: [] }; // this new object will be replaced inside originalState = {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
