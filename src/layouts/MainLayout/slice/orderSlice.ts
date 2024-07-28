import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OrderState {
    OrderID: number;
    VoucherID: number
}

const initialOrderState: OrderState = {
    OrderID: 0,
    VoucherID: 0
};

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialOrderState,
    reducers: {
        setOrderID: (state, action: PayloadAction<number>) => {
            state.OrderID = action.payload;
        },
        setVoucherID: (state, action: PayloadAction<number>) => {
            state.VoucherID = action.payload
        }
    }
});

export const { setOrderID, setVoucherID } = orderSlice.actions;

export default orderSlice.reducer;