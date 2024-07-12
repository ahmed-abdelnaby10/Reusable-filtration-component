import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("/products.json");
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  console.log("Fetched data:", data)
  return data;
});

// Initial state with products as an array
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Slice with reducers and extra reducers
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
