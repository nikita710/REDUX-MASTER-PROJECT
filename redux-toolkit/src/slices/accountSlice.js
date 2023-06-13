import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return data.amount;
  }
);

const initialState = { balance: 10 };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.balance += 1;
    },
    decrement: (state) => {
      state.balance--;
    },
    incrementByAmount: (state, action) => {
      state.balance += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccount.fulfilled, (state, action) => {
      state.balance = action.payload;
      state.pending = false;
    });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
