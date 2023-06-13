import { createAction, createSlice } from "@reduxjs/toolkit";

const incrementByAmount = createAction("account/incrementByAmount");

const initialState = { points: 5 };

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1; //immer library converts immutable
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 10) {
        state.points += 1;
      }
    });
  },
});

export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
