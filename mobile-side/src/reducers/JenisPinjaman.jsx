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
    },
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getJenisPinjamans.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getJenisPinjamans.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(getJenisPinjamans.rejected, (state, action) => {
            Alert.alert(action.payload);
            state.loading = false;
        })
    }
})

const jenisPinjamanReducer = jenisPinjamanSlice.reducer

export default jenisPinjamanReducer