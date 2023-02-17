import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../config/config.json";

const initialState = {
  error: "",
  isSuccess: false,
  isLoading: false,
  isError: false,
};

export const sendFeedback = createAsyncThunk("sendFeedback", async (data) => {
  const response = await fetch(config.backendURL, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
});

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(sendFeedback.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });

    builder.addCase(sendFeedback.pending, (state) => {
      state.isSuccess = false;
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(sendFeedback.rejected, (state, action) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export default feedbackSlice.reducer;
