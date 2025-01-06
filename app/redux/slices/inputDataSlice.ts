import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InputDataState } from "@/app/types/types";

const initialState: InputDataState = {
  bill: "",
  tip: "",
  persons: "",
};

const inputDataSlice = createSlice({
  name: "inputData",
  initialState,
  reducers: {
    addBill: (state, action: PayloadAction<string>) => {
      state.bill = action.payload;
    },
    addTip: (state, action: PayloadAction<string>) => {
      state.tip = action.payload;
    },
    addPersons: (state, action: PayloadAction<string>) => {
      state.persons = action.payload;
    },
    resetInputData: (state) => {
      state.bill = initialState.bill;
      state.tip = initialState.tip;
      state.persons = initialState.persons;
    },
  },
});

export const { addBill, addTip, addPersons, resetInputData } =
  inputDataSlice.actions;
export default inputDataSlice.reducer;
