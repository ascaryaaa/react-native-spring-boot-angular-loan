import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../utils/apiUtils";

export const getUsers = createAsyncThunk(
    'promo/getUsers',
    async () => {
        return fetchUserData(); // Reuse the API utility function
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

const userReducer = userSlice.reducer
export default userReducer;