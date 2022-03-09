import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: null,
  description: null,
  buttons: []
};
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { 
        message: action.payload.message,
        description: action.payload.description,
        buttons: action.payload.buttons
       };
    },
    clearMessage: () => {
      return { 
        message: null,
        description: null,
        buttons: null };
    },
  },
});
const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions
export default reducer;