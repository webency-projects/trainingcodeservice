import { configureStore } from "@reduxjs/toolkit";
import {themeReducer} from "@features/theme";
import {lectureReducer} from "@pages/Dashboard/Teacher/store/slice/lectureSlice.ts";
import axios from "axios";
import {editorLectureReducer} from "@widgets/Dashboard/Teacher/Lecture/store/lectureSlice.ts";
export const store = configureStore({
    reducer:{
        theme: themeReducer,
        lectures: lectureReducer,
        editorLectures: editorLectureReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                apiClient: axios
            }
        },
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
