'use client'
import { configureStore } from "@reduxjs/toolkit"
import Counter from './Features/counterSlice'
export const store = configureStore({
    reducer:{
        Counter
    }
})
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;