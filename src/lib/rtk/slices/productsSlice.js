import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("/products.json");
  const data = await res.json();
  console.log("Fetched data:", data)
  return data;
});

// Initial state with products as an array
const initialState = {
  products: [],
};

// Slice with reducers and extra reducers
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("State updated with:", action.payload)
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
