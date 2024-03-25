import { configureStore } from "@reduxjs/toolkit";
import jenisPinjamanReducer from './JenisPinjaman'
import promoReducer from "./Promos";
import userReducer from "./User";

export default configureStore({
    reducer: {
        jenisPinjaman: jenisPinjamanReducer,
        promo : promoReducer,
        user: userReducer
    }
})