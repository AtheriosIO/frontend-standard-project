import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../dto/User.dto";

export interface UserState {
  profile: User | undefined;
}

const initialState: UserState = {
  profile: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<User | undefined>) => {
      state.profile = action.payload;
    },
    userLogout: (state) => {
      Object.assign(state, { ...initialState });
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
