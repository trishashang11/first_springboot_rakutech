import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'user',
    initialState:{
       user: {}
    },
    reducers:{
       add: (state, action) => {
           state.user = action.payload;
       }
    }
})  
export const {add} = userSlice.actions
export default userSlice.reducer