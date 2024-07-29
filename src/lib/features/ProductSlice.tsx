"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  products: any[];
  loading: boolean;
  error?: string | null;
}
const initialState: ProductState = {
  products: [],
  loading: true,
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const url = "https://dummyjson.com/products?limit=0";
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.products;
    } catch (error) {
      console.error(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;

        localStorage.setItem("products", JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
