
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const gettaskAPI = createAsyncThunk(
    "taskSlice/gettaskAPI",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(`https://reqres.in/api/users?page=1`);
             return res.data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    gettaskAPIList: [],
    isLoading: false,
    error: null,
}
const getTaskSlice = createSlice(
    {
        name: "doctorSlice",
        initialState,
        reducers: {},
        extraReducers: {
            // ----------------pending doctor---------------------
            [gettaskAPI.pending]: (state, action) => {
                state.isLoading = true;
            },
            [gettaskAPI.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.gettaskAPIList = action.payload;
            },
            [gettaskAPI.rejected]: (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(action.payload)
            },
        }
    })
    export default getTaskSlice.reducer;