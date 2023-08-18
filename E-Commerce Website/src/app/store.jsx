import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlics";
import cartSlice from "../features/CartSlice";
import modalSlice from "../features/Modal";
import filterSlice from "../features/FilterSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSlice,
    modal: modalSlice,
    filter: filterSlice,
  },
});
