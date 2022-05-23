import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userReducer.actions;

export const selectUser = (state) => state.user.user;

export default userReducer.reducer;
