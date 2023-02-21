import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortSliceState {
  items: any[];
  changedItems: any[];
  change: number;
}

const initialState: SortSliceState = {
  items: [],
  changedItems: [],
  change: 0,
};

const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    initArray(state, action: PayloadAction<any[]>): any {
      state.items = action.payload;
    },
    sort(state, action: PayloadAction<any>): any {
      if (action.payload.toString().length > 0) {
        state.changedItems = state.items.filter((item) =>
          item.Country.toLowerCase().startsWith(action.payload.toLowerCase())
        );
        state.change++;
      } else state.changedItems = state.items;
    },
  },
});

export const sortActions = sortSlice.actions;
export const { initArray, sort } = sortSlice.actions;
export default sortSlice.reducer;
