import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateTypes {
  x: string | number;
  y: string | number;
}

const initialState: StateTypes = {
  x: "",
  y: "",
};

export const mousePositonSlice = createSlice({
  name: "mousePositon",
  initialState,
  reducers: {
    setPointerData(state, action) {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
  },
});

export const { setPointerData } = mousePositonSlice.actions;

export default mousePositonSlice.reducer;
