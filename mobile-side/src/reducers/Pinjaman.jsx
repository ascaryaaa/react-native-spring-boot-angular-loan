import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import urls from '../utils/Constant';
import { getToken } from '../utils/apiUtils';

export const fetchMonitoringDetail = createAsyncThunk(
    'pinjaman/fetchMonitoringDetail',
    async (formId, thunkAPI) => {
      try {
        const token = await getToken(); // Get token
        const response = await axios.get(`${urls.getMonitoringDetail}${formId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add authorization header
          },
        });
        console.log("////////////////", response)
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const pinjamanSlice = createSlice({
  name: 'pinjaman',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonitoringDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMonitoringDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMonitoringDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pinjamanSlice.reducer;