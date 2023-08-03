"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counter = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value += 1;
    },
  },
});
export const { increment, decrement } = counter.actions;
export default counter.reducer;
