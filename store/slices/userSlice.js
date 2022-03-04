import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  address: null,
  isconnected: false,
  userToken: null,
  userNetwork: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    connect: (state, action) => {
      state.address = action.payload.address,
      state.isconnected = true,
      state.userToken = action.payload.userToken,
      state.userNetwork = action.payload.userNetwork
    },
    disconnect: (state) => {
      state.address = null,
      state.isconnected = false,
      state.userToken = null,
      state.userNetwork = null
    },
    switchNetwork: (state, action) => {
      state.userNetwork = action.payload.userNetwork
    }
  }
})

export const {connect, disconnect, switchNetwork} = userSlice.actions;

export default userSlice.reducer