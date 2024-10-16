// src/redux/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return { user: null };
    }
    return { user: JSON.parse(serializedState) };
  } catch (error) {
    console.error("Error loading user from local storage", error);
    return { user: null };
  }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      try {
        localStorage.setItem("user", JSON.stringify(state.user));
      } catch (error) {
        console.error("Error saving user to local storage", error);
      }
    },
    logout: (state) => {
      state.user = null;
      try {
        localStorage.removeItem("user");
      } catch (error) {
        console.error("Error removing user from local storage", error);
      }
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
