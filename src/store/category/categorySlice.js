import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const addCategory = createAsyncThunk(
  "categorySlice/addCategory",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(baseAPI + `/categories`, data, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });

      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCategoriesByType = createAsyncThunk(
  "categorySlice/getAllCategoriesByType",
  async (categoryType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/categories/${categoryType}`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// initial state
const initialState = {
  categories: [],
  error: false,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: {
    // ---------------- add categories ---------------------
    [addCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.pendingDoctorsList = action.payload.reverse();
    },
    [addCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- get categories ---------------------
    [getAllCategoriesByType.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllCategoriesByType.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.reverse();
    },
    [getAllCategoriesByType.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default categorySlice.reducer;
