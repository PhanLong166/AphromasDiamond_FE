import { cartSlice } from "@/layouts/MainLayout/slice/cartSlice";
import { customSlice } from "@/layouts/MainLayout/slice/customRingSlice";
import { orderSlice } from "@/layouts/MainLayout/slice/orderSlice";
import uploadSlice from "@/pages/Admin/ProductPage/Diamond/components/slice";
import uploadSliceSetting from "@/pages/Admin/ProductPage/Jewelry Setting/components/slice";
import { uploadSliceDiaProduct } from "@/pages/Admin/ProductPage/Jewelry/components/AddDiaJewComponent/slice";
import uploadSliceReguProduct from "@/pages/Admin/ProductPage/Jewelry/components/AddReguComponent/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        customRing: customSlice.reducer,
        upload: uploadSlice.reducer,
        uploadSetting: uploadSliceSetting.reducer,
        uploadDiaProduct: uploadSliceDiaProduct.reducer,
        uploadReguProduct: uploadSliceReguProduct.reducer,
        order: orderSlice.reducer,
    },
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare({
            serializableCheck: false
        }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;