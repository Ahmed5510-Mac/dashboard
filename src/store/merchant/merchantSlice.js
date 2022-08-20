import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

// ---------------------get pending Mearchantr----------------------------------
export const getPendingMerchant = createAsyncThunk(
  "merchantSlice/getPendingMerchant",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + "/pharmacist/getpending/1", {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });

      console.log("pahrmacist: ", res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ---------------------get confirmed Mearchantr----------------------------------
export const getConfirmedMerchant = createAsyncThunk(
  "merchantSlice/getConfirmedMerchant",
  async (pageNumber, thunkAPI) => {
    console.log("mearchant" + pageNumber);
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/pharmacist/${pageNumber}`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ---------------------get blocked Doctor----------------------------------
export const getBlockedMerchant = createAsyncThunk(
  "merchantSlice/getBlockedMerchant",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + "/pharmacist/getblocked/1", {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  pendingMerchantsList: [],
  confirmedMerchantsList: [],
  blockedMerchantsList: [],
  isLoading: false,
  error: null,
};
const merchantSlice = createSlice({
  name: "merchantSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // ----------------pending merchant---------------------
    [getPendingMerchant.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPendingMerchant.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pendingMerchantsList = action.payload.reverse();
    },
    [getPendingMerchant.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ----------------get confirmed Merchant---------------------
    [getConfirmedMerchant.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getConfirmedMerchant.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.confirmedMerchantsList = action.payload.reverse();
    },
    [getConfirmedMerchant.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ----------------get blocked Merchant---------------------
    [getBlockedMerchant.pending]: (state, action) => {
      state.isLoading = false;
    },
    [getBlockedMerchant.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blockedMerchantsList = action.payload.reverse();
    },
    [getBlockedMerchant.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default merchantSlice.reducer;
