import { createSlice } from "@reduxjs/toolkit";

const AuthStateSlice = createSlice({
  name: 'authState',
  initialState: {
    isLogin: false,
    isAuthChecked: false,
    userInfo: {
      id: '',
      nickname: ''
    }
  },
  reducers: {
    setLogin: (state, action) => {
      const { id, nickname } = action.payload;
      state.isLogin = true
      state.userInfo = {
        id,
        nickname,
      }
    },
    setAuthChecked: (state) => {
      state.isAuthChecked = true
    },
    setLogout: (state) => {
      state.isLogin = false
    }
  }
})

export default AuthStateSlice.reducer;
export const { setLogin, setAuthChecked, setLogout } = AuthStateSlice.actions;