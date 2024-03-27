import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getToken } from '../utils/apiUtils'; // Adjust the import path as needed
import urls from '../utils/Constant'; // Adjust the import path as needed

// Async thunk to fetch form details by user ID
export const fetchFormListById = createAsyncThunk(
  'forms/fetchById',
  async (userId, { rejectWithValue }) => {
    try {
      const token = await getToken();
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      const response = await axios.get(`${urls.getFormListUser}${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFormListById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFormListById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFormListById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default formsSlice.reducer;
