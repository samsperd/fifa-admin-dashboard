import { configureStore } from "@reduxjs/toolkit"
import { footballApi } from "../services/footballApi"
import { betslipSlice } from "./slices/betslipSlice"
import colorModeSlice from "./slices/colorMode"
import matchIdSlice from './slices/matchSlice'

export default configureStore({
    reducer: {
        [footballApi.reducerPath] : footballApi.reducer,
        [matchIdSlice.name]: matchIdSlice.reducer,
        [colorModeSlice.name]: colorModeSlice.reducer,
        [betslipSlice.name]: betslipSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(footballApi.middleware)
})