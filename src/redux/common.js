// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    mode: "dark",
    alert: {
      show: false,
      type: 'success',
      msg: ''
    }
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setAlert: (state, action) => {
      state.alert.show = action.payload.show;
      state.alert.type = action.payload.type;
      state.alert.msg = action.payload.msg;
    },
  },
});

export const {
  setMode,
  setAlert
} = commonSlice.actions;

export default commonSlice.reducer;
