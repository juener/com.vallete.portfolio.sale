import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectedProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.selectedProducts.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;