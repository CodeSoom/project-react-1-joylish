import { createSlice } from '@reduxjs/toolkit';

import productData from '../fixtures/products';

const { actions, reducer } = createSlice({
  name: 'application',

  initialState: {
    productItems: productData,
  },

  reducers: {
    setProductItems(state, { payload: { productItems } }) {
      return {
        ...state,
        productItems,
      };
    },
  },
});

export const {
  setProductItems,
} = actions;

export default reducer;
