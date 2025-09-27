import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };


createSlice({
  name: "counter",
  initialState,
  reducers:{
    increment(){},
    decrement(){},
    increase(){},
    toggleCounter(){}
  }
})