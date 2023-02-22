import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBalance } from "./actions";
import type { BalanceState } from "./types";

const PREFIX = "trade";

const initialState: BalanceState = {
  getBalances: [],
};

const setBalance = (state: BalanceState, balances: any) => {
  if (balances.Success === true) {
    if (balances.Data !== null) {
      state.getBalances = balances.Data;
    } else {
      state.getBalances = [];
    }
  } else {
    state.getBalances = [];
    //set error state here
  }
};

export const tradeHistorySlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBalance.fulfilled.type,
      (state: BalanceState, action: PayloadAction<any>) => {
        setBalance(state, action.payload);
      }
    );
  },
});

export { getBalance };

export default tradeHistorySlice.reducer;
