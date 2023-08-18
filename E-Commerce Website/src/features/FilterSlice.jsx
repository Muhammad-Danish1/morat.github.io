// productFilterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "all",
  color: "all",
  category: "all",
  minPrice: 0,
  maxPrice: 10000000,
  // priceRange: [0, 1000000000],
  // price: 1000000000,
  sortBy: "",
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    applyFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    applySort: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { applyFilters, applySort } = productFilterSlice.actions;
export default productFilterSlice.reducer;
