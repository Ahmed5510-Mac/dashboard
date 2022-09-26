import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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

export const addImageToProduct = createAsyncThunk(
  "productSlice/addImageToProduct",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        baseAPI + `/products/addimage/${data.id}`,
        data.data,
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
            "Content-Type": `multipart/form-data; boundary=${data.data._boundary}`,
          },
        }
      );

      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllProduct = createAsyncThunk(
  "productSlice/getAllProductsByType",
  async ({ categoryType, page }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        baseAPI + `/products/all/${categoryType}/${page || 1}`,
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchProductsByName = createAsyncThunk(
  "productSlice/searchProductsByName",
  async ({ categoryId, name }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        baseAPI + `/products/search/${categoryId}/${name}`,
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      );
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
      const res = await toast.promise(
        axios.delete(baseAPI + `/products`, {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
          data: data,
        }),
        {
          pending: "deleting product ...",
          success: "product is deleted 👌",
          // error: "Promise rejected 🤯",
        }
      );

      console.log(res);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message + "🤯")
      return rejectWithValue(error.message);
    }
  }
);

// initial state
const initialState = {
  products: [],
  categoryType: "product",
  editableProduct: null,
  error: false,
  isLoading: false,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setEditableProduct: (state, action) => {
      console.log(action.payload);
      state.editableProduct = action.payload;
    },
    resetEditableProduct: (state, action) => {
      state.editableProduct = action.payload;
    },
    // -------------- setCategory Type ----------
    setCategoryType: (state, action) => {
      state.categoryType = action.payload;
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

    // ---------------- search products by name ---------------------
    [searchProductsByName.pending]: (state, action) => {
      state.isLoading = true;
    },
    [searchProductsByName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [searchProductsByName.rejected]: (state, action) => {
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

export const { setEditableProduct, resetEditableProduct, setCategoryType } =
  productSlice.actions;
export default productSlice.reducer;
