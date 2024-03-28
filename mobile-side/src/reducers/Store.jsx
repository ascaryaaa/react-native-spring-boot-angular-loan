import { configureStore } from "@reduxjs/toolkit";
import jenisPinjamanReducer from './JenisPinjaman';
import accountReducer from "./Account";
import promoReducer from "./Promos";
import formsReducer from './Form';
import cabangReducer from './Cabang';
import pinjamanReducer from './Pinjaman';

export default configureStore({
    reducer: {
        account: accountReducer,
        jenisPinjaman: jenisPinjamanReducer,
        promo : promoReducer,
        forms: formsReducer,
        cabang: cabangReducer,
        pinjaman: pinjamanReducer,
    }
});
