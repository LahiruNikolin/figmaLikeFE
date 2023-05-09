import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { login, refresh } from "@/services/user";

interface StateTypes {
  id: string;
  email: string;
  userName: string;
}
export const handleLogin = createAsyncThunk(
  "user/handleLogin",
  async (payload: any) => {
    const response = await login(payload);
    return response.data;
  }
);

export const fetchRefreshToken = createAsyncThunk(
  "user/fetchRefreshToken",
  async () => {
    const response = await refresh();
    return response.data;
  }
);

const initialState: StateTypes = {
  id: "",
  email: "",
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {});
  },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
