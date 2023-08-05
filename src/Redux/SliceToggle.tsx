import { createSlice } from "@reduxjs/toolkit";
 import type { PayloadAction } from '@reduxjs/toolkit'

interface initialState{
    toggle: boolean;
    filterToggle:boolean;
}
const initialState:initialState={
    toggle:false,
    filterToggle:false
}
export const sliceToggle = createSlice({
  name: "toggle",
  initialState ,
  reducers: {
    changeToggle: (state, action:PayloadAction<boolean>) => {
     state.toggle= action.payload
    },
    changeFilterToggle: (state, action:PayloadAction<boolean>) => {
      state.filterToggle= action.payload
    }
  },
});
export const { changeToggle,changeFilterToggle } = sliceToggle.actions

export default sliceToggle.reducer
 


