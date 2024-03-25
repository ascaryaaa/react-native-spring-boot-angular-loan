import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { fetchJenisPinjamanData } from "../utils/apiUtils";

export const getJenisPinjamans = createAsyncThunk(
    'jenisPinjaman/getJenisPinjamans',
    async () => {
        return fetchJenisPinjamanData(); // Reuse the API utility function
    }
)

const jenisPinjamanSlice = createSlice({
    name: 'jenisPinjaman',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
        .addCase(getJenisPinjamans.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getJenisPinjamans.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(getJenisPinjamans.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default jenisPinjamanSlice.reducer;