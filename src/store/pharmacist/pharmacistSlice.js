import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

// ---------------------get pending Mearchantr----------------------------------
export const getPendingPharmacist = createAsyncThunk(
  "pharmacistSlice/getPendingPharmacist",
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
export const getConfirmedPharmacist = createAsyncThunk(
  "pharmacistSlice/getConfirmedPharmacist",
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
export const getBlockedPharmacist = createAsyncThunk(
  "pharmacistSlice/getBlockedPharmacist",
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
  pendingPharmacistsList: [],
  confirmedPharmacistsList: [],
  blockedPharmacistsList: [],
  isLoading: false,
  error: null,
};
const pharmacistSlice = createSlice({
  name: "pharmacistSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // ----------------pending pharmacist---------------------
    [getPendingPharmacist.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPendingPharmacist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pendingPharmacistsList = action.payload.reverse();
    },
    [getPendingPharmacist.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ----------------get confirmed Pharmacist---------------------
    [getConfirmedPharmacist.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getConfirmedPharmacist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.confirmedPharmacistsList = action.payload.reverse();
    },
    [getConfirmedPharmacist.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ----------------get blocked Pharmacist---------------------
    [getBlockedPharmacist.pending]: (state, action) => {
      state.isLoading = false;
    },
    [getBlockedPharmacist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blockedPharmacistsList = action.payload.reverse();
    },
    [getBlockedPharmacist.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default pharmacistSlice.reducer;
