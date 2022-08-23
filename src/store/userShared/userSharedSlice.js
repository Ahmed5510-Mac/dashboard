import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

// ---------------------  Change user status----------------------------------
export const changeStatus = createAsyncThunk(
  "userSharedSlice/changeStatus",
  async (changedData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(
        baseAPI + "/changestatus",
        {
          id: changedData.id,
          status: changedData.status,
          type: changedData.type,
        },
        {
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  isLoading: false,
  error: null,
  toggleSidebar: false,
};
const userSharedSlice = createSlice({
  name: "userSharedSlice",
  initialState,
  reducers: {
    toggleSidebarfun: (state, action) => {
      state.toggleSidebar = !state.toggleSidebar;
      // console.log( state.toggleSidebar)
    },
  },
  extraReducers: {
    // ----------------change user status---------------------
    [changeStatus.pending]: (state, action) => {
      state.isLoading = true;
    },
    [changeStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [changeStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { toggleSidebarfun } = userSharedSlice.actions;

export default userSharedSlice.reducer;
