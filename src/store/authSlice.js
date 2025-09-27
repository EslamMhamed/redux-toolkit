import { createSlice } from "@reduxjs/toolkit"


const intialAuthState= {
  isAuth : false
}

const authSlice = createSlice({
  name: "auth",
  initialState: intialAuthState,
  reducers:{
    login(state){
      state.isAuth=true
    },

    logout(state){
      state.isAuth= false
    }
  }
})

export default authSlice.reducer

export const authActions = authSlice.actions

