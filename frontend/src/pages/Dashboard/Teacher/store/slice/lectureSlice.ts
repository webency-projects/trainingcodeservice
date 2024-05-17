import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadLectures = createAsyncThunk(
    "@@lectures/loadLectures",
    async () => {
        return "";
    }
);
type stateType = {
    status: "idle" | "loading" | "received" | "rejected",
    error: string | {} | null,
    list: []
}
const initialState:stateType = {
    status: "idle",
    error: null,
    list: [],
}
const lectureSlice = createSlice({
    name: "@@lectures",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadLectures.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loadLectures.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadLectures.fulfilled, (state, action) => {
                state.status = "received";
                state.list = action.payload.data;
            })
    }
})

export const lectureReducer = lectureSlice.reducer;
export const selectAllLectures = (state:any) => state.lecture.list;

export const selectLecturesInfo = (state:any) => ({
    status: state.lectures.status,
    error: state.lectures.error,
    qty: state.lectures.list.length,
})