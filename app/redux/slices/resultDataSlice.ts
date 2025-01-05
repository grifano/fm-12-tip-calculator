import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ResultDataState } from "@/app/types/types";

const initialState: ResultDataState = {
  tipAmount: "0",
  totalAmount: "0",
};

const resultDataSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    calcTip: (state, action: PayloadAction<string>) => {
      state.tipAmount = action.payload;
    },
    calcTotal: (state, action: PayloadAction<string>) => {
      state.totalAmount = action.payload;
    },
    resetResultData: (state) => {
      state.tipAmount = initialState.tipAmount;
      state.totalAmount = initialState.totalAmount;
    },
  },
});

export const { calcTip, calcTotal, resetResultData } = resultDataSlice.actions;
export default resultDataSlice.reducer;
