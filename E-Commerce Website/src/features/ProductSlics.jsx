import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { color, filterProps } from "framer-motion";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

// Define your API URL
const apiUrl = "https://api.pujakaitem.com/api/products";

// Create an async thunk to fetch data
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const productSlice = createSlice({
  name: "cart",
  initialState: {
    data: fetchFromLocalStorage(),
    filter_products: [],
    company: "all",
    status: "idle",
    error: null,
    searchData: [],
  },
  reducers: {
    searchProduct: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
    setCompanyFilter(state, action) {
      state.filter_products = state.data;
      state.company = action.payload;
      console.log(state.company, state.filter_products);
      // if (state.company !== "all") {
      //   state.filter_products = state.filter_products.filter((curEle) => {
      //     curEle.company === action.payload;
      //   });
      // }
      // const newState = { ...state };
      // newState.filter_products = state.data;
      // newState.company = action.payload;
      // if (newState.company !== "all") {
      //   newState.filter_products = state.data.filter((curEle) => {
      //     curEle.company === newState.company;
      //   });
      //   console.log(newState);
      //   return newState;
      // }
      // state.filter_products = state.data;
      // state.company = action.payload;
      // if (state.company === "all") {
      //   state.filter_products = state.data;
      // } else {
      //   state.filter_products = state.data.filter((curEle) => {
      //     curEle.company === state.company;
      //   });
      // }
      // state.filter_products =
      // state.company === "all"
      //   ? state.data
      //   : state.data.filter((data) => {
      //       data.company === state.company;
      //     });
      console.log(state.filter_products);
      storeInLocalStorage(state.filter_products);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        storeInLocalStorage(state.data);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export const { searchProduct, setCompanyFilter } = productSlice.actions;
