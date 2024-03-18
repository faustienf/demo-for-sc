import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../entities/product';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {
    add: (state, { payload }: PayloadAction<Product>) => [payload, ...state],
    update: (state, { payload }: PayloadAction<Product>) =>
      state.map((currentProduct) =>
        currentProduct.id === payload.id ? payload : currentProduct
      ),
  },
});
