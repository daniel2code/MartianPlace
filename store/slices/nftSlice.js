import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  imageURL: null,
  project: null,
  name: null,
  description: null,
  mintAmt: null,
  royalties: null,
  priceInitial: null,
  priceNow: null,
  address: null,
  mintAsPublic: null
}

export const nftSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addNFT: (state, action) => {
      state.imageURL = action.payload.imageURL,
      state.project = action.payload.project,
      state.name = action.payload.name,
      state.description = action.payload.description,
      state.mintAmt = action.payload.mintAmt,
      state.royalties = action.payload.royalties,
      state.priceInitial = action.payload.priceInitial,
      state.priceNow = action.payload.priceNow,
      state.address = action.payload.address,
      state.mintAsPublic = action.payload.mintAsPublic
    },
    removeNFT: (state) => {
      state.imageURL = null,
      state.project = null,
      state.name = null,
      state.description = null,
      state.mintAmt = null,
      state.royalties = null,
      state.priceInitial = null,
      state.priceNow = null,
      state.address = null,
      state.mintAsPublic = null
    }
  }
})

export const { addNFT, removeNFT } = nftSlice.actions;

export default nftSlice.reducer