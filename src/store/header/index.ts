import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface HeaderState {
  coinPair: string;
  // status: "idle" | "loading" | "failed";
}

const initialState: HeaderState = {
  coinPair: localStorage.getItem("activePair") || "ZNX/USDT",
  // status: "idle",
};

export const Header = createSlice({
  name: "header",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    storeSelectedPair: (state, action: PayloadAction<string>) => {
      state.coinPair = action.payload;
    },
  },
});

export const { storeSelectedPair } = Header.actions;

export const selectCoinPair = (state: RootState) => state.header.coinPair;

export default Header.reducer;
