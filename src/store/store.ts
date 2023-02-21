import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sort_slice";
import popupReducer from "./popup_slice";
const store = configureStore({
  reducer: {
    sortSlice: sortReducer,
    popupSlice: popupReducer,
  },
});

export default store;
