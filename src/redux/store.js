import { configureStore } from "@reduxjs/toolkit";

import loginStateSlice from "./LoginStateSlice";
import authStateSlice from "./AuthStateSlice";
const store = configureStore({
  reducer: {
    loginSlice: loginStateSlice,
    authSlice: authStateSlice
  }
})

export default store;