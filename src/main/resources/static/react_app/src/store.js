import {configureStore} from '@reduxjs/toolkit';
import uiProductSlice from './features/products/uiProductsSlice';
import productsSlice from './features/products/productsSlice';
import myCartSlice from './features/user/myCartSlice';

export default configureStore({
    reducer: {
        UIProducts:uiProductSlice,
        products: productsSlice,
        myCart: myCartSlice,
    },
})