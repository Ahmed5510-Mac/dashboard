import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

export const sendLoginUser = createAsyncThunk(
  "user/loginUser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(baseAPI + "/login", data);
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  isLogedIn: false,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // ----------------pending login---------------------
    [sendLoginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.isLogedIn = false;
    },
    [sendLoginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogedIn = true;
    },
    [sendLoginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
