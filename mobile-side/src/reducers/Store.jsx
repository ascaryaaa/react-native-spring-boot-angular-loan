import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import jenisPinjamanReducer from './JenisPinjaman'
import promoReducer from "./Promos";
import userReducer from "./User";

export default configureStore({
    reducer: {
        jenisPinjaman: jenisPinjamanReducer,
        promo : promoReducer,
        user: userReducer
=======
import jenisPinjamanReducer from './JenisPinjaman';
import accountReducer from "./Account";

export default configureStore({
    reducer: {
        account: accountReducer,
        jenisPinjaman: jenisPinjamanReducer
>>>>>>> scaa
    }
})