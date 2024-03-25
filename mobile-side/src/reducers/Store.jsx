import { configureStore } from "@reduxjs/toolkit";
import jenisPinjamanReducer from './JenisPinjaman'

export default configureStore({
    reducer: {
        jenisPinjaman: jenisPinjamanReducer
    }
})