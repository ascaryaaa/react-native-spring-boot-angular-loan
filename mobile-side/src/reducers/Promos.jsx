import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPromoData } from "../utils/apiUtils";

export const getPromos = createAsyncThunk(
    'promo/getPromos',
    async () => {
        return fetchPromoData(); // Reuse the API utility function
    }
)

const promoSlice = createSlice({
    name: 'promo',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
        .addCase(getPromos.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getPromos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(getPromos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

const promoReducer = promoSlice.reducer
export default promoReducer;