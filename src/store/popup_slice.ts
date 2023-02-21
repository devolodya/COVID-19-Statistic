import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popupSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle(state, action) {},
  },
});

export const cartActions = popupSlice.actions;
export const { toggle } = popupSlice.actions;
export default popupSlice.reducer;
