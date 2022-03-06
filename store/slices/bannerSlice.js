import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  src: null
}

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    addBanner: (state, action) => {
      state.src = action.payload.src
    },
    removeBanner: (state) => {
      state.src = null
    }
  }
})

export const {addBanner, removeBanner} = bannerSlice.actions;

export default bannerSlice.reducer