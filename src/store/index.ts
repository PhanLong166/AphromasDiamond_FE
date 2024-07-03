import { cartSlice } from "@/layouts/MainLayout/slice/cartSlice";
import { customSlice } from "@/layouts/MainLayout/slice/customRingSlice";


import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        customRing: customSlice.reducer,
    },
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare({
            serializableCheck: false
        }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;