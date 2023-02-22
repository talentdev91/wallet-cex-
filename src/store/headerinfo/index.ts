import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getHeaderPrices from "./action";
import type { HeaderPriceState } from "./types";

const PREFIX = "headerprice";

const initialState: HeaderPriceState = {
  headerPriceList: [],
};

export const headerInfoSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateHeaderPrice: (
      state: HeaderPriceState,
      action: PayloadAction<any>
    ) => {
      if (action.payload !== null) {
        state.headerPriceList = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getHeaderPrices.fulfilled.type,
      (state: HeaderPriceState, action: PayloadAction<any>) => {
        state.headerPriceList = action.payload.Data;
      }
    );
  },
});

export const { updateHeaderPrice } = headerInfoSlice.actions;

export { getHeaderPrices };
export default headerInfoSlice.reducer;
