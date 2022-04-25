import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./slices/userSlice"
import messageReducer from './slices/messageSlice'
import nftReducer from './slices/nftSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    message : messageReducer,
    nft: nftReducer
  }
})