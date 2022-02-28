import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  address: null,
  isconnected: false,
  userToken: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    connect: (state, action) => {
      state.address = action.payload.address,
      state.isconnected = true,
      state.userToken = action.payload.userToken
    },
    disconnect: (state) => {
      state.address = null,
      state.isconnected = false,
      state.userToken = null
    }
  }
})

export const {connect, disconnect} = userSlice.actions;

export default userSlice.reducer