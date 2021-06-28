import {createSlice} from '@reduxjs/toolkit';
import { items1, items2, headsets } from '../../data';

export const products = createSlice({
    name:'products',
    initialState:{
        products: [
            ...items1,
            ...items2,
            ...headsets
        ]
    },
    reducers:{
       
    }
})
// export const {increment, decrement} = products.actions
export default products.reducer