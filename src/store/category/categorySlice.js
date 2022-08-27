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

export const editCategory = createAsyncThunk(
  "categorySlice/editCategory",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(baseAPI + `/categories`, data, {
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

export const deleteCategory = createAsyncThunk(
  "categorySlice/deleteCategory",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(baseAPI + `/categories`, {
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
  categories: [],
  editableCategory: null,
  categoryType: "product",
  error: false,
  isLoading: false,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setEditableCategory: (state, action) => {
      state.editableCategory = action.payload;
    },
    resetEditableCategory: (state, action) => {
      console.log("resetting --------------");
      state.editableCategory = action.payload;
    },
    // -------------- setCategory Type ----------
    setCategoryType: (state, action) => {
      state.categoryType = action.payload;
    },
  },
  extraReducers: {
    // ---------------- add categories ---------------------
    [addCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
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

    // ---------------- edit categories ---------------------
    [editCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [editCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- delete category ---------------------
    [deleteCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setEditableCategory, resetEditableCategory, setCategoryType } =
  categorySlice.actions;
export default categorySlice.reducer;
