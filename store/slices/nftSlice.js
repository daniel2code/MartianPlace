import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: null,
  description: null,
  img: null,
  isconnected: false,
  userToken: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    connect: (state, action) => {
      state.name = action.payload.name,
      state.isconnected = true,
      state.userToken = action.payload.userToken
    },
    disconnect: (state) => {
      state.name = null,
      state.isconnected = false,
      state.userToken = null
    }
  }
})

export const {connect, disconnect} = userSlice.actions;

export default userSlice.reducer