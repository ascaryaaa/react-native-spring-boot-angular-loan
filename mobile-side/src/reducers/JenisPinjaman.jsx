import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { Alert} from "react-native"
import axios from "axios"
import Constant from '../utils/Constant';

export const getJenisPinjamans = createAsyncThunk(
    'get-jenis-pinjaman',
    async (payload, thunkApi) => {
        try {
            const response = await axios.get(Constant.getJenisPinjamans)
            return thunkApi.fulfillWithValue(response.data)
        } catch (error) {

        }
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

const jenisPinjamanReducer = jenisPinjamanSlice.reducer

export default jenisPinjamanReducer