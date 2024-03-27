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
      const response = await axios.get(`${urls.getFormListUser}${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to soft delete a form by ID
export const softDeleteForm = createAsyncThunk(
  'forms/softDeleteForm',
  async (formId, thunkAPI) => {
    try {
      const token = await getToken(); // Retrieve the token
      const response = await axios.delete(`${urls.softDeleteForm}${formId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Use bearer token in request headers
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
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
      })
      .addCase(softDeleteForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(softDeleteForm.fulfilled, (state, action) => {
        state.loading = false;
        // Update the state to reflect the soft deleted form
        state.data = state.data.map(form =>
          form.id === action.payload.id ? { ...form, deleted: true } : form
        );
      })
      .addCase(softDeleteForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Assuming your error payload contains a message field
      });
  },
});

export default formsSlice.reducer;
