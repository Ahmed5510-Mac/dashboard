import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const addSupplier = createAsyncThunk(
  "supplierSlice/addSupplier",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(baseAPI + `/suppliers`, data, {
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

export const getAllSupplier = createAsyncThunk(
  "supplierSlice/getAllSupplier",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/suppliers`, {
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

export const editSupplier = createAsyncThunk(
  "supplierSlice/editSupplier",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(baseAPI + `/suppliers`, data, {
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

export const deleteSupplier = createAsyncThunk(
  "supplierSlice/deleteSupplier",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(baseAPI + `/suppliers`, {
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
  suppliers: [],
  editableSupplier: null,
  error: false,
  isLoading: false,
};

const supplierSlice = createSlice({
  name: "supplierSlice",
  initialState,
  reducers: {
    setEditableSupplier: (state, action) => {
      state.editableSupplier = action.payload;
    },
    resetEditableSupplier: (state, action) => {
      state.editableSupplier = action.payload;
    },
  },
  extraReducers: {
    // ---------------- add suppliers ---------------------
    [addSupplier.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addSupplier.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addSupplier.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- get suppliers ---------------------
    [getAllSupplier.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllSupplier.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.suppliers = action.payload.reverse();
    },
    [getAllSupplier.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- edit suppliers ---------------------
    [editSupplier.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editSupplier.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [editSupplier.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- delete supplier ---------------------
    [deleteSupplier.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteSupplier.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteSupplier.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setEditableSupplier, resetEditableSupplier } =
  supplierSlice.actions;
export default supplierSlice.reducer;
