import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { Product } from '../entities/product';
import type { RootState } from './store.ts';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {
    add: (state, { payload }: PayloadAction<Product>) => [payload, ...state],
    update: (state, { payload }: PayloadAction<Product>) =>
      state.map((currentProduct) =>
        currentProduct.id === payload.id ? payload : currentProduct,
      ),
  },
});

export const getProducts = createSelector(
  (state: RootState) => state.products,
  (products) => products,
);
