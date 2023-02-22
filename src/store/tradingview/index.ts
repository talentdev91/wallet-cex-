import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { tradingViewState } from "./types";

const PREFIX = "tradingview";

const initialState: tradingViewState = {
  tradingviewList: {},
};

export const tradingViewSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateTradingView: (
      state: tradingViewState,
      action: PayloadAction<any>
    ) => {
      if (action.payload !== null) {
        state.tradingviewList = action.payload;
      }
    },
  },
});

export const { updateTradingView } = tradingViewSlice.actions;

export default tradingViewSlice.reducer;
