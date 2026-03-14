import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    logado: false
  },
  reducers: {
    login(state, action) {
      state.email = action.payload
      state.logado = true
    },
    logout(state) {
      state.email = ""
      state.logado = false
    }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer