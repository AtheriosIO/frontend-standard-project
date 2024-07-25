import { Tuple, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: () => new Tuple(thunk, thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
