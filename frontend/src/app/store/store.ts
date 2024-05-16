import { configureStore } from "@reduxjs/toolkit";
import {themeReducer} from "@features/theme";
export const store = configureStore({
    reducer:{
        theme: themeReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                apiClient: "",
                api: "api"
            }
        },
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
