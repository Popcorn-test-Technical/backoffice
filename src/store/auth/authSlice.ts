import { createSlice } from "@reduxjs/toolkit";

const initialAuthSlice = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthSlice,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

const { login, logout } = authSlice.actions;
export { login, logout };
export default authSlice.reducer;
