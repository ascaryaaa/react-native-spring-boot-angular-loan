import { configureStore } from "@reduxjs/toolkit";
import jenisPinjamanReducer from './JenisPinjaman';
import accountReducer from "./Account";

export default configureStore({
    reducer: {
        account: accountReducer,
        jenisPinjaman: jenisPinjamanReducer
    }
})