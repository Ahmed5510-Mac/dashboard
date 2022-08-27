import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const addBrand = createAsyncThunk(
  "brandSlice/addbrand",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(baseAPI + `/brand`, data, {
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
  async (brandType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/brands/${brandType}`, {
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
        data:data
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
  editablebrand: null,
  brandType: "product",
  error: false,
  isLoading: false,
};

const brandSlice = createSlice({
  name: "brandSlice",
  initialState,
  reducers: {
    setEditablebrand: (state, action) => {
      state.editablebrand = action.payload;
    },
    resetEditablebrand: (state, action) => {
      console.log("resetting --------------");
      state.editablebrand = action.payload;
    },
    // -------------- setbrand Type ----------
    setbrandType: (state, action) => {
      state.brandType = action.payload;
    },
  },
  extraReducers: {
    // ---------------- add brands ---------------------
    [addbrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addbrand.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addbrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- get brands ---------------------
    [getAllBrandsByType.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllBrandsByType.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.brands = action.payload.reverse();
    },
    [getAllBrandsByType.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- edit brands ---------------------
    [editbrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editbrand.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [editbrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- delete brand ---------------------
    [deletebrand.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deletebrand.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deletebrand.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setEditablebrand, resetEditablebrand, setbrandType } =
  brandSlice.actions;
export default brandSlice.reducer;


