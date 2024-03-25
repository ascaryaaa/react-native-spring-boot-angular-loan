import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAccountData } from "../utils/apiUtils";

// Async thunk to fetch account data by hashed ID
export const getAccountByHashedId = createAsyncThunk(
  'account/getByHashedId',
  async (hashedId, { rejectWithValue }) => {
    try {
      const response = await fetchAccountData(hashedId); // Assuming fetchAccountData takes hashedId as an argument
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Slice for account state
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountByHashedId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccountByHashedId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAccountByHashedId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Export actions and reducer
export const accountActions = accountSlice.actions;
export default accountSlice.reducer;