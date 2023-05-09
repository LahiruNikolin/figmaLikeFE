import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateTypes {
  memberList: any[];
}

const initialState: StateTypes = {
  memberList: [],
};

export const activeUsersSlice = createSlice({
  name: "activeUsers",
  initialState,
  reducers: {
    setMembers(state, action) {
      state.memberList = action.payload;
    },
  },
});

export const { setMembers } = activeUsersSlice.actions;

export default activeUsersSlice.reducer;
