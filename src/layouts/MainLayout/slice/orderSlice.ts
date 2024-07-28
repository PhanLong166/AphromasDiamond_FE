import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OrderState {
    OrderID: number;
    VoucherID: number;
    Shippingfee: number;
}

const initialOrderState: OrderState = {
    OrderID: 0,
    VoucherID: 0,
    Shippingfee: 0,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialOrderState,
    reducers: {
        setOrderID: (state, action: PayloadAction<number>) => {
            state.OrderID = action.payload;
        },
        setVoucherID: (state, action: PayloadAction<number>) => {
            state.VoucherID = action.payload;
        },
        setShippingfee: (state, action: PayloadAction<number>) => {
            state.Shippingfee = action.payload;
        }
    }
});

export const { setOrderID, setVoucherID, setShippingfee } = orderSlice.actions;

export default orderSlice.reducer;