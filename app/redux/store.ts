import { configureStore } from "@reduxjs/toolkit";

import inputDataReducer from "./slices/inputDataSlice";
import resultDatareducer from "./slices/resultDataSlice";

export const store = configureStore({
  reducer: {
    inputData: inputDataReducer,
    result: resultDatareducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
