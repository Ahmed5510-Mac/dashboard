import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

// ---------------------get pending Doctor----------------------------------

export const getPendingOrder = createAsyncThunk(
  "orderSlice/getPendingDoctor",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        baseAPI + `/orders/admin/ordersBystatus/pending/1'`,
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      // test
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// initial state
const initialState = {
  pendingDoctorsorderList: [],
  isLoading: false,
  error: null,
  pageNumber: 1,
};
const doctorOrderSlice = createSlice({
  name: "getPendingOrder",
  initialState,
  reducers: {},
  extraReducers: {
    // ----------------pending doctor order---------------------
    [getPendingOrder.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPendingOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pendingDoctorsorderList = action.payload.reverse();
    },
    [getPendingOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default doctorOrderSlice.reducer;
