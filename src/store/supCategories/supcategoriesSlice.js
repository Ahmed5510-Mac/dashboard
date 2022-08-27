import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const addSubCategory = createAsyncThunk(
  "subCategorySlice/addSubCategory",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(baseAPI + `/subcategories`, data, {
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

export const getAllSubCategories = createAsyncThunk(
  "subCategorySlice/getAllCategoriesByType",
  async (subCategoryType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/subcategories/${subCategoryType}`, {
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

export const editSubCategory = createAsyncThunk(
  "subCategorySlice/editSubCategory",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(baseAPI + `/subcategories`, data, {
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

export const deleteSubCategory = createAsyncThunk(
  "subCategorySlice/deleteSubCategory",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(baseAPI + `/subcategories`, {
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
  subCategories: [],
  editableSubCategory: null,
  subCategoryType: "product",
  error: false,
  isLoading: false,
};

const subCategorySlice = createSlice({
  name: "subCategorySlice",
  initialState,
  reducers: {
    setEditableSubCategory: (state, action) => {
      state.editableSubCategory = action.payload;
    },
    resetEditableSubCategory: (state, action) => {
      console.log("resetting --------------");
      state.editableSubCategory = action.payload;
    },
  },
  extraReducers: {
    // ---------------- add categories ---------------------
    [addSubCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addSubCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addSubCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- get categories ---------------------
    [getAllSubCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllSubCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subCategories = action.payload.reverse();
    },
    [getAllSubCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- edit categories ---------------------
    [editSubCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editSubCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [editSubCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- delete subCategory ---------------------
    [deleteSubCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteSubCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteSubCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setEditableSubCategory, resetEditableSubCategory, setSubCategoryType } =
  subCategorySlice.actions;
export default subCategorySlice.reducer;
