import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const addProduct = createAsyncThunk(
  "productSlice/addproduct",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(baseAPI + `/products`, data, {
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

export const getAllProduct = createAsyncThunk(
  "productSlice/getAllProductsByType",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/products/random`, {
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

export const editProduct = createAsyncThunk(
  "productSlice/editProduct",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(baseAPI + `/products`, data, {
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

export const deleteProduct = createAsyncThunk(
  "productSlice/deleteproduct",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(baseAPI + `/products`, {
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
  products: [],
  editableProduct: null,
  error: false,
  isLoading: false,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setEditableProduct: (state, action) => {
      state.editableProduct = action.payload;
    },
    resetEditableProduct: (state, action) => {
      state.editableProduct = action.payload;
    },
  },
  extraReducers: {
    // ---------------- add products ---------------------
    [addProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- get products ---------------------
    [getAllProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.reverse();
    },
    [getAllProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- edit products ---------------------
    [editProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [editProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- delete product ---------------------
    [deleteProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setEditableProduct, resetEditableProduct } =
  productSlice.actions;
export default productSlice.reducer;
