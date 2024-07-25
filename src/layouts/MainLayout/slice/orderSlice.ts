import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OrderState {
    OrderID: number;
}

const initialOrderState: OrderState = {
    OrderID: 0,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialOrderState,
    reducers: {
        setOrderID: (state, action: PayloadAction<number>) => {
            state.OrderID = action.payload;
        }
    }
});

export const { setOrderID } = orderSlice.actions;

export default orderSlice.reducer;