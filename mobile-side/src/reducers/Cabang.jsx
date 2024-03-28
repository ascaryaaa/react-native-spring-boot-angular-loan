import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCabangData } from "../utils/apiUtils";

// Async thunk to fetch cabang data
export const getCabangData = createAsyncThunk(
  'cabang/fetchCabangData',
  async (_, { rejectWithValue }) => { // Assuming no argument is needed for fetching cabang data
    try {
      const response = await fetchCabangData();
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Initial state declaration
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Create the Cabang slice
const cabangSlice = createSlice({
  name: 'cabang',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling pending state
      .addCase(getCabangData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handling successful fetching
      .addCase(getCabangData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      // Handling fetching errors
      .addCase(getCabangData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer
export default cabangSlice.reducer;

// Export selectors to access cabang data, loading state, and error state
export const selectCabangData = (state) => state.cabang.data;
export const selectCabangLoading = (state) => state.cabang.loading;
export const selectCabangError = (state) => state.cabang.error;
