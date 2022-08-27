import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const addBrand = createAsyncThunk(
  "brandSlice/addbrand",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(baseAPI + `/brands`, data, {
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

export const getAllBrand = createAsyncThunk(
  "brandSlice/getAllBrandsByType",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/brands`, {
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

export const editBrand = createAsyncThunk(
  "brandSlice/editBrand",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(baseAPI + `/brands`, data, {
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

export const deleteBrand = createAsyncThunk(
  "brandSlice/deletebrand",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(baseAPI + `/brands`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
        data: data,
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
  barnds: [],
  editableBrand: null,
  error: false,
  isLoading: false,
};

const brandSlice = createSlice({
  name: "brandSlice",
  initialState,
  reducers: {
    setEditableBrand: (state, action) => {
      state.editableBrand = action.payload;
    },
    resetEditableBrand: (state, action) => {
      state.editableBrand = action.payload;
    },
  },
  extraReducers: {
    // ---------------- add brands ---------------------
    [addBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addBrand.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addBrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- get brands ---------------------
    [getAllBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllBrand.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.brands = action.payload.reverse();
    },
    [getAllBrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- edit brands ---------------------
    [editBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editBrand.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [editBrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- delete brand ---------------------
    [deleteBrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBrand.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteBrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setEditableBrand, resetEditableBrand } = brandSlice.actions;
export default brandSlice.reducer;
