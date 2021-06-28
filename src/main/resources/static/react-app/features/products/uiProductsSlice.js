import {createSlice} from '@reduxjs/toolkit';
import { items1, items2, headsets } from '../../data';

export const uiProductsSlice = createSlice({
    name:'UIProducts',
    initialState:{
        products: {
            items1,
            items2,
            headsets
        }
    },
    reducers:{
       
    }
})
// export const {increment, decrement} = uiProductsSlice.actions
export default uiProductsSlice.reducer