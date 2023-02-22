import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sort-slice";
const store = configureStore({
  reducer: {
    sortSlice: sortReducer,
  },
});

export default store;
