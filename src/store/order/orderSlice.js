import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const getAllOrdersByStatus = createAsyncThunk(
  "orderSlice/getAllOrdersByStatus",
  async ({orderStatus, page}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/orders/admin/ordersBystatus/${orderStatus}/${page || 1}`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token")
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDoctorOrderDetails = createAsyncThunk(
  "orderSlice/getDoctorOrderDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/orders/doctor/orderDetails/${id}`, {
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

export const getDoctorOrderTrackInfo = createAsyncThunk(
  "orderSlice/getDoctorOrderTrackInfo",
  async (orderId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/orders/doctor/trackorder/${orderId}`, {
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

export const getOrdersByDate = createAsyncThunk(
  "orderSlice/getOrdersByDate",
  async ({from, to, page}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(baseAPI + `/orders/admin/searchDate/${from}/${to}/${page || 1}`, {
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

export const cancelDoctorOrder = createAsyncThunk(
  "orderSlice/cancelDoctorOrder",
  async (orderId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(baseAPI + `/orders/doctor/cancelOrder`, {orderId} , {
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


export const deleteOrder = createAsyncThunk(
  "orderSlice/deleteOrder",
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
  orders: [],
  editableOrder: null,
  orderType: "product",
  error: false,
  isLoading: false,
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setEditableOrder: (state, action) => {
      state.editableOrder = action.payload;
    },
    resetEditableOrder: (state, action) => {
      console.log("resetting --------------");
      state.editableOrder = action.payload;
    },
  },
  extraReducers: {

    // ---------------- get Orders By Status ---------------------
    [getAllOrdersByStatus.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllOrdersByStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.reverse();
    },
    [getAllOrdersByStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- get Orders from/to Date ---------------------
    [getOrdersByDate.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getOrdersByDate.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.reverse();
    },
    [getOrdersByDate.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- edit categories ---------------------
    [getDoctorOrderDetails.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getDoctorOrderDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [getDoctorOrderDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ---------------- delete order ---------------------
    [deleteOrder.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setEditableOrder, resetEditableOrder, setOrderType } =
  orderSlice.actions;
export default orderSlice.reducer;
