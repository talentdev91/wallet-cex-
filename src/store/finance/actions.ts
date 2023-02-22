import { createAsyncThunk } from "@reduxjs/toolkit";
import { balanceAPI } from "../api/finance";

const getBalance = createAsyncThunk(
  "balance/get/lists",
  async (params: FormData) => {
    const response = await balanceAPI(params);
    return response.data;
  }
);

export { getBalance };
