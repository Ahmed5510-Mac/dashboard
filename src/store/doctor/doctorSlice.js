import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseAPI = "https://fathomless-hollows-91408.herokuapp.com";

// ---------------------get pending Doctor----------------------------------

export const getPendingDoctor = createAsyncThunk(
    "doctorSlice/getPendingDoctor",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(baseAPI+`/dashboard/doctor/getpending/1`);
            console.log(res)
             return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// ---------------------get confirmed Doctor----------------------------------
export const getConfirmedDoctor = createAsyncThunk(
    "doctorSlice/getConfirmedDoctor",
    async (pageNumber, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        console.log(pageNumber)
        try {
            const res = await axios.get(baseAPI + `/dashboard/doctor/${pageNumber}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// ---------------------get blocked Doctor----------------------------------
export const getBlockedDoctor = createAsyncThunk(
    "doctorSlice/getBlockedDoctor",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(baseAPI + '/dashboard/doctor/getblocked/1');
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// initial state 
const initialState = {
    pendingDoctorsList: [],
    confirmedDoctorsList: [],
    blockedDoctorsList: [],
    isLoading: false,
    error: null,
    pageNumber:1
}
const doctorSlice = createSlice(
    {
        name: "doctorSlice",
        initialState,
        reducers: {},
        extraReducers: {
            // ----------------pending doctor---------------------
            [getPendingDoctor.pending]: (state, action) => {
                state.isLoading = true;
            },
            [getPendingDoctor.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.pendingDoctorsList = action.payload.reverse();
            },
            [getPendingDoctor.rejected]: (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },

            // ----------------get confirmed Doctor---------------------
            [getConfirmedDoctor.pending]: (state, action) => {
                state.isLoading = true;
            },
            [getConfirmedDoctor.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.confirmedDoctorsList = action.payload.reverse();
            },
            [getConfirmedDoctor.rejected]: (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },

            // ----------------get blocked Doctor---------------------
            [getBlockedDoctor.pending]: (state, action) => {
                state.isLoading = false;
            },
            [getBlockedDoctor.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.blockedDoctorsList = action.payload.reverse();
                
            },
            [getBlockedDoctor.rejected]: (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },

        }
    }
)

export default doctorSlice.reducer;