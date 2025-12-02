import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./CounterSlice"
import cartSlice from "./CartSlice"

 export const store =configureStore({
    reducer:{
counter:counterReducer,
cart:cartSlice
    }
})

