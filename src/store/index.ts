import { configureStore } from "@reduxjs/toolkit";
import mousePositonReducer from "./slices/mousePositonSlice";
import userSliceReducer from "./slices/userSlice";
import activeUsersReducer from "./slices/activeUsersSlice";

export const store = configureStore({
  reducer: {
    mousePositon: mousePositonReducer,
    user: userSliceReducer,
    activeUsers: activeUsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
