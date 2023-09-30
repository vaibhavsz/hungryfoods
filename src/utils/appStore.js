import cartReducer from "./redux/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
// const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
